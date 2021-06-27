<?php

namespace App\Http\Controllers\Admin;

use Carbon\Carbon;
use App\Models\Sale;
use App\Models\Credit;
use App\Models\Company;
use App\Models\Product;
use App\Models\Customer;
use App\Models\SaleItems;
use Illuminate\Http\Request;
use App\Models\CompanySalePaid;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class SaleController extends Controller
{
    public function __construct(Request $request)
    {
        if(!$request->ajax()){

            return abort(404);

        }

        $this->middleware('admin');

    }

    public function office_sale_index(Request $request)
    {
        $item=$request->item??20;

        $sales=Sale::orderBy('id','DESC')->where('sale_type',1)->with('company')->paginate($item);
        return response()->json([
            'sales'=>$sales,
            'status'=>"SUCCESS"
        ]);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   public function store(Request $request)
    {
        //  return $request->all();
        DB::transaction( function() use($request){
            //if company sale then sell will be according to company role
            if ($request->company_id) {
                $company= Company::where('id',$request->company_id)->first();
                    $sale=new Sale();
                    $sale->sale_type=$request->type;
                    $sale->company_id=$company->id;
                    $sale->paid_by=$request->paid_by;
                    $sale->name=$company->name;
                    $sale->mobile_no=$company->phone;
                    $sale->address=$company->phone;
                    $sale->invoice_no='S-'.$sale->id;
                    $sale->total=$request->AmountTotal;
                    $sale->paid=$request->paid ?? 0;
                    $sale->discount=$request->discount ?? 0;
                    $sale->save();

                   //save the sale item
                    foreach ($request->products as $item) {
                        //manage product stock
                        $product = Product::where('id', $item['product_id'])->first();
                        $product->stock = $product->stock - $item['quantity'];
                        $product->save();
                        //save the product stock
                        $sale_item = new SaleItems();
                        $sale_item->sale_id = $sale->id;
                        $sale_item->product_id = $item['product_id'];
                        $sale_item->price = $item['price'];
                        $sale_item->qty = $item['quantity'];
                        $sale_item->total=$item['price'] * $item['quantity'];
                        $sale_item->save();
                    }

                    //if paid more than zero taka
                     if($sale->paid > 0){
                            $credit = new Credit();
                            $credit->purpose = "company sale";
                            $credit->amount = $sale->paid ;
                            $credit->credit_in=$sale->paid_by;
                            $credit->comment ='company sale, invoice no  S-'.$sale->id;
                            $credit->date = date('Y-m-d');
                            $credit->insert_admin_id=session()->get('admin')['id'];
                            $credit->save();
                     }
                      if($sale->paid < $sale->total ){
                                DB::table('customer_dues')->insert([
                                'sale_id'=>$sale->id,
                                'customer_mobile_no'=>$company->phone,
                                'customer_name'=>$company->name,
                                'amount'=>$sale->total - $sale->paid,
                                'created_at'=>Carbon::now(),

                            ]);
                     }

            }else{
                //if sale not company sale
                    $sale=new Sale();
                    $sale->sale_type=$request->type;
                    $sale->company_id= null;
                    $sale->paid_by=$request->paid_by;
                    $sale->name=$request->name ?? null;
                    $sale->mobile_no=$request->mobile_no ?? null;
                    $sale->address=$request->address;
                    $sale->invoice_no='S-'.$sale->id;
                    $sale->total=$request->AmountTotal;
                    $sale->paid=$request->paid ?? 0;
                    $sale->discount=$request->discount ?? 0;
                    $sale->save();
                    //save the sale item
                    foreach ($request->products as $item) {
                        //manage product stock
                        $product = Product::where('id', $item['product_id'])->first();
                        $product->stock = $product->stock - $item['quantity'];
                        $product->save();
                        //save the product stock
                        $sale_item = new SaleItems();
                        $sale_item->sale_id = $sale->id;
                        $sale_item->product_id = $item['product_id'];
                        $sale_item->price = $item['price'];
                        $sale_item->qty = $item['quantity'];
                        $sale_item->total=$item['price'] * $item['quantity'];
                        $sale_item->save();
                    }
                        //first search customer new or exists
                        $customer=Customer::where('phone',$request->mobile_no)->first();
                        //if not customer then save, as a new customer
                        if(!$customer){
                            $customer=new Customer();
                            $customer->name=$request->name;
                            $customer->phone=$request->mobile_no;
                            $customer->address=$request->address;
                            $customer->city_id=2;
                            $customer->custome_type=3;        //ofice sale customer
                            $customer->save();
                        }
                        else{
                            $customer->name=$request->name;
                            $customer->address=$request->address;
                            $customer->save();
                        }
                        //send message to customer
                        $amount=$sale->total-$sale->discount;
                        Sale::SendMessageToCustomer($customer,$amount,$sale->id);
                        //create a credit.......
                            // $comment='office sale. Amount BDT '.$sale->total.' and paid by '.$sale->paid_by .' Sale created by_'. session()->get('admin')['name'];
                            $credit = new Credit();
                            $credit->purpose = "Office sale";
                            $credit->amount = $sale->paid-$request->partials_payment_amount;
                            $credit->credit_in=$sale->paid_by;
                            $credit->comment ='Office Sale. Invoice No  S-'.$sale->id;
                            $credit->date = date('Y-m-d');
                            $credit->insert_admin_id=session()->get('admin')['id'];
                            $credit->save();
                            if($request->partials_payment_amount > 0){
                                $credit = new Credit();
                                $credit->purpose = "Office sale";
                                $credit->amount =$request->partials_payment_amount;
                                $credit->credit_in=$request->partials_paid_by;
                                $credit->comment ="Office sale, Partials Payment";
                                $credit->date = date('Y-m-d');
                                $credit->insert_admin_id=session()->get('admin')['id'];
                                $credit->save();
                            }
                            //if customer not paid total amount,then create a customer dues
                            if($sale->paid < $sale->total ){
                                $due=$sale->total-$sale->paid-$sale->discount;
                                if($due>0){
                                    DB::table('customer_dues')->insert([
                                    'sale_id'=>$sale->id,
                                    'customer_mobile_no'=>$request->mobile_no,
                                    'customer_name'=>$request->name,
                                    'amount'=>$due,
                                    'created_at'=>Carbon::now(),

                                ]);
                                }
                            }
                        }
           });

            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'new sale was added'
            ]);

       }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sale=Sale::with('company')->find($id);
        $sale_item=SaleItems::where('sale_id',$sale->id)->with('product')->get();

        return response()->json([
            'sale'=>$sale,
            'items'=>$sale_item,
            'status'=>"SUCCESS"
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function paid($id){

        DB::transaction(function() use($id){
            $sale=Sale::findOrFail($id);
            $sale->status=2;
            $sale->save();
            //make comment
            $paid_by='';
            if($sale->paid_by==1){
                $paid_by='Cash';
            }elseif($sale->paid_by==2){
                $paid_by="bKash";
            }else{
                $paid_by="Bank";
            }
            $comment="company sale.created at ".$sale->created_at. " and paid date " . date('Y-m-d') . ". Amount BDT ". $sale->total . " and paid by ".$paid_by;
            $credit = new Credit();
            $credit->purpose = "company sale";
            $credit->amount = $sale->total;
            $credit->comment =$comment;
            $credit->date = date('Y-m-d');
            $credit->credit_in=$paid_by;
            $credit->insert_admin_id=session()->get('admin')['id'];
            $credit->save();
        });

        return \response()->json([
            'success'=>"OK",
            'message'=>'sale paid was successfully'
        ]);

    }
    public function return($id){
        $sale=Sale::findOrFail($id);
        $sale->status=3;
        $sale->save();

        $sale_itmes=SaleItems::where('sale_id',$id)->get();
      //save the sale item
      foreach ($sale_itmes as $item) {
        //manage product stock
        $product = Product::where('id', $item->product_id)->first();
        $product->stock = $product->stock + $item->qty;
        $product->save();

        return response()->json([
            'success'=>"OK",
            'message'=>'sale returned was successfully'
        ]);


         }

    }



    public function  office_sale_search_according_data($search){

        $sale_items=Sale::where('sale_type',1)->get();
        $sales=Sale::where('id', 'like', '%' . $search . '%')
                        ->orWhere('mobile_no','like', '%' . $search . '%')
                        ->orWhere('name','like', '%' . $search . '%')
                        ->where('sale_type',1)
                        ->orderBy('id', 'DESC')
                        ->paginate(10);

        return response()->json([
            'status'=>"OK",
            'sales'=>$sales,
        ]);
    }




    public function  office_sale_search_according_date_wise(Request $request){

        $sales='';
        $paginate=$request->item??10;
        if(!empty($request->start_date) && empty($request->end_date)){

                $sales=Sale::whereDate('created_at','=',$request->start_date)
                             ->where('sale_type',1)
                             ->paginate($paginate);

        }
        elseif(!empty($request->end_date) && !empty($request->start_date)){

                $sales=Sale::whereDate('created_at', '>=', $request->start_date)
                                ->whereDate('created_at', '<=', $request->end_date)
                                ->where('sale_type',1)
                                ->paginate($paginate);
         }else{
              $sales=Sale::whereDate('created_at','=',$request->end_date)
                     ->where('sale_type',1)
                     ->paginate($paginate);

         }
             return response()->json([
                'status'=>'OK',
                'sales'=>$sales
             ]);


    }





    public function company_sale_index(Request $request)
    {
        $item=$request->item??20;

        $sales=Sale::orderBy('id','DESC')->where('sale_type',2)->with('company')->paginate($item);
        return response()->json([
            'sales'=>$sales,
            'status'=>"SUCCESS"
        ]);
    }




    public function  company_sale_search_according_data($search){

        $sales = Sale::where('sale_type',2)->where('name', 'like', '%' . $search . '%')
                        ->orWhere('mobile_no','like', '%' . $search . '%')
                        ->orWhere('address','like', '%' . $search . '%')

                        ->orderBy('id', 'DESC')
                        ->paginate(10);

        return response()->json([
            'status'=>'OK',
            'sales'=>$sales
        ]);
    }




    public function  company_sale_search_according_date_wise(Request $request){

        $sales='';
        $paginate=$request->item??10;
        if(!empty($request->start_date) && empty($request->end_date)){

                $sales=Sale::whereDate('created_at','=',$request->start_date)
                             ->where('sale_type',2)
                             ->paginate($paginate);

        }
        elseif(!empty($request->end_date) && !empty($request->start_date)){

                $sales=Sale::whereDate('created_at', '>=', $request->start_date)
                                ->whereDate('created_at', '<=', $request->end_date)
                                ->where('sale_type',2)
                                ->paginate($paginate);
         }else{

            $sales=Sale::whereDate('created_at','=',$request->end_date)
                     ->where('sale_type',2)
                     ->paginate($paginate);

         }
        return response()->json([
            'status'=>'OK',
            'sales'=>$sales
        ]);


    }

    public function exchangeStore(Request $request){


        //return $request->all();
        if(empty($request->products)){
            return \response()->json('Sale Product Empty');
        }

        if(empty($request->exchanage_products)){
            return \response()->json('exchanage_products Empty');
        }
        if($request->exchange_total>$request->sale_total){
            return \response()->json('Exchaneg amount can not be bigger then Sale amount');
        }
        if($request->AmountTotal < $request->paid){
            return \response()->json('Paid can not be bigger invoice total');

        }

        $sale=new Sale();
        $sale->sale_type=$request->type;
        $sale->paid_by=$request->paid_by;
        $sale->name=$request->name ?? null;
        $sale->mobile_no=$request->mobile_no ?? null;
        $sale->address=$request->address;
        $sale->total=$request->AmountTotal;
        $sale->paid=$request->paid ?? 0;
        $sale->discount=$request->discount ?? 0;
        $sale->status=2;

        if($sale->save()){
            foreach ($request->products as $item) {

            //manage product stock
            $product = Product::where('id', $item['product_id'])->first();
            $product->stock = $product->stock - $item['quantity'];
            $product->save();

            //save the product stock
            $sale_item = new SaleItems();
            $sale_item->sale_id = $sale->id;
            $sale_item->product_id = $item['product_id'];
            $sale_item->price = $item['price'];
            $sale_item->qty = $item['quantity'];
            $sale_item->total=$item['price'] * $item['quantity'];
            $sale_item->save();

         }
         foreach ($request->exchanage_products as $prroduct) {

            //manage product stock
            $pro = Product::where('id', $prroduct['product_id'])->first();
            $pro->stock = $pro->stock + $prroduct['quantity'];
            $pro->save();

            $sale_item = new SaleItems();
            $sale_item->sale_id = $sale->id;
            $sale_item->product_id = $prroduct['product_id'];
            $sale_item->price = $prroduct['price'];
            $sale_item->qty = $prroduct['quantity'];
            $sale_item->total=$prroduct['price'] * $prroduct['quantity'];
            $sale_item->status=2;
            $sale_item->save();

         }

         //new credit
           if($sale->paid>0){
                $credit = new Credit();
                $credit->purpose = "Office sale";
                $credit->amount = $sale->paid;
                $credit->credit_in=$sale->paid_by;
                $credit->comment ='Office Sale | Exchange Sale. Invoice No  S-'.$sale->id;
                $credit->date = date('Y-m-d');
                $credit->insert_admin_id=session()->get('admin')['id'];
                $credit->save();
           }
           if($request->due>0){
                 DB::table('customer_dues')->insert([
                    'sale_id'=>$sale->id,
                    'customer_mobile_no'=>$request->mobile_no,
                    'customer_name'=>$request->name,
                    'amount'=>$request->due,
                    'created_at'=>Carbon::now(),
                ]);
           }

           return response()->json([
                'status' => 'SUCCESS',
                'message' => 'Exchange Sale Was added',
         ]);
        }
    }


    public function companySalePayment(Request $request){
          // return $request->all();
           DB::transaction(function() use($request){
               //finding company
               $company=Company::where('id',$request->company_id)->first();
               //inserting data in payment table
               $payment=new CompanySalePaid();
               $payment->date=$request->date ;
               $payment->company_id=$company->id ;
               $payment->amount=$request->amount ;
               $payment->credit_in=$request->credit_in ;
               $payment->comment=$request->comment ?? null ;
               $payment->save();
               //inserting crdit record
                $credit = new Credit();
                $credit->purpose = $company->name . " paid money";
                $credit->amount =  $request->amount;
                $credit->comment = $request->comment ?? null;
                $credit->date = $request->date;
                $credit->credit_in=$request->credit_in;
                $credit->insert_admin_id=session()->get('admin')['id'];
                $credit->save();
           });

             return response()->json([
                'status' => 'OK',
                'message' => 'Payment inserted successfully',
             ]);

    }


    public function CompanySaleDetails($id)
    {   $company=Company::findOrFail($id);
        $sales=Sale::where('company_id',$id)->orderBy('id','DESC')->with('saleItems','dueAmount')->paginate(50);
        return response()->json([
            'sales'=>$sales,
            'status'=>"OK",
            'company'=> $company,
        ]);

    }

    public function companyPayment($id) {

            $company=Company::findOrFail($id);
            $payments=CompanySalePaid::where('company_id',$id)->orderBy('id','DESC')->paginate(50);
            return response()->json([
                'payments'=>$payments,
                'status'=>"OK",
                'company'=> $company,
            ]);

        }





}

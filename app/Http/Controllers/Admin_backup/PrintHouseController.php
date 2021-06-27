<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\PrintHouse;
use App\Models\ReceievePrintedProduct;
use App\Models\ProductForPrint;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade as PDF;


class PrintHouseController extends Controller
{
    
   public function index(Request $request){
        
        $items=$request->item ?? 10;
        $print_houses=PrintHouse::orderBy('id','desc')->paginate($items);

       return response()->json([
            'success'=>'OK',
            'print_houses'=>$print_houses,
          ]);

   }

   
    public function print_details(Request $request){
        
       $prints = ProductForPrint::where('product_name',$request->product_name )->get() ;
       return response()->json($prints);
        
      }

    public function recieve_print_details(Request $request){
          
        $prints = ReceievePrintedProduct::where('product_name',$request->product_name )->get() ;
        return response()->json($prints);
          
        }


    public function printed_product_list($id){
        $printed_products = ProductForPrint::where('company_id',$id)->get()->groupBy('product_name') ;
        return response()->json($printed_products);
        
      }

     
    public function print_house_list(){

        $print_houses=PrintHouse::all();
        return response()->json($print_houses);

    }


     public function store(Request $request){
       
            $validatedData = $request->validate([
            'name' => 'required',
            'company_name' => 'required|unique:print_houses',
            'mobile_no' => 'required|digits:11|unique:print_houses',
            'address'=>"required",
             ]);

                $print_house= new PrintHouse();
                $print_house->name=$request->name;
                $print_house->company_name=$request->company_name;
                $print_house->mobile_no=$request->mobile_no;
                $print_house->address=$request->address;
                $print_house->save();

                return response()->json([
                    'status'=>'OK',
                    'message'=>'Added successfully'
                    
                ]);

            
    }




  public function receive_printed_products(Request $request,$id){
        
              $validatedData = $request->validate([
   
              'product_name' => 'required',
              'invoice_no' => 'required',
              'date' => 'required',
              'qty'=>"required",

              ]);

                  $printed= new ReceievePrintedProduct();
                  $printed->product_name=$request->product_name;
                  $printed->company_id=$id;
                  $printed->qty=$request->qty;
                  $printed->invoice_no=$request->invoice_no;
                  $printed->date=$request->date;
                  $printed->save();

                  return response()->json([
                      'status'=>'OK',
                      'message'=>'Received successfully'
                      
                  ]);

              
  }

    
      
    
    public function get_print_house_details($id){
          
            $print_house=PrintHouse::findOrFail($id);
            $total_print_cost=DB::table('product_for_prints')->where('company_id',$id)->sum('total_cost');
            $total_payment_paid=DB::table('print_house_payments')->where('print_house_id',$id)->sum('amount');
            $payment_paid=DB::table('print_house_payments')->where('print_house_id',$id)->get();
            $print_details=ProductForPrint::where('company_id',$id)->get()->groupBy('product_name');
            $receive_details=ReceievePrintedProduct::where('company_id',$id)->get()->groupBy('product_name');
          
            // grouping print data
            $p_data=[];
            foreach($print_details as $k=> $items){
              $p_data[$k]=[
                'qty'=>$items->sum('qty'),
                'total_cost'=>$items->sum('total_cost'),
                'receive_qty' => ReceievePrintedProduct::where('product_name',$k)->sum('qty'),
              ];
            }

            //grouping receive data
             $r_data=[];
            foreach($receive_details as $k=> $items){
              $r_data[$k]=[
                'qty'=>$items->sum('qty'),
              ];
            }
           
  
              return response()->json([
                  'print_house'=>$print_house,
                  'total_print_cost'=> $total_print_cost ,
                  'total_payment_paid'=> $total_payment_paid,
                  'payment_paid'=> $payment_paid,
                  'print_details' => $p_data,
                  'receive_details' => $r_data,
              ]);

        }

        


        public function add_product_for_print(Request $request){ 
          //  return $request->all();
            $validatedData = $request->validate([
                'invoice_no' => 'required',
                'qty' => 'required',
                'cost_per_qty' => 'required',
                'product_name' => 'required',

              ]);

            $print = new ProductForPrint();
            $print->company_id=$request->company_id;
            $print->date=$request->date;
            $print->product_name=$request->product_name;
            $print->invoice_no=$request->invoice_no;
            $print->qty=$request->qty;
            $print->cost_per_qty=$request->cost_per_qty;
            $print->total_cost=$request->cost_per_qty * $request->qty ;
            $print->save();
            return response()->json([
                  'success'=>'OK',
                  'message'=>'Added successully'
              ]);

          
        }


        
      

    }

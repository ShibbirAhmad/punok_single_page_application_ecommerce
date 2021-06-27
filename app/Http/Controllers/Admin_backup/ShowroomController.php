<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Showroom;
use App\Models\ShowroomManager;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use App\Models\Product;
use App\Models\ProductTransfer;
use App\Models\ProductTransferItem;

class ShowroomController extends Controller
{



    public function index(){
        $showrooms = Showroom::orderBy('id', 'DESC')->with('manager')->get();
        return response()->json([
            'showrooms' => $showrooms,
            'status' => 'SUCCESS'
        ]);
    }



    public function addShowroom(Request $request){

            $this->validate($request, [
                'name' => 'required|unique:showrooms',
                'address' => 'required',
                'contact_person' => 'required',
                'contact_number' => 'required|unique:showrooms',
            ]);
            $showroom = new Showroom();
            $showroom->name = $request->name;
            $showroom->address = $request->address;
            $showroom->contact_person = $request->contact_person;
            $showroom->contact_number = $request->contact_number;
            if ($showroom->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'showroom added successfully'
                ]);
        }
    }

    public function showroomItem($id){
          $showroom=Showroom::findOrFail($id);
          return response([
              'status'=>'OK',
              'showroom' => $showroom,
          ]);
    }


    public function updateShowroom(Request $request,$id){

            $this->validate($request, [
                'name' => 'required|unique:showrooms,name,'.$id,
                'address' => 'required',
                'contact_person' => 'required',
                'contact_number' => 'required|unique:showrooms,contact_number,'.$id,
            ]);
            $showroom = Showroom::findOrFail($id);
            $showroom->name = $request->name;
            $showroom->address = $request->address;
            $showroom->contact_person = $request->contact_person;
            $showroom->contact_number = $request->contact_number;
            if ($showroom->save()) {
                return response()->json([
                    'status' => 'SUCCESS',
                    'message' => 'showroom updated successfully'
                ]);
        }
    }




    public  function managers(Request $request){
        $item = $request->item ?? 10 ;
        $managers= ShowroomManager::orderBy('id','DESC')->paginate($item);
        return response()->json([
            "success" => "OK",
            "managers" => $managers ,
        ]);
    }



    public function addManager(Request $request){

        $validatedData = $request->validate([
            'showroom_id'  => 'required|unique:showroom_managers',
            'name'  => 'required',
            'address'  => 'required',
            'password'  => 'required|min:6',
            'email'  => 'required|unique:showroom_managers',
            'phone'  => 'required|unique:showroom_managers|digits:11',
        ]);


         $manager= new ShowroomManager ();
         $manager->showroom_id=$request->showroom_id ;
         $manager->name=$request->name ;
         $manager->phone=$request->phone ;
         $manager->email=$request->email ;
         $manager->address=$request->address ;
         $manager->password=Hash::make($request->password) ;
         if ($request->hasFile('image')) {
                $file_path=$request->file('image')->store('images/manager','public');
            $manager->image=$file_path ;
        }
         if ($manager->save()) {
             return response()->json([
                  'success' => 'OK',
                  'message' => 'New manager added successfully '
             ]);
         }


    }



    public function getManager($id){

         $manager  = ShowroomManager::findOrFail($id);
         if ($manager) {
            return response()->json([
                    "success"  => "OK",
                    "manager"  => $manager,  ]);
        }

}


    public function updateManager(Request $request, $id){

        $validatedData = $request->validate([
            'name'  => 'required',
            'address'  => 'required',
            'showroom_id'  => 'required|unique:showroom_managers,showroom_id,'.$id,
            'email'  => 'required|unique:showroom_managers,email,'.$id,
            'phone'  => 'required|digits:11,unique:showroom_managers,phone,'.$id,
        ]);

         $manager= ShowroomManager::find($id) ;
         $manager->showroom_id=$request->showroom_id ;
         $manager->name=$request->name ;
         $manager->address=$request->address ;
         $manager->phone=$request->phone ;
         $manager->email=$request->email ;
         if ($request->hasFile('image')) {
                $file_path=$request->file('image')->store('images/manager','public');
            $manager->image=$file_path ;
        }

         if ($manager->save()) {
             return response()->json([
                 'success' => 'OK',
                  'message' => 'Information updated successfully '
             ]);
         }


    }


    public function removeManager($id){

           $manager=ShowroomManager::findOrFail($id);
           $manager->delete();
           return response()->json([
               'status' => 'OK',
               'message' => 'Deleted'
           ]);
    }



    public function showroomTransactions(){

           $transactions = ProductTransfer::orderBy('id','desc')->paginate(20);
           return response()->json([
               'status' => 'OK',
               'transactions' => $transactions ,
           ]);
    }


   public function transactionDetails($id){

           $transaction = ProductTransfer::with('showroom')->findOrFail($id);
           $transaction_items=ProductTransferItem::where('product_transfer_id',$transaction->id)->with('product.productImage')->get();
           return response()->json([
               'status' => 'OK',
               'transaction' => $transaction,
               'transaction_items' => $transaction_items,
           ]);
    }


    public function transferProducts(Request $request){
        //  return $request->all();
          $validatedData=$request->validate([
               'showroom_id' => 'required',
               'total' => 'required',
          ]);
          DB::transaction(function ()  use($request) {
                $max_id=ProductTransfer::max('id') ?? 0  ;
                $invoice_no=$max_id + 432;
                $transfer=new ProductTransfer();
                $transfer->showroom_id=$request->showroom_id;
                $transfer->invoice_no=$invoice_no;
                $transfer->total=$request->total ;
                $transfer->comment=$request->comment ?? null ;
                $transfer->status=0;
                if ($transfer->save()) {
                    foreach ($request->products as $product) {
                        $transfer_item= new ProductTransferItem();
                        $transfer_item->product_transfer_id=$transfer->id ;
                        $transfer_item->product_id=$product['id'];
                        $transfer_item->purchase_price=$product['price'] ;
                        $transfer_item->sale_price=$product['sale_price'] ;
                        $transfer_item->quantity=$product['quantity'];
                        $transfer_item->total=$product['price'] * $product['quantity'];
                        $transfer_item->save();

                        //update stock of product
                        $p_stock=Product::findOrFail($product['id']);
                        $p_stock->stock=$p_stock->stock - $product['quantity'] ;
                        $p_stock->save();
                    }
                }
          });

          return response()->json([
              'status' => 'SUCCESS',
              'message' => 'Product transfered successfully'
          ]);

    }












}

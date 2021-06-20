<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Customer ;
use App\Models\DiscountMembership ;
use Maatwebsite\Excel\Facades\Excel ;
use App\Exports\CustomersExport ;
use App\Exports\RetailCustomersExport ;
use App\Exports\WholesaleCustomersExport ;
use App\Exports\OfficesaleCustomersExport ;

class CustomerController extends Controller
{
    public function getCustomer(){

        $customers= Customer::orderBy('id','DESC')->with('customerCity')->paginate(20);
        return response()->json([
           'customers' => $customers,
           'status' => 'SUCCESS'
       ]);
 }



 public function searchCustomer($data){

    $customers= Customer::where('name','like','%'.$data.'%')->orWhere('phone','like','%'.$data.'%')->with('customerCity')->paginate(20);
            return response()->json([
                'success' => 'OK',
            'customers' => $customers,

        ]);
}


 public  function export_customers(){

        return Excel::download(new CustomersExport(), 'customers.xlsx') ;
 }



 public  function export_retail_customers(){

      return Excel::download(new RetailCustomersExport(),'retail_customer.xlsx');
 }


 public  function export_wholesale_customers(){

      return Excel::download(new WholesaleCustomersExport(),'wholesale_customer.xlsx');
 }

 public  function export_officesale_customers(){

      return Excel::download(new OfficesaleCustomersExport(),'officesale_customer.xlsx');
 }



   public function membersipList(){

        $memberships = DiscountMembership::all();
        return response()->json([ 'memberships' => $memberships  ]);
   }



   public function removeMemberShip($id){

        $membership = DiscountMembership::where('customer_id',$id)->first();
        $membership->delete();
        return response()->json([
            'success' => 'OK',
            'message' => 'removed successfully',
         ]);
   }


    public function  addMemberShip(Request $request){

          $is_exist = DiscountMembership::where('customer_id',$request->customer_id)->first();
            if ($is_exist) {
                $is_exist->type=$request->type;
                $is_exist->save();

                return response()->json([
                    'success' => 'update',
                    'message' => 'updated successfully'
                 ]);

            }else {
                $validatedData = $request->validate([
                'customer_id' => 'required|unique:discount_memberships',
                'type' => 'required',
                ]);

                $membership = new DiscountMembership();
                $membership->customer_id=$request->customer_id ;
                $membership->type=$request->type ;
                $membership->save();

                return response()->json([
                    'success' => 'OK',
                    'message' => 'discount membership applied successfully'
                ]);
            }

    }



}

<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\BillPaidStatement;
use App\Models\BillStatement ;
use App\Models\BillPerMonth ;

class BillStatementController extends Controller
{
           


   public function bill_list(){

            $bills=BillStatement::all();
            return response()->json([
                   'success' => 'OK',
                   'bills' => $bills
                ]);

    }



    public function store(Request $request){

            $validatedData = $request->validate([
            'name' => 'required',
            'company_name' => 'required',
            'mobile_no' => 'required|digits:11|unique:bill_statements',
            'address'=>"required",
          ]);

            $bill=new BillStatement();
            $bill->name=$request->name;
            $bill->company_name=$request->company_name;
            $bill->mobile_no=$request->mobile_no;
            $bill->address=$request->address;
            $bill->save();
            return response()->json([
                'status'=>'OK',
                'message'=>'Added successfully'
            ]);
       }

      
    
    public function bill_statement_details($id){

        $bill_statement=BillStatement::findOrFail($id);
        $bill_history=BillPaidStatement::where('bill_statement_id',$id)->paginate(10);
        $total_bill=BillPaidStatement::where('bill_statement_id',$id)->sum('amount');
        //per month history
        $per_month_history=BillPerMonth::where('bill_statement_id',$id)->get();
        $per_month_total=BillPerMonth::where('bill_statement_id',$id)->sum('amount');
      
         return response()->json([
                'bill_statement'=>$bill_statement,
                'bill_history'=>$bill_history,
                'total_bill'=>$total_bill,
                'per_month_history'=>$per_month_history,
                'per_month_total'=>$per_month_total,
           ]);

    }
    
  


    public function store_bill_per_month(Request $request){
           // return $request->all();
            $validatedData = $request->validate([
            'amount' => 'required',
            'bill_statement_id' => 'required',
            'month' => 'required',
            'date' => 'required',
          ]);

            $bill=new BillPerMonth();
            $bill->bill_statement_id=$request->bill_statement_id;
            $bill->date=$request->date;
            $bill->month=$request->month;
            $bill->comment=$request->comment ;
            $bill->amount=$request->amount;
            $bill->save();

            return response()->json([
                'status'=>'OK',
                'message'=>'Added successfully'
            ]);
       }

      


}

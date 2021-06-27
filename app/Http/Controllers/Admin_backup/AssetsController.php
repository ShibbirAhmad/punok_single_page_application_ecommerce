<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CompanyAssets;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade as PDF;

class AssetsController extends Controller
{
       

      public  function get_assets(Request $request){
        
        $item = $request->item ?? 10 ;
        $assets= CompanyAssets::orderBy('id','DESC')->paginate($item);
        $total_quantity=DB::table('company_assets')->sum('quantity');
        $total_amount=DB::table('company_assets')->sum('amount');
        return response()->json([
            "success" => "OK",
            "assets" => $assets ,
             "total_quantity" => $total_quantity,
             "total_amount" => $total_amount,
        ]);


    }


    
    public function store_assets(Request $request){
           
        $validatedData = $request->validate([
            'name'  => 'required',
            'purchase_price'  => 'required',
            'present_price'  => 'required',
            'purchase_date'  => 'required',
            'quantity'  => 'required',
        ]);

         $assets= new CompanyAssets ();
         $assets->name=$request->name ;
         $assets->purchase_price=$request->purchase_price ;
         $assets->present_price=$request->present_price ;
         $assets->quantity=$request->quantity ;
         $assets->purchase_date=$request->purchase_date ;
         $assets->amount=(intval($request->quantity ) * intval($request->present_price))  ;
         if ($assets->save()) {
             return response()->json([
                 'success' => 'OK',
                  'message' => 'added successfully '
             ]);
         }




    }

   
   public function get_asset_item($id){

    $assets  = CompanyAssets::find($id);     
     return response()->json([
                "success"  => "OK",
                "assets"  => $assets,  
                ]);
    }




    public function update_asset_item(Request $request, $id){
           
        $validatedData = $request->validate([
            'name'  => 'required',
            'purchase_price'  => 'required',
            'present_price'  => 'required',
            'purchase_date'  => 'required',
            'quantity'  => 'required',
        ]);

         $assets= CompanyAssets::findOrFail($id);
         $assets->name=$request->name ;
         $assets->purchase_price=$request->purchase_price ;
         $assets->present_price=$request->present_price ;
         $assets->quantity=$request->quantity ;
         $assets->purchase_date=$request->purchase_date ;
         $assets->amount=(intval($request->quantity ) * intval($request->present_price))  ;
         if ($assets->save()) {
             return response()->json([
                 'success' => 'OK',
                  'message' => 'updated successfully '
             ]);
         }



    }


    
   public function delete_asset_item($id){

        $assets  = CompanyAssets::find($id);
        $assets->delete() ;      
         return response()->json([
                    "success"  => "OK",
                    "message"  => "This assets has removed",  ]);
   
    }


    public  function download_assets(){

            $assets=CompanyAssets::all();
            $total_quantity=DB::table('company_assets')->sum('quantity');
            $total_amount=DB::table('company_assets')->sum('amount');
            $total_purchase_price=DB::table('company_assets')->sum('purchase_price');
            $total_present_price=DB::table('company_assets')->sum('present_price');

            $pdf=PDF::loadView('admin.pdf.CompanyAssets',compact('assets','total_quantity','total_amount','total_purchase_price','total_present_price'));
            return $pdf->stream();

    }




 


}

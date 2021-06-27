<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Credit;
use App\Models\Debit;
use App\Models\Order;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\Purchaseitem;
use App\Models\SubCategory;
use App\Models\SubSubCategory;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }

    public function index(){
       


   

      
    //  return $data;

     //  return view('welcome',compact('sub_categories'));
      

 

        
        $order=Order::orderCount();
         $balnce=Credit::Balance();
        $stock=array();
        
         $stock['total_price']=0;
         $products=Product::where('stock','>',0)->get();
         $stock['total_quantity']=$products->sum('stock');
      
       foreach($products as $product){
            $product_purchase_item=Purchaseitem::where('product_id',$product->id)->get();
             $price=0;
           
            foreach($product_purchase_item as $item){
                $price+=$item->price*$item->stock;
              
            }
            if($product_purchase_item->sum('stock')>0){
                $stock['total_price'] += ($price/$product_purchase_item->sum('stock'))*$product->stock;
            }
 
      }


     
     $admin_order=Order::adminOrderAnalysis();
     $topSellinProductToday=Order::topSellingProductToday();

     $analysis=Order::analysis();
     $due=Order::due();
     

        return response()->json([
            'orders'=>$order,
            'balance'=>$balnce,
            'stock'=>$stock,
            'admin_order'=>$admin_order,
            'top_selling_products_today'=>$topSellinProductToday,
            'due'=>$due,
            'analysis'=>$analysis
        ]);
    }
}

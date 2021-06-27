<?php

namespace App\Http\Controllers\Admin;

use App\Models\Coupon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CouponController extends Controller
{

    public function index()
    {
        $coupons = Coupon::orderby('id', 'desc')->get();
        return response()->json([
            'status' => 'OK',
            'coupons' => $coupons, 
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'code' => 'required|unique:coupons',
            'start_date' => 'required',
            'expire_date' => 'required',
            'discount_amount' => 'required',
             'discount_type' => 'required',
        ]);
        $coupon = new Coupon();
        $coupon->code = $request->code;
        $coupon->start_date = $request->start_date; 
        $coupon->expire_date = $request->expire_date; 
        $coupon->discount_type = $request->discount_type;
        $coupon->discount_amount = $request->discount_amount;

        if ($coupon->save()) {
            return response()->json([
                'status' => 'OK',
                'message' => 'Coupon added successfully'
            ]);
        }
    }



    public function active($id)
    {
        $coupon = Coupon::find($id);
        if ($coupon) {
            $coupon->status = 1;
            if ($coupon->save()) {
                return response()->json([
                    'status' => 'OK',
                    'message' => 'coupon activated'
                ]);
            }
        }
    }

    public function deActive($id)
    {
        $coupon = Coupon::find($id);
        if ($coupon) {
            $coupon->status = 0;
            if ($coupon->save()) {
                return response()->json([
                    'status' => 'OK',
                    'message' => 'coupon de-activated '
                ]);
            }
        }
    }


    public function get_edit_item($id){

        $coupon = Coupon::find($id);
            return response()->json([
                'coupon' => $coupon
            ]);

    }


    public function update(Request $request, $id)
    {

        $this->validate($request, [
            'code' => 'required|unique:coupons,code,'.$id,
            'start_date' => 'required',
            'expire_date' => 'required',
            'discount_amount' => 'required',
            'discount_type' => 'required',
        ]);

        $coupon = Coupon::find($id);
        $coupon->code = $request->code;
        $coupon->start_date = $request->start_date; 
        $coupon->expire_date = $request->expire_date; 
        $coupon->discount_type = $request->discount_type;
        $coupon->discount_amount = $request->discount_amount;
        if ($coupon->save()) {
            return response()->json([
                'status' => 'OK',
                'message' => 'Coupon update successfully'
            ]);
        }
    }


    public function destroy($id){
        
        $coupon=Coupon::findOrFail($id);
        $coupon->delete();
        return response()->json([
            'status' => 'OK',
            'message' => 'Deleted successfully',
        ]);
    }

}

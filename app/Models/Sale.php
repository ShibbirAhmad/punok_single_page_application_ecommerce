<?php

namespace App\Models;

use Exception;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{

      public function getCreatedAtAttribute($attr) {
        return Carbon::parse($attr)->format('d-m-Y,h:i');
    }
    public function company(){

        return $this->belongsTo('App\Models\Company','company_id');
    }

    public function saleItems(){
        return $this->hasMany('App\Models\SaleItems','sale_id');
    }

    public function dueAmount(){
       return $this->hasOne('App\Models\CustomerDue','sale_id');
    }


  public static function SendMessageToCustomer($customer,$amount,$invoice){
        ///send message
        $api_key = "C20080926059d38fab0643.83594698";
        $contacts = $customer->phone;
        $senderid = '8809612446756';
        $sms = 'Dear '.$customer->name .', Thank you for your purchase from madinafashion.com.bd . Invoice number is S-'.$invoice.' & payable amount is ' .$amount.'/=BDT';   // put here your dynamic message text here
        $URL = "http://sms.esmsbd.com/smsapi?api_key=" . urlencode($api_key) . "&type=text&contacts=" . urlencode($contacts) . "&senderid=" . urlencode($senderid) . "&msg=" . urlencode($sms);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $URL);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 0);
        try {
            $output = $content = curl_exec($ch);
         //  print_r($output);
        } catch (Exception $ex) {
           return back();
        }
        return $output;
    }






}

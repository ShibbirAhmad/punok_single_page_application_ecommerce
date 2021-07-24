<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
     protected $table= "employees" ;

          public static function sendMessageToEmployeer($employee,$amount){

        $api_key = "C2008151606a05deddbd63.40969555";
        $contacts = $employee->phone;
        $senderid = '8809612446732';
        $sms = 'Assalamualikum, ' .$employee->name.' you have received a payment as your salary ' .$amount.'/= BDT, from the punok.com.bd';
        // put here your dynamic message text here
        $URL = "http://bulk.fmsms.biz/smsapi?api_key=" . urlencode($api_key) . "&type=text&contacts=" . urlencode($contacts) . "&senderid=" . urlencode($senderid) . "&msg=" . urlencode($sms);
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

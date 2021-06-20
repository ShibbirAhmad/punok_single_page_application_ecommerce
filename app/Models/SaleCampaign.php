<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class SaleCampaign extends Model
{

      public  function  campaign_products(){
           $today=Carbon::today();
           return $this->hasMany('App\Models\Product','campaign_id')->where('expired_date','>',$today);
      }



}

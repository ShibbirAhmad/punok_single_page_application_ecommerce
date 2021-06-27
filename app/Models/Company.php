<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
     public function sales(){
         return $this->hasMany('App\Models\Sale','company_id') ;
     }

     public function payments(){
         return $this->hasMany('App\Models\CompanySalePaid','company_id') ;
     }


}

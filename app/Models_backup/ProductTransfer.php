<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductTransfer extends Model
{

       public function transaction_items(){
           return $this->hasMany('App\Models\ProductTransferItem','product_transfer_id');
       }


       public function showroom(){
           return $this->belongsTo('App\Models\Showroom','showroom_id');
       }
}

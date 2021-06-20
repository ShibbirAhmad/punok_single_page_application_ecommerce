<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Showroom extends Model
{
     public function manager(){
         return $this->hasOne('App\Models\ShowroomManager','showroom_id');
     }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SearchHistory extends Model
{
    protected $fillable = ['user_id', 'searchable_type', 'searchable_id', 'search_keyword'];

}

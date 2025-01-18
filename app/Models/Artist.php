<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    protected $fillable = ['genre_id', 'name', 'photo'];

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    public function songs()
    {
        return $this->hasMany(Song::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    protected $fillable = ['name', 'thumbnail'];

    public function artists()
    {
        return $this->hasMany(Artist::class);
    }

    public function songs()
    {
        return $this->hasMany(Song::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    protected $fillable = ['genre_id', 'artist_id', 'title', 'lyrics', 'thumbnail'];

    public function genre()
    {
        return $this->belongsTo(Genre::class);
    }

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }
}

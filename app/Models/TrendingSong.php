<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrendingSong extends Model
{
    protected $fillable = [
        'song_id',
        'index',
    ];

    public function song()
    {
        return $this->belongsTo(Song::class);
    }
}

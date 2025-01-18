<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ForYouSong extends Model
{
    protected $fillable = [
        'for_you_id',
        'song_id',
        'index',
    ];

    public function forYou()
    {
        return $this->belongsTo(ForYou::class);
    }

    public function song()
    {
        return $this->belongsTo(Song::class);
    }
}

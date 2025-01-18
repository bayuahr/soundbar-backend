<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ForYou extends Model
{
    protected $fillable = [
        'created_by',
        'name',
        'description',
        'thumbnail',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function songs()
    {
        return $this->hasMany(ForYouSong::class);
    }
}

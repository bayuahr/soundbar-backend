<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('for_you_songs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('for_you_id')->constrained('for_you')->onDelete('cascade');
            $table->foreignId('song_id')->constrained('songs')->onDelete('cascade');
            $table->integer('index');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('for_you_songs');
    }
};

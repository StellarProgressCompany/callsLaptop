<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TableType extends Model
{
    use HasFactory;

    protected $fillable = [
        'capacity',
        'available_count',
    ];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}

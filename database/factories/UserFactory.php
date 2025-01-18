<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password = null;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'email' => "admin@soundbar.com",
            'password' => static::$password ??= Hash::make('password'), // Default password
            'birth_date' => $this->faker->date('Y-m-d', '2000-01-01'), // Random date of birth
            'language' => $this->faker->randomElement(['en', 'es', 'fr', 'de']), // Example languages
            'photo_profile' => $this->faker->imageUrl(200, 200, 'people', true), // Random image URL
            'google_id' => $this->faker->optional()->uuid(), // Optional Google ID
            'facebook_id' => $this->faker->optional()->uuid(), // Optional Facebook ID
            'role' => $this->faker->randomElement(['user', 'admin']), // Role (default: 'user')
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }

    /**
     * Indicate that the user is an admin.
     */
    public function admin(): static
    {
        return $this->state(fn (array $attributes) => [
            'role' => 'admin',
        ]);
    }
}

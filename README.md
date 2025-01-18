# Laravel 11 Project - SoundBar Backend
---

## 🛠 Requirements
Make sure your system meets the following requirements:
- **PHP 8.2 or higher**
- **Composer** 
- **Node.js**
- **MySQL 8.0**
---
## 🖥 Installation

Follow these steps to get started with the project:

### 1. Clone the Repository
```bash
git clone https://github.com/bayuahr/soundbar-backend.git
cd soundbar-backend 
```
### 2. Clone the Repository
```bash
composer install
npm install
```
### 3. Set Up Environment
```bash
cp .env.example .env
```
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password
```
### 4. Generate Key
```bash
php artisan key:generate
```

### 5. Run Migrations and Seeders
```bash
php artisan migrate
php artisan db:seed
```

### 6. Run Laravel
```bash
npm run dev
php artisan serve
```
#### OR use the combined command:

```bash
composer run dev
```
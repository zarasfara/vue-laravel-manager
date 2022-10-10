## Requirements

* PHP 8.0 or higher
* Git
* Composer (>=2.4)
* MySQL (>=8.0)
* Node v 16.17.0

## Installation

Clone the repo locally:

```sh
git clone https://github.com/zarasfara/vue-laravel-manager
cd vue-laravel-manager
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies:

```sh
npm i
```

Setup configuration
```sh
# windows
copy .env.example .env
# linux
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Change DB credentials in .env :

* DB_DATABASE
* DB_USERNAME
* DB_PASSWORD

Run database migrations:

```sh
php artisan migrate
```

Run database seeder:

```sh
php artisan db:seed
```

Run npm:

```sh
npm dev
#or
npm build
```

Run artisan dev serve:

```sh
php artisan serve
```

You're ready to go! Visit application in your browser, and login with:

- **Email:** admin@mail.com
- **Password:** admin123


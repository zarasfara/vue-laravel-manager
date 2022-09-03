<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="{{asset('public/css/app.css')}}">
    <title>laravel+vue</title>
</head>
<body class="bg-slate-100/90">

@yield('content')

<script type="module" src="{{asset('public/js/app.js')}}"></script>
@stack('scripts')
</body>
</html>
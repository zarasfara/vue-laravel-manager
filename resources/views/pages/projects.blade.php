@extends('app')

@php
    use Illuminate\Support\Facades\Auth;
@endphp

@section('content')
    <projects :user="{{Auth::user()}}"></projects>
@endsection

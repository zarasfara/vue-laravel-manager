@extends('layouts.app')
@php
    use Illuminate\Support\Facades\Auth;
@endphp

@section('content')
<dashboard :user="{{Auth::user()}}"></dashboard>
@endsection

@push('scripts')
    <script src="{{asset('js/index.js')}}"></script>
@endpush

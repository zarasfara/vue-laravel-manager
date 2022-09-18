@extends('layouts.app')
@php
    use Illuminate\Support\Facades\Auth;
@endphp

@section('content')
<index :user="{{Auth::user()}}"></index>
@endsection

@push('scripts')
    <script src="{{asset('js/index.js')}}"></script>
@endpush

@extends('layouts.app')
@section('content')
    <div id="app">
        <header-component></header-component>
        <div class="container mx-auto flex mt-4">
            <section class="main-block w-4/5 mr-2 bg-white rounded-md p-2 pb-3">
                <div class="breadcrumb-container rounded mb-4">
                    <ol class="list-none flex">
                        <li class="text-slate-500 breadcrumb-item">
                            <a href="#">Задачи</a>
                            <span class="mx-1">/</span>
                        </li>
                        <li class="text-slate-500 breadcrumb-item">
                            <a href="#">Задачи</a>
                            <span class="mx-1">/</span>
                        </li>
                    </ol>
                </div>
                <div class="statuses-list flex mb-3">
                    <div class="p-1 rounded-md flex items-center cursor-pointer border border-gray-300 relative">
                        <div id="filter-switcher" class="flex items-center">
                            <span class="mr-2">Фильтрация</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
                                <path d="M9.5 16q-.208 0-.354-.146T9 15.5v-4.729L4.104 4.812q-.187-.25-.052-.531Q4.188 4 4.5 4h11q.312 0 .448.281.135.281-.052.531L11 10.771V15.5q0 .208-.146.354T10.5 16Zm.5-6.375L13.375 5.5H6.604Zm0 0Z"/>
                            </svg>
                        </div>
                        <form id="filter-more"
                              class="bg-white rounded-md w-fit border border-gray-300 p-2 absolute top-10 w-200px hidden left-0">
                            <label class="block">
                                <span class="text-gray-700">Статусы</span>
                                <select class="block mt-1 rounded">
                                    <option>Все</option>
                                    <option>Новые</option>
                                    <option>Birthday</option>
                                    <option>Other</option>
                                </select>
                            </label>
                        </form>
                    </div>
                </div>
                <hr>
            </section>
            <aside class="bg-white w-1/5 rounded-md p-2">
                <div class="text-center">
                    <h3>Комментарии</h3>
                </div>
                <div class="comments-list">

                </div>
            </aside>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="{{asset('js/index.js')}}"></script>
@endpush
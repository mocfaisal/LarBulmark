<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home', ['title' => 'Homepage',]);
})->name('homepage');

Route::get('/about', function () {
    return Inertia::render('About', ['title' => 'About',]);
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact', ['title' => 'Contact',]);
})->name('contact');

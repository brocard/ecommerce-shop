<?php

//Auth::routes();

Route::get('/{any}', 'HomeController')->where('any', '.*');

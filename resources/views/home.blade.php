@extends('layouts.blank')

@section('content')
<div class="container">
    <v-app>
        <v-app-bar
            app
            :flat="true"
            class="pt-0 px-0 pb-3 bg-gray-100"
        >
            <div class="container flex justify-between">
                <router-link to="/" class="text-decoration-none">
                    <v-toolbar-title class="text-decoration-none text-gray-700 pt-2">Ecommerce Shop</v-toolbar-title>
                </router-link>

                <v-spacer></v-spacer>

                <cart-badge></cart-badge>
                <right-menu></right-menu>
            </div>
        </v-app-bar>
        <v-content
            class="px-3"
        >
            <!-- Provides the application the proper gutter -->
            <v-container>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</div>
@endsection

@extends('layouts.blank')

@section('content')
<div class="container">
    <v-app>
        <v-app-bar
            app
            :flat="true"
        >
            <router-link to="/" class="text-decoration-none text-gray-800">
                <v-toolbar-title>WebForceHQ</v-toolbar-title>
            </router-link>
        </v-app-bar>
        <v-content>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</div>
@endsection

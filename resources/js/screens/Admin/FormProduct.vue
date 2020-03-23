<template>
    <div class="row">
        <div class="w-full">
            <v-card class="elevation-1">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Edit Product #{{ $route.params.id }}</v-toolbar-title>
                </v-toolbar>

                <v-card-text>
                    <v-text-field
                        v-model="form.name"
                        :counter="100"
                        label="Name"
                    ></v-text-field>

                    <v-text-field
                        v-model="form.price"
                        label="Price"
                    ></v-text-field>

                    <v-textarea
                        v-model="form.description"
                        label="Description"
                    ></v-textarea>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    description: '',
                    price: ''
                }
            }
        },
        mounted() {}
    }
</script>

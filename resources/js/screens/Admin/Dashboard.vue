<template>
    <div>
        <div class="w-full text-xl font-thin uppercase bg-gray-300 px-3 py-2">
            Admin
        </div>
        <div class="flex justify-start mt-4">
            <router-link to="/admin/users" class="text-decoration-none">
                <div class="w-40 px-10 py-8 text-center border border-gray-300 border-dashed rounded hover:bg-gray-200">
                    <v-icon color="red" x-large>mdi-account-group-outline</v-icon>
                    <div class="font-bold text-red-400">
                        Users
                    </div>
                </div>
            </router-link>

            <router-link to="/admin/products" class="text-decoration-none">
                <div class="w-40 px-10 py-8 text-center border-gray-100 border border-2 border-dashed rounded hover:bg-gray-200 ml-6">
                    <v-icon color="green" x-large>mdi-warehouse</v-icon>
                    <div class="font-bold text-green-400">
                        Products
                    </div>
                </div>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        mounted() {}
    }
</script>

<style lang="scss" scoped>
    .v-application {
        a {color: inherit !important;}
    }
</style>

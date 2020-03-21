<template>
    <div class="flex justify-center">
        <router-link to="/admin/users" class="text-decoration-none">
            <div class="p-10 border border-gray-300 border-dashed rounded hover:bg-gray-200">
                <v-icon color="red" x-large>mdi-account-group-outline</v-icon>
            </div>
        </router-link>

        <router-link to="/admin/products" class="text-decoration-none">
            <div class="p-10 border border-gray-300 border-dashed rounded hover:bg-gray-200 ml-6">
                <v-icon color="green" x-large>mdi-select-group</v-icon>
            </div>
        </router-link>
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

<template>
    <v-menu
        left
        bottom
        v-if="isAuthenticated"
    >
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" class="pb-2">
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item @click="routeToAdmin">
                <v-list-item-title>Admin</v-list-item-title>
            </v-list-item>

            <v-list-item
                @click="logoutAction"
                v-if="isAuthenticated"
            >
                <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        mounted() {},

        computed: {
            ...mapGetters({
                isAuthenticated: 'auth/isAuthenticated'
            })
        },

        methods: {
            ...mapActions({
                logout: 'auth/logout'
            }),
            async logoutAction() {
                this.isLoading = true;
                this.logout().then((res) => {
                    this.$router.push('/');
                    this.isLoading = false
                }).catch(() => {
                    this.isLoading = false
                })
            },
            routeToAdmin() {
                this.$router.push('/admin')
            }
        }
    }
</script>

<template>
    <div class="row">
        <div class="w-full">
            <div
                class="text-xl font-thin px-3 py-2 bg-gray-300 flex justify-between"
            >
                <span class="pt-2"><v-icon>mdi-card-account-details-outline</v-icon> Users</span>
                <div><v-btn color="primary" dark class="mb-2" @click="newUserDialog">New User <v-icon>mdi-plus</v-icon></v-btn></div>
            </div>
            <v-data-table
                :headers="headers"
                :items="users"
                :disable-filtering="true"
                :loading="loading"
                class="elevation-1"
            >
                <template v-slot:item.name="{ item }" v-html="item.name">
                    {{ item.name }}
                </template>

                <template v-slot:item.email="{ item }">
                    <v-chip>{{ item.email }}</v-chip>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-btn
                        icon
                        color="indigo"
                        @click="editItem(item)"
                    >
                        <v-icon>mdi-account-edit-outline</v-icon>
                    </v-btn>

                    <v-btn
                        icon
                        color="red"
                    >
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                </template>

                <template v-slot:body.append>
                    <v-dialog v-model="dialog" max-width="700px">
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field
                                                v-model="editedUser.name"
                                                label="Name"
                                                :rules="nameRules"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field
                                                v-model="editedUser.email"
                                                label="Email"
                                                :rules="emailRules"
                                                required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="grey lighten-2"  @click="closeDialog">Cancel</v-btn>
                                <v-btn color="primary" @click="saveItem(editedUser)">Save</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </template>
            </v-data-table>

            <v-snackbar
                v-model="notify.open"
                color="success"
                :timeout="5000"
            >
                {{ notify.text }}
                <v-btn
                    dark
                    text
                    @click="notify.open = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        data() {
            return {
                loading: false,
                notify : {
                    open: false,
                    text: ''
                },
                dialog: false,
                editedIndex: -1,
                editedUser: {
                    name: '',
                    email: ''
                },
                defaultItem: {
                    name: '',
                    email: ''
                },
                headers:[
                    {
                        text: 'Name',
                        value: 'name',
                    }, {
                        text: 'Email',
                        value: 'email',
                    }, {
                        text: '',
                        value: 'actions',
                        sortable: false
                    },
                ],
                nameRules: [
                    v => !!v || 'Name is required',
                    v => v.length <= 50 || 'Name must be less than 50 characters',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ]
            }
        },

        mounted() {
            this.loading = true;
            this.fetchUsers()
                .then(() => setTimeout(() => this.loading = false, 500));
        },

        computed: {
            formTitle () {
                return this.editedIndex === -1 ? 'New User' : 'Edit User'
            },

            ...mapState({
                users: state => state.users.items,
                errors: state => state.users.errors
            })
        },

        methods: {
            ...mapActions({
                fetchUsers: 'users/fetchUsers',
                updateItem: 'users/updateUser',
                createNewUser: 'users/createUser'
            }),

            newUserDialog() {
                this.dialog = true;
            },

            editItem (item) {
                this.editedIndex = this.users.indexOf(item);
                this.editedUser = Object.assign({}, item);
                this.dialog = true
            },

            saveItem(item) {
                if (this.editedIndex > -1) {
                    this.updateItem(item);
                    this.notify.open = true;
                    this.notify.text = 'User updates successfully...';
                } else {
                    this.createNewUser(item);
                    //this.notify.open = true;
                    //this.notify.text = 'New user was creted...';
                }
                this.closeDialog();
            },

            closeDialog() {
                this.dialog = false;
                setTimeout(() => {
                    this.editedUser = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1
                }, 300)
            }
        }
    }
</script>

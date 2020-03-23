<template>
    <div class="flex justify-center">
        <div class="w-full max-w-xs mt-10">
            <form
                class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                @submit.prevent="validateBeforeSubmit"
            >
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-1" for="username">
                        Username
                    </label>
                    <input
                        class="shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Email"
                        v-model="formLogin.email"
                    >

                    <div v-if="$v.formLogin.email.$error">
                        <span v-if="!$v.formLogin.email.required" class="text-danger">Field is required</span>
                        <span v-if="!$v.formLogin.email.email" class="text-danger">Incorrect Email.</span>
                    </div>

                </div>
                <div class="mb-6">
                    <label class="block text-text-gray-700 text-sm font-bold mb-1" for="password">
                        Password
                    </label>
                    <input
                        class="shadow-sm appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        v-model="formLogin.password"
                    >
                    <div v-if="$v.formLogin.password.$error">
                        <span v-if="!$v.formLogin.password.required" class="text-danger">Field is required</span>
                        <span v-if="!$v.formLogin.password.minLength" class="text-danger">Password must contain 6 characters</span>
                    </div>
                </div>
                <div class="flex">
                    <button
                        class="bg-green-500 w-full hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >Sign In</button>
                </div>
            </form>
            <p class="text-center text-gray-500 text-xs">&copy;2020. All rights reserved.</p>
        </div>
    </div>

</template>

<script>
    import { mapActions } from 'vuex'
    import { validationMixin } from 'vuelidate'
    const { required, email, minLength } = require('vuelidate/lib/validators')

    export default {
        mixins: [validationMixin],

        data() {
            return {
                formLogin: {
                    email: '',
                    password: '',
                    remember: ''
                }
            }
        },

        validations: {
            formLogin: {
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(6)
                }
            }
        },

        methods: {
            ...mapActions({
                login: 'auth/login'
            }),

            async validateBeforeSubmit() {
                this.$v.formLogin.$touch();
                if (this.$v.$invalid) {
                    return true
                }
                this.isLoading = true;
                this.login(this.formLogin).then((res) => {
                    this.$router.push('/admin');
                    this.isLoading = false
                }).catch(() => {
                    this.isLoading = false
                })
            }
        }
    }
</script>

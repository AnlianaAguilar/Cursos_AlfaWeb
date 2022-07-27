<template>
  <v-container>
    <v-row justify="center" align="center" class="mt-7">
      <v-col md="7" sm="5">
        <h1 class="mt-6">Login de Usuario</h1>

        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Correo"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :counter="6"
            :rules="passwordRules"
            label="Contraseña"
            required
            type="password"
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="teal accent-3"
            class="mr-4"
            @click="login"
          >
            iniciar
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Borrar </v-btn>

          <v-btn text color="primary" @click="redirectTo">Registrarse</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  name: "login-component",
  // props: {},
  data: function () {
    return {
      valid: true,
      password: "",
      passwordRules: [
        (v) => !!v || "Debe ingresar su Contraseña",
        (v) => (v && v.length <= 6) || "La contraseña debe tener 6 caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "Debe ingresar su Correo electronico",
        (v) => /.+@.+\..+/.test(v) || "El correo debe ser Valido",
      ],
    };
  },
  // computed: {},
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    login() {
      this.validate();
      if (this.valid == false) return;
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential);
          // Signed in
          const user = userCredential.user;
          console.log('user',user);
          this.$router.push("/");
          // ...
        })
        .catch((error) => {
          //   const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    },
    redirectTo() {
      this.$router.push("/register");
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>
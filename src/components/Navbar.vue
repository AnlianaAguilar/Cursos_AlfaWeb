<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="logout" color="deep-purple">
        <span class="mr-2">Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="route in routes"
            :key="route.name"
            @click="redirectTo(route.name)"
            :disabled="currentRoute == route.name"
          >
            <v-list-item-icon>
              <v-icon>{{ route.icono }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";
export default {
  name: "Navbar-component",
  // props: {},
  data: function () {
    return {
      drawer: false,
      group: null,

      routes: [
        {
          icono: "mdi-home",
          title: "Cursos",
          name: "courses",
        },
        {
          icono: "mdi-home",
          title: "About",
          name: "home",
        },
        {
          icono: "mdi-home",
          title: "Login",
          name: "login",
        },
        {
          icono: "mdi-home",
          title: "Administración",
          name: "administration",
        },
      ],
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    redirectTo(nameRoute) {
      this.$router.push({ name: nameRoute });
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push("/login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
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
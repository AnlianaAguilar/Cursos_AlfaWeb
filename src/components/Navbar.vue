<template>
  <div>
    <v-app-bar color="deep-purple" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>
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
            :disabled="c"
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
          name: "about",
        },
        {
          icono: "mdi-home",
          title: "Cursos",
          name: "courses",
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
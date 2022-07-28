<template>
  <v-container>
    <h1 class="text-center">Lista de Cursos</h1>
    <v-divider></v-divider>
    <v-row justify="center" align="center" class="mt-7">
      <v-col v-for="course in courses" :key="course.id">
        <v-card width="400">
          <v-img height="200px" :src="course.img"> </v-img>

          <v-card-text>
            <v-card-title class="black--text mt-8">
              <p class="ml-3">{{ course.name }}</p>
            </v-card-title>

            <div class="font-weight-bold ml-8 mb-2">Información</div>

            <v-timeline align-top dense>
              <v-timeline-item small>
                <div>
                  <div class="font-weight-normal">
                    Costo: <strong>{{ course.cost }}</strong>
                  </div>
                  <div>Duración: {{ course.duration }}</div>
                </div>
              </v-timeline-item>
              <v-timeline-item color:green small>
                <div>
                  <div class="font-weight-normal">
                    Cupos: <strong>contador</strong>
                  </div>
                  <div>Completado: indicar si se Completo</div>
                </div>
              </v-timeline-item>
              <v-timeline-item small>
                <div>
                  <div class="font-weight-normal">Fecha de Registro:</div>
                  <div>{{ course.date }}</div>
                </div>
              </v-timeline-item>
              <v-timeline-item small>
                <div class="font-weight-normal">
                  Descripción: {{ course.description }}
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "courses-component",
  // props: {},
  data: function () {
    return {
      messages: [
        {
          from: "You",
          message: `Sure, I'll see you later.`,
          time: "10:42am",
          color: "deep-purple lighten-1",
        },
        {
          from: "John Doe",
          message: "Yeah, sure. Does 1:00pm work?",
          time: "10:37am",
          color: "green",
        },
        {
          from: "You",
          message: "Did you still want to grab lunch today?",
          time: "9:47am",
          color: "deep-purple lighten-1",
        },
      ],
    };
  },
  computed: {
    ...mapState(["courses"]),
  },
  methods: {
    ...mapActions(["fetchCourses"]),
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.fetchCourses();
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>
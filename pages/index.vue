<template>
  <v-app style="position: relative; height: 100vh">
    <div class="background-image"></div>
    <Navigation/>
    <v-main style="position: relative; z-index: 1;">
      <v-container>
        <div>
          <Header />
        </div>
      </v-container>
    </v-main>
    <div class="text-center d-flex flex-column bg-teal-darken-3 pa-4" style="height: 100px">
      <p class="align-end">
        Jl. Pahlawan No. 2, Grati, Kabupaten Pasuruan, Jawa Timur 67184
      </p>
      <v-divider></v-divider>

      <div class="align-end">
        {{ new Date().getFullYear() }} — <strong>LPSI</strong>
      </div>
    </div>
  </v-app>
</template>

<script setup>
const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]
</script>

<script>
export default {
  data: () => ({
    step: 1,
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>

<style scoped>
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/bg-header.jpg'); /* Replace 'your-background-image.jpg' with your actual image URL */
  background-size: cover;
  opacity: 0.1; /* Adjust the opacity value as needed */
  z-index: 0;
}
</style>
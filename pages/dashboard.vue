<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            color="primary"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script setup>

</script>

<script>
import { ref } from 'vue'

const drawer = ref(null)
export default {
  data: () => (
      {
        drawer: null,
        items: [
          {
            icon: 'mdi-chart-bubble',
            title: 'Beranda',
            to: '/dashboard',
          },
          {
            icon: 'mdi-apps',
            title: 'Halaman Utama',
            to: '/',
          },
        ],

      }
  ),
}
</script>
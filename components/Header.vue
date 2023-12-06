<template>
  <v-row class="d-flex flex-column justify-center align-center" text-primary>
    <v-col cols="12">
      <div>
        <h1 class="d-flex justify-center">LOKA PENGUJIAN STANDAR INSTRUMEN RUMINANSIA BESAR</h1>
      </div>
      <div class="text-center">
        <h4>Pusat Standarisasi Instrumen Peternakan dan Kesehatan Hewan Badan Standarisasi Instrumen Pertanian Kementrian Pertanian Republik Indonesia</h4>
      </div>
    </v-col>
    <v-col cols="6" class="mt-10">
      <v-text-field v-model="inputCode" placeholder="Masukkan Kode Sample"></v-text-field>
    </v-col>
    <v-dialog
        v-model="dialog"
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ props }">
        <v-form  @submit.prevent="submitForm">
          <v-btn
              color="primary"
              v-bind="props"
              flat
          >
            Cek Status Pengujian
          </v-btn>
        </v-form>
        <div class="text-center">
        </div>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Status Pengujian
        </v-card-title>
        <v-card-text>
          <v-stepper alt-labels bg-color="teal-lighten-1" flat="true">
            <v-stepper-header>
              <v-stepper-item
                  :complete="inputCode === `SAMPLE001`"
                  title="Menunggu Diproses"
              ></v-stepper-item>

              <v-divider></v-divider>

              <v-stepper-item
                  :complete="inputCode === `SAMPLE002`"
                  title="Proses Pengujian"
              ></v-stepper-item>

              <v-divider></v-divider>

              <v-stepper-item
                  :complete="inputCode === `SAMPLE003`"
                  title="Pengujian Selesai"
              ></v-stepper-item>
            </v-stepper-header>
          </v-stepper>

          <div class="d-flex flex-column align-center mt-10">
            <p>Status : <span class="font-weight-bold">{{ inputCode }}</span></p>
            <span class="mt-6"></span>
            <span v-if="inputCode === `SAMPLE001`">
              <p class="font-weight-regular">
              Estimasi waktu tunggu adalah <span class="font-weight-bold">1 Hari</span>
            </p>
            </span>
            <span v-if="inputCode === `SAMPLE002`">
              <p class="font-weight-regular">
              Estimasi waktu pengujian adalah <span class="font-weight-bold">3 Hari</span>
            </p>
              <span>Jika ada kendala maka kami akan menghubungi anda</span>
            </span>

            <span v-if="inputCode === `SAMPLE003`">
              <p class="font-weight-regular">
              Hasil pengujian akan dikirim ke email <span class="font-weight-bold">mrx@gmail.com</span>
            </p>
            </span>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              variant="flat"
              @click="dialog = false"
          >
            Tutup
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<style>
.text-center {
  text-align: center;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'

  let dialog = ref(false);

  let inputCode = '';
  let step1  = false;
  let step2  = false;
  let step3  = false;

  let content1 = ``

  const submitForm = () => {
    if (inputCode === 'SAMPLE001') {
      step1 = true;
      step2 = false;
      step3 = false;
    }

    if (inputCode === 'SAMPLE002') {
      step2 = true;
      step1 = false;
      step3 = false;
    }

    if (inputCode === 'SAMPLE003') {
      step3 = true;
      step1 = false;
      step2 = false;
    }
  }

  const clearForm = () => {
    inputCode = '';
    step1  = false;
    step2  = false;
    step3  = false;
  }
</script>
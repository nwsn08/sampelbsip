<template>
  <div>
    <h2>Welcome to the Dashboard</h2>
    <div class="d-flex justify-space-between mt-10">
      <DashboardMainCard title="Menunggu Diproses" value="100"/>
      <DashboardMainCard title="Sedang Diproses" value="100"/>
      <DashboardMainCard title="Selesai" value="100"/>
    </div>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'dashboard'
})
</script>
<template>
  <div>
    {{ iniDariData }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      iniDariData: "Halo Dunia",
    };
  },
  // memberikan nama dari Component-nya menjadi App
  // Bisa di-trace di Vue devtools
  name: "App",
};
</script>

<style></style>

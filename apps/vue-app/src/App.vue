<script setup lang="ts">

// usePublicComposable is correctly imported through the paths alias
import { usePublicComposable } from '@vue-component-lib';

// PublicComponent is incorrectly imported by relative path
import PublicComponent from "../../../libs/vue-component-lib/src/components/public/PublicComponent.vue";

// it should instead be
// import { PublicComponent } from '@vue-component-lib';

usePublicComposable()
</script>

<template>
  <div>
    <PublicComponent msg="test" />
  </div>
</template>

<style scoped>

</style>

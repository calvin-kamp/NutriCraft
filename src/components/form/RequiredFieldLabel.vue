<script setup lang="ts">
import FieldLabel from '../ui/field/FieldLabel.vue'

const props = defineProps<{
  for: string
}>()
</script>

<template>
  <FieldLabel>
    <slot />

    <span aria-hidden="true">*</span>
  </FieldLabel>  
</template>
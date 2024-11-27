<template>
  <b-button v-bind="attrs.directives">
    <slot></slot>
  </b-button>
</template>

<script>
export default {
  name: 'CommonButton',
  props: {
    attrs: {
      type: Object,
      required: true,
    },
  },
}
</script>

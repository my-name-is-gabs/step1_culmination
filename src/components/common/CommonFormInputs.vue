<template>
  <b-form-group>
    <label :for="attrs.display.labelFor">{{ attrs.display.label }}</label>
    <b-form-input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="attrs.directives"
    ></b-form-input>
    <b-form-invalid-feedback>{{ attrs.display.error }}</b-form-invalid-feedback>
  </b-form-group>
</template>

<script>
export default {
  name: 'CommonFormInputs',
  props: {
    attrs: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ['update:modelValue'],
}
</script>

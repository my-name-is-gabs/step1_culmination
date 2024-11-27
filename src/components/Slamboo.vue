<template>
  <b-form @submit.prevent="addFriend">
    <div v-for="prop in FORM_PROPS" :key="prop">
      <component
        :is="prop.component"
        :attrs="prop"
        v-model="formData[prop.data.saveAs]"
      ></component>
    </div>
    <div class="mt-4" v-for="bProp in BUTTON_PROPS" :key="bProp">
      <component
        :is="bProp.component"
        :attrs="bProp"
        @click="buttontEventHandler(bProp.events.actionName)"
      >
        {{ bProp.display.label }}
      </component>
    </div>
  </b-form>
</template>

<script>
import CommonButton from './common/CommonButton.vue'
import CommonFormInputs from './common/CommonFormInputs.vue'
import { SLAMBOO_FORM_INPUT } from '../common/recipe/rCommonFormInputRecipe'
import { SLAMBOO_BUTTONS } from '../common/recipe/rCommonButtonRecipe'

export default {
  name: 'Slamboo',
  components: {
    CommonButton,
    CommonFormInputs,
  },
  data() {
    return {
      FORM_PROPS: [...SLAMBOO_FORM_INPUT],
      BUTTON_PROPS: [...SLAMBOO_BUTTONS],
      formData: {
        fullname: '',
        nickname: '',
        age: '',
        email: '',
      },
    }
  },
  methods: {
    buttontEventHandler(action) {
      const eventExecution = {
        addFriend: this.addFriend,
        clear: this.reset,
      }
      eventExecution[action]()
    },

    addFriend() {
      if (this.formData.fullname === '') {
        alert('Please Enter fullname')
        return
      }
      console.log(this.formData)
    },

    reset() {
      const confirmation = confirm('Are you sure?')
      if (!confirmation) return
      this.formData = {
        fullname: '',
        nickname: '',
        age: '',
        email: '',
      }
    },
  },
}
</script>

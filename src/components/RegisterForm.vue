<script setup lang="ts">
import { registerSchema } from '@/schemas/register.schema'
import { useForm, Field as VeeField } from 'vee-validate'
import { Field, FieldError, FieldGroup, FieldLabel } from './ui/field'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from './ui/input-group'
import { Eye, EyeOff, Mail } from '@lucide/vue'
import { ref } from 'vue'
import { Button } from './ui/button'
import { useAuthStore } from '@/stores/auth'
import RequiredFieldLabel from './form/RequiredFieldLabel.vue'

const auth = useAuthStore()

const { handleSubmit, meta, resetForm } = useForm({
  validationSchema: registerSchema,
  initialValues: {
    email: '',
    password: '',
    passwordConfirm: ''
  }
})

const onSubmit = handleSubmit((values) => {
  auth.signUp(values.email, values.password)
  resetForm()
})

const showPassword = ref<boolean>(false)
const showPasswordConfirm = ref<boolean>(false)
</script>

<template>
  <form @submit="onSubmit" class="space-y-6">
    <FieldGroup>
      <VeeField
        v-slot="{ field, errors, meta }"
        name="email"
        :validate-on-blur="true"
        :validate-on-input="meta.touched"
        :validate-on-change="false"
        :validate-on-model-update="false"
      >
        <Field :data-invalid="!!errors.length">
          <RequiredFieldLabel for="register-email" class="test">
            Email
          </RequiredFieldLabel>

          <InputGroup>
            <InputGroupInput
              id="register-email"
              v-bind="field"
              placeholder="Enter your email address"
              aria-required="true"
              :aria-invalid="!!errors.length"
            />

            <InputGroupAddon align="inline-end">
              <Mail />
            </InputGroupAddon>
          </InputGroup>

          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>
      
      <VeeField
        v-slot="{ field, errors, meta }"
        name="password"
        :validate-on-blur="true"
        :validate-on-input="meta.touched"
        :validate-on-change="false"
        :validate-on-model-update="false"
      >
        <Field :data-invalid="!!errors.length">
          <RequiredFieldLabel for="register-password">
            Password
          </RequiredFieldLabel>

          <InputGroup>
            <InputGroupInput
              id="register-password"
              :type="showPassword ? 'text' : 'password'"
              v-bind="field"
              placeholder="Enter a Password"
              aria-required="true"
              :aria-invalid="!!errors.length"
            />

            <InputGroupAddon align="inline-end">
              <InputGroupButton 
                type="button" 
                @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"  
              >
                <EyeOff v-if="showPassword" aria-hidden="true"/>
              
                <Eye v-else  aria-hidden="true"/>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>
      
      <VeeField
        v-slot="{ field, errors, meta }"
        name="passwordConfirm"
        :validate-on-blur="true"
        :validate-on-input="meta.touched"
        :validate-on-change="false"
        :validate-on-model-update="false"
      >
        <Field :data-invalid="!!errors.length">
          <RequiredFieldLabel for="register-password-confirm">
            Password Confirm
          </RequiredFieldLabel>

          <InputGroup>
            <InputGroupInput
              id="register-password-confirm"
              :type="showPasswordConfirm ? 'text' : 'password'"
              v-bind="field"
              placeholder="Confirm your Password"
              aria-required="true"
              :aria-invalid="!!errors.length"
            />

            <InputGroupAddon align="inline-end">
              <InputGroupButton 
                type="button" 
                @click="showPasswordConfirm = !showPasswordConfirm"
                :aria-label="showPasswordConfirm ? 'Hide confirm password' : 'Show confirm password'"
              >
                <EyeOff v-if="showPasswordConfirm" aria-hidden="true"/>
              
                <Eye v-else  aria-hidden="true"/>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>
    </FieldGroup>

    <div>
      <p class="mb-3 text-sm text-muted-foreground">
        <span aria-hidden="true">*</span> Required fields
      </p>

      <Button type="submit">Register</Button>
    </div>
  </form>
</template>
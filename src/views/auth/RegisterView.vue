<script setup lang="ts">
import RegisterForm from '@/components/RegisterForm.vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CardDescription from '@/components/ui/card/CardDescription.vue'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>
        Create an Account
      </CardTitle>

      <CardDescription>
        Enter your information below to create your account.
      </CardDescription>
    </CardHeader>

    <CardContent>
      <RegisterForm />
    </CardContent>
  </Card>
</template>
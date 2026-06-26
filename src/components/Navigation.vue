<script setup lang="ts">
const navItems = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/dashboard',
    label: 'Dashboard'
  },
  {
    href: '/imprint',
    label: 'Imprint'
  },
  {
    href: '/privacy-policy',
    label: 'Privacy Policy'
  },
  {
    href: '/auth/login',
    label: 'Auth - Login'
  },
  {
    href: '/auth/register',
    label: 'Auth - Register'
  }
]
</script>

<template>
  <nav>
    <ul>
      <li v-for="navItem in navItems">
        <RouterLink :to="navItem.href">
          {{ navItem.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
import { defineStore } from 'pinia'
import { supabaseClient } from '@/lib/supabase'
import type { Session, User } from '@supabase/supabase-js'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {

  const user = ref<User | null>(null)
  const session = ref<Session | null>(null)
  
  const isLoggedIn = computed<boolean>(() => session.value !== null)

  supabaseClient.auth.onAuthStateChange((_event, currentSession): void => {
    session.value = currentSession
    user.value = currentSession?.user ?? null
  })
  
  async function signUp(email: string, password: string): Promise<void> {
    try {
      const { error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
      })

      if (error) throw error

      console.log('registered with email')
    } catch (error) {
      console.warn(error)
    }
  }
  
  async function signIn(email: string, password: string): Promise<void> {
    try {
      const { error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
      })

      if (error) throw error

      console.log('logged in')
    } catch (error) {
      console.warn(error)
    }
  }
  
  async function signOut(): Promise<void> {
    try {
      const { error } = await supabaseClient.auth.signOut()
      
      if(error) throw error

      console.log('sign out')
    } catch (error) {
      console.warn(error)
    }
  }
  
  // @TODO: check data and error-handling for resetPassword
  async function resetPassword(email: string): Promise<void> {
    try {
      const { error } = await supabaseClient.auth.resetPasswordForEmail(email)

      if(error) throw error

      console.log('password reseted')
    } catch (error) {
      console.warn(error)
    }
  }

  async function changePassword(newPassword: string, oldPassword: string): Promise<void> {
    try {
      const { error } =  await supabaseClient.auth.updateUser({
        password: newPassword,
        current_password: oldPassword
      })
      
      if(error) throw error

      console.log('password changed')
    } catch (error) {
      console.warn(error)
    }
  }

  return { user, session, isLoggedIn, signUp, signIn, signOut, resetPassword, changePassword }

})
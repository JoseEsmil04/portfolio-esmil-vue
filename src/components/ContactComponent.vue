<template>
  <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 dark:text-gray-300 mb-2">{{
        contact.name
      }}</label>
      <input
        type="text"
        id="name"
        v-model="form.name"
        :placeholder="contact.namePlaceholder"
        required
        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4728b2] dark:bg-slate-800 dark:text-white"
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 dark:text-gray-300 mb-2">{{
        contact.email
      }}</label>
      <input
        type="email"
        id="email"
        v-model="form.email"
        :placeholder="contact.emailPlaceholder"
        required
        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4728b2] dark:bg-slate-800 dark:text-white"
      />
    </div>
    <div class="mb-4">
      <label for="message" class="block text-gray-700 dark:text-gray-300 mb-2">{{
        contact.message
      }}</label>
      <textarea
        id="message"
        v-model="form.message"
        :placeholder="contact.messagePlaceholder"
        required
        rows="4"
        class="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4728b2] dark:bg-slate-800 dark:text-white"
      ></textarea>
    </div>
    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-white transition dark:bg-[#4728b2] border border-gray-300 rounded-md bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-[#19cac5]/80 text-sm sm:text-base dark:hover:bg-gray-900 hover:border-gray-700 hover:text-white hover:bg-[#4728b2] dark:hover:border-gray-300 dark:hover:text-white group focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {{ isSubmitting ? 'Enviando...' : contact.submit }}
    </button>
  </form>
  <div
    v-if="submitStatus"
    :class="[
      'mt-4 p-4 rounded-md',
      submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
    ]"
  >
    {{ submitMessage }}
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

interface ContactForm {
  name: string
  email: string
  message: string
}

const contact = {
  title: 'Contacto',
  name: 'Nombre',
  namePlaceholder: 'Ingresa tu nombre completo',
  email: 'Correo electrónico',
  emailPlaceholder: 'Ingresa tu correo electrónico',
  message: 'Mensaje',
  messagePlaceholder: 'Ingresa tu mensaje',
  submit: 'Enviar'
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref('')
const submitMessage = ref('')

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = ''
  submitMessage.value = ''

  try {
    const response = await fetch('/netlify/functions/send-email.ts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Error al enviar el mensaje')
    }

    submitStatus.value = 'success'
    submitMessage.value = '¡Mensaje enviado con éxito!'
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    console.error('Error submitting form:', error)
    submitStatus.value = 'error'
    submitMessage.value = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

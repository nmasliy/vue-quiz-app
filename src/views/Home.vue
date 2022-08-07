<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Введите ваше имя, чтобы продолжить</h2>
      </div>
      <form class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="name" class="sr-only">Имя</label>
            <input id="name" name="password" autocomplete="current-name" required="true" v-model="username"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Ваше имя" />
          </div>
        </div>
        <div>
          <router-link :to="{ name: 'quiz', params: { username }}"><button
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Приступить к прохождению теста
            </button></router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-home',
  data() {
    return {
      username: ''
    }
  }
}
</script>
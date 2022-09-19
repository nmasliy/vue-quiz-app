<template>
	<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-md w-full space-y-8">
			<div>
				<img :src="`src/assets/main.jpg`">
				<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Введите ваше имя, чтобы продолжить</h2>
			</div>
			<form class="mt-8 space-y-6" @submit.prevent="onSubmit">
				<div class="rounded-md shadow-sm -space-y-px">
					<div>
						<label for="name" class="sr-only">Имя</label>
						<input id="name" name="password" autocomplete="current-name" required="true" v-model="username"
							class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
							placeholder="Ваше имя" />
					</div>
				</div>
				<div>
					<router-link :to="{ name: 'quiz', params: { username } }">
						<AppButton :disabled="!username" type="submit">Приступить к прохождению теста</AppButton>
					</router-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import AppButton from '../components/AppButton.vue'

export default {
	name: 'app-home',
	components: {
		AppButton
	},
	data() {
		return {
			username: ''
		}
	},
	methods: {
		onSubmit() {
			if (this.username) {

			}
		}
	},
}
</script>
<template>
	<div v-if="answers.length > 0" class="p-4 w-full">
		<div>
			<h1 class="mb-4 text-xl font-bold text-gray-700">Результат</h1>
			<div v-for="(answer, index) in answers" :key="answer.name" class="my-4 p-4 shadow bg-gray-50 rounded"
				:class="answer.isCorrect ? 'bg-green-400' : 'bg-red-400'">
				<p>Вопрос № {{ index + 1 }}</p>
				<p>{{ answer.question }} </p>
				<p>{{ answer.answer }} ({{ answer.isCorrect ? 'Правильно' : 'Не правильно' }})</p>
			</div>
		</div>
		<p>Вы из Кобры Кай: {{ resultByType }}</p>
	</div>
	<div v-else>
		<router-link to="/">
			<AppButton>На главную</AppButton>
		</router-link>
	</div>
</template>

<script>
import AppButton from '../components/AppButton.vue';
export default {
	name: "app-result",
	components: { AppButton },
	data() {
		return {
			answers: [],
			types: []
		}
	},
	computed: {
		resultByType() {
			let name = '';
			let max = 0;

			this.types.forEach(item => {
				if (item.value > max) {
					max = item.value
					name = item.name
				}
			})

			return name
		}
	},
	created() {
		if (this.$route.params.answers) {
			this.answers = JSON.parse(this.$route.params.answers)
		}
		if (this.$route.params.types) {
			this.types = JSON.parse(this.$route.params.types)
		}
	},
}
</script>

<style>

</style>
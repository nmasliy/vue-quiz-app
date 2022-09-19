<template>
	<div class="my-4 w-full">
		<div v-if="username">
			<h2 class="text-lg mb-8">Пользователь: <strong>{{ username }}</strong></h2>
			<form @submit.prevent ref="form">
				<div class="shadow p-4 bg-slate-50 rounded">
					<div class="text-center">
						<Question :counter="counter" :question="currentQuestion.question" :questionName="currentQuestion.name"
							:answers="currentQuestion.answers" @answerChange="onAnswerChange"
							:currentAnswerValue="currentQuestion.answer" />
						<div class="flex gap-4 justify-center">
							<!-- <AppButton @click="changeQuestion(counter - 1)" v-show="isPrevBtnVisible">Предыдущий вопрос</AppButton> -->
							<AppButton @click="changeQuestion(counter + 1)" :disabled="!isAnswerChecked" v-show="isNextBtnVisible">
								Следующий вопрос</AppButton>
							<AppButton @click="getResults" :disabled="!isAnswerChecked" v-show="isLastQuestion">Закончить тест
							</AppButton>
						</div>
					</div>
				</div>
			</form>
		</div>
		<div class="p-4" v-else>
			<h4 class="text-xl text-center text-red-600 font-light mb-12">У вас нет доступа к этой странице!</h4>
			<router-link to="/">
				<AppButton type="submit">Вернуться на главную</AppButton>
			</router-link>
		</div>
	</div>
</template>

<script>
import AppButton from '../components/AppButton.vue'
import Question from '../components/Question.vue'

export default {
	name: 'app-quiz',
	components: {
		AppButton,
		Question
	},
	emits: ['answerChange'],
	data() {
		return {
			questions: [
				{
					name: 'q1',
					question: 'Сколько будет 2 + 2?',
					answers: [
						{
							text: '3',
							type: 1,
							isCorrect: false,
						},
						{
							text: '4',
							type: 2,
							isCorrect: true,
						},
						{
							text: '5',
							type: 3,
							isCorrect: false,
						},
						{
							text: '6',
							type: 4,
							isCorrect: false,
						},
					]
				},
				{
					name: 'q2',
					question: 'Сколько будет 4 + 2?',
					answers: [
						{
							text: '3',
							type: 3,
							isCorrect: false,
						},
						{
							text: '6',
							type: 3,
							isCorrect: true,
						},
						{
							text: '5',
							type: 1,
							isCorrect: false,
						},
						{
							text: '3',
							type: 1,
							isCorrect: false,
						},
					]
				},
				{
					name: 'q3',
					question: 'Сколько будет 4 + 77?',
					answers: [
						{
							text: '3',
							type: 1,
							isCorrect: false,
						},
						{
							text: '81',
							type: 2,
							isCorrect: true,
						},
						{
							text: '5',
							type: 2,
							isCorrect: false,
						},
						{
							text: '3',
							type: 1,
							isCorrect: false,
						},
					]
				},
				{
					name: 'q4',
					question: 'Сколько будет 4 + 2?',
					answers: [
						{
							text: '6',
							type: 5,
							isCorrect: true,
						},
						{
							text: '5',
							type: 6,
							isCorrect: false,
						},
						{
							text: '5',
							type: 7,
							isCorrect: false,
						},
						{
							text: '3',
							type: 8,
							isCorrect: false,
						},
					]
				},
				{
					name: 'q5',
					question: 'Сколько будет 44 + 2?',
					answers: [
						{
							text: '3',
							type: 8,
							isCorrect: false,
						},
						{
							text: '5',
							type: 4,
							isCorrect: false,
						},
						{
							text: '3',
							type: 3,
							isCorrect: false,
						},
						{
							text: '46',
							type: 9,
							isCorrect: true,
						},
					]
				},
			],
			types: [
				{
					name: 'Димитрий',
					type: 1,
					value: 0
				},
				{
					name: 'Мигель',
					type: 2,
					value: 0
				},
				{
					name: 'Джонни',
					type: 3,
					value: 0
				},
				{
					name: 'Сэм',
					type: 4,
					value: 0
				},
				{
					name: 'Тори',
					type: 5,
					value: 0
				},
				{
					name: 'Криз',
					type: 6,
					value: 0
				},
				{
					name: 'Сильвер',
					type: 7,
					value: 0
				},
				{
					name: 'Ястреб',
					type: 8,
					value: 0
				},
				{
					name: 'Робби',
					type: 9,
					value: 0
				},
			],
			answers: [],
			currentQuestion: '',
			counter: 1,
			username: ''
		}
	},
	computed: {
		isPrevBtnVisible() {
			return this.counter > 1
		},
		isNextBtnVisible() {
			return this.counter < this.questions.length
		},
		isAnswerChecked() {
			return !!this.currentQuestion.answer
		},
		isLastQuestion() {
			return this.counter === this.questions.length
		}
	},
	created() {
		this.username = this.$route.params.username

		this.answers = this.questions.map(answer => ({
			name: answer.name,
			question: answer.question,
			answer: '',
			isCorrect: false,
			type: 1
		}))

		this.currentQuestion = this.questions[0]
		this.currentQuestion.answer = ''
	},
	methods: {
		updateAnswers() {
			const currentAnswer = this.answers[this.counter - 1]
			const currentQuestion = this.questions[this.counter - 1]
			const correctAnswer = currentQuestion.answers.find(item => item.text === currentQuestion.answer)

			currentAnswer.name = currentQuestion.name
			currentAnswer.answer = currentQuestion.answer
			currentAnswer.type = correctAnswer.type
			currentAnswer.isCorrect = correctAnswer.isCorrect

			this.types.filter(item => item.type === currentAnswer.type)[0].value++
		},
		changeQuestion(index) {
			if (this.counter < index) {
				this.updateAnswers()
			}

			this.currentQuestion = this.questions[index - 1]

			this.$refs.form.reset()
			this.counter = index
		},
		onAnswerChange(value) {
			this.currentQuestion.answer = value
		},
		getResults() {
			this.updateAnswers()
			this.$router.push({
				name: 'result', params: {
					answers: JSON.stringify(this.answers),
					types: JSON.stringify(this.types)
				}
			})
		}
	}
}
</script>
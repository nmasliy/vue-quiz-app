<template>
	<h4 class="mb-8 font-bold">Вопрос № {{ counter }}</h4>
	<h3 class="mb-6 font-semibold">{{ question }}</h3>
	<img class="h-64 object-cover block mx-auto mb-8" :src="`src/assets/main.jpg`">
	<div class="grid grid-cols-2 gap-8 mb-8">
		<Answer v-for="(answer, index) in answers" :key="index" :currentName="questionName" :answerText="answer.text"
			@answerChange="onAnswerChange" :currentAnswerValue="currentAnswerValue" />
	</div>
</template>

<script>
import Answer from './Answer.vue';

export default {
	name: 'vue-question',
	components: {
		Answer
	},
	emits: ['answerChange'],
	props: {
		counter: {
			type: Number,
			required: true
		},
		question: {
			type: String,
			required: true
		},
		questionName: {
			type: String,
			required: true
		},
		answers: {
			type: Array,
			required: true
		},
		currentAnswerValue: {
			type: String
		}
	},
	methods: {
		onAnswerChange(value) {
			this.$emit('answerChange', value)
		}
	}
}
</script>

<style>
</style>
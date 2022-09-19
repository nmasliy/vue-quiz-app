<template>
	<div class="block">
		<label class="block">
			<div class="flex">
				<input type="radio" :name="'field-' + currentName" :value="answerText" @change="onAnswerChange">
				<span class="ml-4">{{ answerText }}</span>
			</div>
		</label>
	</div>
</template>

<script>
export default {
	name: 'app-answer',
	props: {
		currentName: {
			type: String,
			required: true,
		},
		answerText: {
			type: String,
			required: true,
		},
		currentAnswerValue: {
			type: String
		}
	},
	methods: {
		onAnswerChange(e) {
			this.$emit('answerChange', e.target.value)
		}
	},

}
</script>

<style>
</style>
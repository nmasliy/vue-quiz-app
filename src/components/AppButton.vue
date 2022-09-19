<template>
	<button
		class="group relative flex justify-center w-full py-2 px-4 border border-transparent text-sm font-semibold rounded-md text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
		:class="buttonClasses" :disabled="disabled"  type="submit"><slot>Приступить к прохождению теста</slot></button>
</template>

<script>
export default {
	name: 'app-button',
	props: {
		disabled: {
			type: Boolean
		}
	},
	computed: {
		buttonClasses() {
			return {
				'bg-violet-600 hover:bg-violet-700 ': !this.disabled,
				'bg-gray-700 hover:bg-gray-600': this.disabled,
			}
		}
	}
}
</script>

<style>
</style>
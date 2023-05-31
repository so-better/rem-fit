<template>
	<div style="padding: 20px">
		<button>按钮</button>
	</div>
</template>
<script>
import RemFit from '../src'
export default {
	mounted() {
		const remFit = new RemFit(7.5, true)
		remFit.init()
	}
}
</script>
<style lang="less"></style>

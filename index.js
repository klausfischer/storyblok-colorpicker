const styles = `<style>
	.cbox {
		width: 15px;
		height: 15px; 
		margin: 5px 5px 0 0; 
		display: inline-block;
	}
	</style>`;

const template = `
	${styles}
	<input v-model="model" class="uk-width-1-1" />
	<span class="cbox" v-for="c in colors" v-bind:style="{ backgroundColor: c}" v-on:click="colorClicked"></span>
	`;

module.exports = {
	template,
	data () {
		return {
			model: "red",
			colors: [
				"#5E3AD9", "#30EAC0", "#A1FA42", "#B2655F", "#CCBF43"
			]
		}
	},
	watch: {
		'model': {
			handler (value) {
				console.log('changed color', value);
				this.$emit('changed-model', value);
			}
		}
	},
	methods: {
		colorClicked (event) {
			this.model = event.target.style.backgroundColor;
		}
	}
};
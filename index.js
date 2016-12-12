const styles = `
	<style>
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
	<sketch-picker :colors.sync="colors"></sketch-picker>
	`;

module.exports = {
	props: ['model'],
	components: {
		'sketch-picker': function (resolve, reject) {
			jQuery.getScript('https://cdn.rawgit.com/xiaokaike/vue-color/0.0.4/dist/vue-color.min.js', function() {
				resolve(window.VueColor.Sketch);
			});
		}
	},
	template,
	data () {
		return {
			model: "red",
			colors: {
				hex: "#1a5e25"
			}
		}
	},
	watch: {
		'colors': {
			handler (value) {
				this.$emit('changed-model', value.hex);
			},
      		deep: true
		}
	}
};
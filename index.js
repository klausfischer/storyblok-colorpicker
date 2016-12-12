const template = `
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
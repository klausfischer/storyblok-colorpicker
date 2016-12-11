var styles = '<style>';
styles += '.cbox {';
styles += 'width: 15px;';
styles += 'height: 15px; margin-right: 5px; display: inline-block;';
styles += '}';
styles += '</style>';

var tmpl =  styles + '<input v-model="model" class="uk-width-1-1" />';
tmpl += '<span class="cbox" v-for="c in colors" v-bind:style="{ backgroundColor: c}" v-on:click="colorClicked"></span>';

module.exports = {
	template: tmpl,
	data: function() {
		return {
			model: "red",
			colors: [
				"#5E3AD9", "#30EAC0", "#A1FA42", "#B2655F", "#CCBF43"
			]
		}
	},
	watch: {
		'model': {
			handler: function (value) {
				console.log('changed color', value);
				this.$emit('changed-model', value);
			}
		}
	},
	methods: {
		colorClicked: function(event) {
			console.log(event.target.style.backgroundColor);
			this.model = event.target.style.backgroundColor;
		}
	}
};
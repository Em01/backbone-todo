var TodoItemView = Backbone.View.extend({
	tagName: "li",

	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");
	},

	events: {
		"click #toggle": "onClickToggle"
	},

	onClickToggle: function(){
		console.log("Toggle clicked");
	},

	render: function(){
		this.$el.html("<input id='toggle' type='checkbox'></input>" + this.model.escape("description"));

		return this;
	}
});
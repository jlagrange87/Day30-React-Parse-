var Backbone = require("backparse")({
	appId:"GJ01Aou5c8h554NZ8Y7vZLPnAQ61hMbh9or7I7Yc",
	apiKey:"ttwYgdcxcKW8Ef8FJhUWdVUtl7DVZmAd6CR7GbJp",
	apiVersion:1
});

module.exports = Backbone.Model.extend({
	defaults: {
		title: "",
		body: ""
	},
	parseClassName:"post",
	idAttribute:"objectId",

	validate: function(attr) {
		if(!attr.title) {
			return 'Title cannot be empty.';
		}
		else if(!attr.body) {
			return 'Body cannot be empty.';
		}
		return false;
	}
})
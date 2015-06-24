var Backbone = require("backparse")({
	appId:"GJ01Aou5c8h554NZ8Y7vZLPnAQ61hMbh9or7I7Yc",
	apiKey:"ttwYgdcxcKW8Ef8FJhUWdVUtl7DVZmAd6CR7GbJp",
	apiVersion:1
});
var Vali

module.exports = Backbone.Model.extend({
	defaults: {
		username: null,
		password: null,
		passwordConf: null
	},
	parseClassName:"_User",
	isUser:true,
	idAttribute:"objectId"
});
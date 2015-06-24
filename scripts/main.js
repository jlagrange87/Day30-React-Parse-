var React = require('react');
var Backbone = require("backbone");
var Registration = require("./components/RegistrationComponent");
var Home = require("./components/HomeComponent")
var Login = require("./components/LoginComponent")
var Profile = require("./components/ProfileComponent")

var App = Backbone.Router.extend({
	routes:{
		"":     "home",
		"login": 	"login",
		"registration": 	"registration",
		"profile": 		"profile"
	},

	home: function(){
		React.render(<Home router={this}/>, document.querySelector('#container'))
	},
	login: function(){
		React.render(<Login router={this} />, document.querySelector('#container'))
	},
	registration: function(){
		React.render(<Registration router={this}/>, document.querySelector('#container'))
	},
	profile: function(){
		React.render(<Profile router={this} />, document.querySelector('#container'))
	}
});

var myApp = new App();
Backbone.history.start();
var React = require('react');
var Backbone = require("backbone");
var Registration = require("./components/RegistrationComponent");
var Home = require("./components/HomeComponent")
var Login = require("./components/LoginComponent")
var Profile = require("./components/ProfileComponent")
var UserModel = require("./models/UserModel")
var Admin = require("./components/AdminPageComponent")
var PostPage = require("./components/PostPageComponent")
var user = new UserModel();

var App = Backbone.Router.extend({
	routes:{
		"":     "home",
		"login": 	"login",
		"registration": 	"registration",
		"profile": 		"profile",
		"admin": 		"admin",
		"post/:postId": 	"post"


	},

	home: function(){
		React.render(<Home router={this} user={user}/>, document.querySelector('#container'))
	},
	login: function(){
		React.render(<Login router={this} user={user}/>, document.querySelector('#container'))
	},
	registration: function(){
		React.render(<Registration router={this} user={user}/>, document.querySelector('#container'))
	},
	profile: function(){
		React.render(<Profile router={this} user={user}/>, document.querySelector('#container'))
	},
	admin: function(){
		React.render(<Admin router={this} user={user}/>, document.querySelector('#container'))
	},
	post: function(postId){
		React.render(<PostPage postId={postId} />, document.querySelector('#container'))
	}
});
var myApp = new App();
Backbone.history.start();
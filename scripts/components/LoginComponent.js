var React = require("react");
var UserModel = require("../models/UserModel")


module.exports = React.createClass({
	render: function () {
		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.login}>
					<div>
						<input type="text" ref="email" placeholder="Email"/>
					</div>
					<div>
						<input type="password" ref="password" placeholder="Password"/>
					</div>
				</form>
			</div>
		);
	},
	login: function(e){
		e.preventDefault();
		var myApp = this.props.router

		myApp.navigate("profile", {trigger: true})
	}
});
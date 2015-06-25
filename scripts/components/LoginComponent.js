var React = require("react");
var validator = require("validator");
var errorStyling = {
  color: 'red',
  transition: 'color ease 1s'
};


module.exports = React.createClass({
	getInitialState: function() {
		return {
			errors: {}
		}
	},
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
					<button>Login</button>
				</form>
			</div>
		);
	},
	hasError: function(errors) {
		for(var i in errors) {
			if(errors[i]) {
				return true;
			}
		}
		return false;
	},
	login: function(e) {
		e.preventDefault();
		var that = this;
		var myApp = this.props.router;
		var login = {
			username: this.refs.email.getDOMNode().value,
			password: this.refs.password.getDOMNode().value
		};

		var errors = this.getInitialState().errors;

		if(!login.username) {
			errors.email = 'Please enter an email address.';
		}
		else if(!validator.isEmail(login.username)) {
			errors.email = 'This looks like an invalid email address.'
		}

		if(!login.password) {
			errors.password = 'Please enter a password.';
		}

		this.setState({errors: errors});

		if(!this.hasError(errors)) {
			this.props.user.login(login, {
				success: function(userModel) {
					myApp.navigate('admin', {trigger: true});
				},
				error: function(userModel, response) {
					that.setState({errors: {generic: response.responseJSON.error}});
				}
			});
		}
	}
});
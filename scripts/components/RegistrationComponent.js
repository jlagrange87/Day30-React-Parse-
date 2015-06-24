var React = require("react");
var UserModel = require("../models/UserModel")
var validator = require("validator");
var _ = require("backbone/node_modules/underscore");
var errorStyling = {
  color: 'red',
  transition: 'color ease 1s'
};

module.exports = React.createClass({
    getInitialState: function(){
        return {
            errors: {}
        };
    },
    render: function () {
        return (
          	<div>
                <h3>Sign Up</h3>
                <form onSubmit={this.onRegister}>
                    <div>
                        <input type="text" ref="email" placeholder="Email"/>
                        <span style={errorStyling}>{this.state.errors.email}</span><br/>
                    </div>
                    <div>
                        <input type="password" ref="password" placeholder="Password"/>
                        <span style={errorStyling}>{this.state.errors.password}</span><br/>
                    </div>
                     <div>
                        <input type="password" ref="passwordConf" placeholder="Password Confirmation"/>
                        <span style={errorStyling}>{this.state.errors.passwordConf}</span><br/>
                    </div>
                    <button>Register</button>
                </form>
            </div>
        );
    },
    onRegister: function(e){
        e.preventDefault();
        var error = {};
        var myApp = this.props.router;
        var that = this;
        var userEmail = this.refs.email.getDOMNode().value
        var pass = this.refs.password.getDOMNode().value
        var passCon = this.refs.passwordConf.getDOMNode().value
        var newUser = new UserModel({
            username: userEmail,
            password: pass
        });
        console.log(newUser)
        if(!newUser.get("username") || !newUser.get("password")|| !passCon){
            if(!newUser.get("username")){
                error.email = " Please enter an email address";
            }
            if(!newUser.get("password")){
                error.password = " Please enter a password";
            }
            if(!passCon){
                error.passwordConf = " Please confirm your password";
            }       
        } 

        else {
            if(!validator.isEmail(newUser.get("username"))){
                error.email = " The email looks wrong";
            }
            if(passCon !== newUser.get("password")){
                error.passwordConf = " Passwords do not match";
            } 
        }
        this.setState({errors: error});

        if(_.isEmpty(error)) {
			newUser.save(null,
				{
					success: function(user) {
	       				myApp.navigate("profile", {trigger:true});
	       			},
					error: function(user, response) {
	        			if(response.responseJSON.code === 202) {
	        				error.email = response.responseJSON.error;
	        			}

	        			that.setState({errors:error});
	        		}
				}
			);
		}
	}
});
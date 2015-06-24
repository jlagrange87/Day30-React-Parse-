var React = require("react");

module.exports = React.createClass({
    render: function () {
        return (
          	<div>
                <h1> Home </h1>
                <div>
                    <button onClick={this.goReg}>Register Now</button>
                </div>
                <div>
                    <button onClick={this.loginPage}>Login Now</button>
                </div>
          	</div>
        );
    },
    goReg: function(){
        var myApp = this.props.router
        myApp.navigate("registration", {trigger: true})
    },
    loginPage: function(){
        var myApp = this.props.router
        myApp.navigate("login", {trigger: true})
    }
});
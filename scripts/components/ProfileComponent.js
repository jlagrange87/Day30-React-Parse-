var React = require("react");


module.exports = React.createClass({
    render: function () {
        return (
          	<div>
               	<h1>Welcome to your profile!</h1>
               	<div>
					<button onClick={this.goReg}>Go Home</button>
          		</div>
          	</div>
        );
    },
    goReg: function(){
        var myApp = this.props.router
        myApp.navigate("", {trigger: true})
    }
});
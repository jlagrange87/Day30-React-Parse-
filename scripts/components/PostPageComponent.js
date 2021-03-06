var React = require("react");
var PostModel = require("../models/PostModel");


module.exports = React.createClass({
	getInitialState: function(){
		var that = this;
		var post = new PostModel({
			objectId: this.props.postId
		})
		post.fetch();
		post.on("change", function(){
			that.forceUpdate();
		})

		return{
			post: post
		};
	},

	render: function () {
		return (
			<div>
				<div>
					<h1>{this.state.post.get("title")}</h1>
					<p>{this.state.post.get("body")}</p>
				</div>
			</div>
		);
	}
});
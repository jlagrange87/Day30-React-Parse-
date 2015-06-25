var React = require("react");
var validator = require("validator");
var _ = require("backbone/node_modules/underscore");
var PostModel = require("../models/PostModel");
var errorStyling = {
  color: 'red'
};

module.exports = React.createClass({
    getInitialState: function(){
        return {
            errors: {}
        };
    },
    render: function () {
        var genericError = null;
        if(this.state.errors.generic){
            genericError = (<div>{this.state.errors.generic}</div>)
        }
        return (
          	<div>
                <h3>New Post</h3>
                <div>{genericError}</div>
                <form onSubmit={this.onPost}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title" placeholder="Title"/>
                        <span style={errorStyling}>{this.state.errors.title}</span><br/>
                    </div>
                    <div>
                    <label>Body</label>
                        <textarea type="password" ref="body" placeholder="Body"/>
                        <span style={errorStyling}>{this.state.errors.body}</span><br/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    },
    onPost: function(e){
        e.preventDefault();
        var post = new PostModel({
            title: this.refs.title.getDOMNode().value,
            body: this.refs.body.getDOMNode().value
        });

        if(post.isValid()){
            post.save();
        }
        else {
            this.setState({errors: {generic: post.validationError}});
        }
    }
});
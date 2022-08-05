import React from "react";

export default class Comments extends React.Component {
    handleSubmit(event) {
        event.preventDefault()
        const comment = event.target.elements.comment.value;
        this.props.startAddingComments(comment, this.props.postId);
        event.target.elements.comment.value = '';
    }

    render() {
        return (
             <div className="comment">
                {this.props.comments instanceof Array && this.props.comments.map((comment, index) => {
                    return (
                        <p key={index}>{comment}</p>
                    )
                })}
                <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="comment" name="comment"/>
                    <input type="submit"  style={{visibility: 'hidden'}}/>
                </form>
             </div>
        );
    }
}
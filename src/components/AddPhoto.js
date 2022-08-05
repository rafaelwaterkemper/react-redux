import React from "react"
import { Navigate } from "react-router-dom"

export default class AddPhoto extends React.Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            post: null
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        if (imageLink && description) {
            const post = {
                id: Number(new Date()),
                imageLink,
                description
            }

            this.props.startAddingPost(post);
            this.setState({ post: post })
        }

    }

    render() {
        return (
            <div>
                {this.state.post && (
                    <Navigate to={"/"} />
                )}
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type={"text"} placeholder="Link" name="link" />
                        <input type={"text"} placeholder="Description" name="description" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}
import React from "react";
import { Link } from "react-router-dom"

export default class Photo extends React.Component {
    render() {
        const post = this.props.post;
        return (
            <>
                <figure className="figure">
                    <Link to={`/single/${post.id}`}>
                        <img src={post.imageLink} alt={post.description} className="photo" />
                    </Link>
                    <figcaption>
                        <p>{post.description}</p>
                    </figcaption>
                    <div className="button-container">
                        <button className="remove-button" onClick={() => {
                            this.props.startRemovingPost(this.props.index, post.id)
                            this.props.router.navigate("/")
                        }}>
                            Remove</button>
                        <Link className="button" to={`/single/${post.id}`}>
                            <div className="comment-count">
                                <div className="speech-bubble"></div>
                                {this.props.comments[post.id] ? this.props.comments[post.id].length : 0}
                            </div>
                        </Link>
                    </div>
                </figure>
            </>
        )
    }
}
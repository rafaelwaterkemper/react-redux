import React from "react";
import { withRouter } from "../adapters/withRouterAdapter";
import Comments from "./Comments";
import Photo from "./Photo";

const Single = class extends React.Component {
    render() {
        const { router, posts } = this.props
        const id = Number(router.params.id);
        const post = posts.find(post => post.id === id)
        const comments = this.props.comments[id]
        const index = posts.findIndex((post) => post.id === id)

        if (this.props.loading === true) {
            return <div className="loader">...loading...</div>
        } else if (post) {
            return <div className="single-photo">
                <Photo {...this.props} post={post} index={index} embedded={true} />
                <Comments {...this.props} postId={id} comments={comments} />
            </div>
        } else {
            return <h1>Not found</h1>
        }
    }
}

export default withRouter(Single)
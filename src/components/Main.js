import React from "react";
import AddPhoto from "./AddPhoto";
import PhotoWall from "./PhotoWall";
import { Routes, Route, Link } from "react-router-dom";
import Single from "./Single";

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }

    async componentDidMount() {
        this.props.startLoadingPosts()
        this.props.startLoadingComments()
    }

    componentDidUpdate() {
        if (this.props.posts.length !== 0 && this.state.loading === true) {
            this.setState({loading: false})
        }
    }

    render() {
        return (
            <>
                <h1><Link to="/">Photowall</Link></h1>
                <Routes>
                    <Route exact path="/" element={
                        <div>
                            <PhotoWall {...this.props} />
                        </div>

                    } />
                    <Route path="/addPhoto" element={<AddPhoto {...this.props} />} />
                    <Route path="/single/:id" element={<Single {...this.props} loading={this.state.loading}  />} />
                </Routes>
            </>
        )
    }
}
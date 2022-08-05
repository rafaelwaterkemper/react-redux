import React from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom"

export default class PhotoWall extends React.Component {
  render() {
    return (
      <>
        <Link className="addIcon" to="/addPhoto"></Link>
        <div className="photoGrid">
          {
            this.props.posts
              .sort((a, b) => b.id - a.id)
              .map((post, index) => <Photo key={post.id} {...this.props} post={post} index={index}/>)
          }
        </div>
      </>);
  }
}
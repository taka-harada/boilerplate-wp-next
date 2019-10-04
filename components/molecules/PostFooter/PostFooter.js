import React, { Component } from "react";

import PostTagbox from "../PostTagbox/PostTagbox";
import PostAuthorbox from "../PostAuthorbox/PostAuthorbox";
import PostImage from "../../../static/PostImage";
import "./PostFooter.scss";

class PostFooter extends Component {
  render() {
    console.log("start postFooter");
    console.log(this.props);
    console.log("end postFooter");
    return (
      <footer className="p-article__footer">
        {this.props.post.common_tag && <PostTagbox {...this.props} />}
        <PostAuthorbox {...this.props} />
      </footer>
    );
  }
}

export default PostFooter;

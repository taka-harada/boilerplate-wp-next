import React, { Component } from "react";
import Link from "next/link";

import "./PostTagbox.scss";

class PostTagbox extends Component {
  render() {
    const tags = this.props.post.common_tag.map(tag => (
      <li key={tag.term_id}>
        <Link
          as={`/tag/${tag.slug}`}
          href={{ pathname: "/tag", query: { slug: tag.slug } }}
        >
          <a>{tag.name}</a>
        </Link>
      </li>
    ));
    // console.log("start tagbox");
    // console.log(this.props);
    // console.log(tags);
    // console.log("end tagbox");

    return (
      <section className="p-articlefoot-tags">
        <ul>{tags}</ul>
      </section>
    );
  }
}

export default PostTagbox;

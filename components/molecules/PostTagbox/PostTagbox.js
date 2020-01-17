import React, { Component } from "react";
import Link from "next/link";

import "./PostTagbox.scss";

class PostTagbox extends Component {
  render() {
    const tags = this.props.post.commontag.map(tag => (
      <li key={tag.term_id}>
        <Link
          as={`/tag/${tag.slug}`}
          href={{ pathname: "/tag", query: { slug: tag.slug } }}
        >
          <a>{tag.name}</a>
        </Link>
      </li>
    ));

    return (
      <section className="p-articlefoot-tags">
        <ul>{tags}</ul>
      </section>
    );
  }
}

export default PostTagbox;

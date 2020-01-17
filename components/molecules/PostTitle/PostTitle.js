import React, { Component } from "react";
import Link from "next/link";
import Moment from "react-moment";

import "./PostTitle.scss";

class PostTitle extends Component {
  render() {
    console.log("start PostTitle");
    console.log(this.props);
    console.log("end PostTitle");

    return (
      <header className="p-article__header">
        <h1>{this.props.post.title.rendered}</h1>
        <ul className="post-date">
          <li className="date">
            <Moment format="YYYY.MM.DD">{this.props.post.date}</Moment>
          </li>
          {this.props.post.modified && (
            <li className="update">
              <Moment format="YYYY.MM.DD">{this.props.post.modified}</Moment>
              <span>Update</span>
            </li>
          )}
        </ul>
        <div className="eyecatch">
          <div className="eyecatch-image">
            <div className="img-box">
              <img src={this.props.post.featured_image} />
            </div>
            {this.props.post.jpcategory && (
              <div className="badge-category badge-ancientcity">
                <Link
                  as={`/jp/${this.props.post.jpcategory[0].slug}`}
                  href={{
                    pathname: "/categoryJp",
                    query: { slug: this.props.post.jpcategory[0].slug }
                  }}
                >
                  <a>{this.props.post.jpcategory[0].name}</a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default PostTitle;

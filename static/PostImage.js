import React, {Component} from 'react'

class PostImage extends Component {
  constructor(props){
    super(props);
    this.fname = "./static/post/" + props.fname;
    this.alt = props.alt
  }

  render() {
    return (
      <img src={this.fname} alt={this.alt} />
    );
  }
}
export default PostImage;

import React, {Component} from 'react'

export class MainVisualImage extends Component {
  constructor(props){
    super(props);
    this.fname = "./static/main/" + props.fname;
    this.size = props.size + "px";
    this.alt = props.alt
    this.class = props.class
  }

  render() {
    return (
      <img src={this.fname} width={this.size} alt={this.alt} className={this.class} />
    );
  }
}

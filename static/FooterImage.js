import React, {Component} from 'react'

export class FooterImage extends Component {
  constructor(props){
    super(props);
    this.fname = "./static/footer/" + props.fname;
    this.size = props.size + "px";
    this.alt = props.alt
  }

  render() {
    return (
      <img src={this.fname} width={this.size} alt={this.alt} />
    );
  }
}

import React, {Component} from 'react'

export class ArwLeft extends Component {
  constructor(props){
    super(props);
    this.fname = "/static/nav/" + props.fname;
    this.size = props.size + "px";
    this.alt = props.alt
  }

  render() {
    return (
      <img src={this.fname} width={this.size} alt={this.alt} />
    );
  }
}

export class ArwRight extends Component {
  constructor(props){
    super(props);
    this.fname = "/static/nav/" + props.fname;
    this.size = props.size + "px";
    this.alt = props.alt
  }

  render() {
    return (
      <img src={this.fname} width={this.size} alt={this.alt} />
    );
  }
}

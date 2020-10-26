import React, { Component } from 'react';
import { postAction } from './'

export class Blogs extends Component {
  componentDidMount(){
    postAction()
  }
  render(){
    return (
      <>
        <div>Blogs component works</div>
      </>
    )
  }
}


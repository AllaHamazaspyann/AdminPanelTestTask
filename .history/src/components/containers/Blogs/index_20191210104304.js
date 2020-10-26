import React, { Component } from 'react';
import { connect } from 're'
import { postAction } from './action';


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


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postAction } from './action';
import 

export class Blogs extends Component {
  
  render(){
    return (
      <>
        <div>Blogs component works</div>
      </>
    )
  }
}


const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  postAction: () => {
      dispatch(postAction())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
import React, { Component } from 'react';
import { connect } from 'react-redux';
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


const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  checkSame: () => {
      dispatch(checkSame())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
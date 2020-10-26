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
  currenciesState: state.currencies
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (btnType, receivedObject) => {
      dispatch(openModal(btnType, receivedObject))
  },
  getCurrencies: (page, pageSize) => {
      dispatch(getCurrencies(page, pageSize))
  },
  checkEmpty: () => {
      dispatch(checkEmpty())
  },
  checkSame: () => {
      dispatch(checkSame())
  }
});

import React, { useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getArticles } from './actions';

export const SingleArticle = (props) => {
  const dispatch = useDispatch();

  console.log('props.history', );
  useEffect(() => {
    dispatch(getArticles(props.match.params.id))
  })
  return(
    <>

    </>
  )
} 
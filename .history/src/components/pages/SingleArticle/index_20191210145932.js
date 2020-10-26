import React, { useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getArticles } from './actions';

export const SingleArticle = (props) => {
  const dispatch = useDispatch();
  // const singleArticle = useSelector(state => state);

  useEffect(() => {
    dispatch(getArticles(props.match.params.id))
  })
  console.log('singleArticle', singleArticle);
  return(
    <>
      {/* <S.ArticleWrapper>
        <h2>{el.title}</h2>
        <p>{el.main_text}</p>
        <h3>{el.author_name}</h3>
        <p>{el.category}</p>
        <p>{el.created_at}</p>
      </S.ArticleWrapper> */}
    </>
  )
} 
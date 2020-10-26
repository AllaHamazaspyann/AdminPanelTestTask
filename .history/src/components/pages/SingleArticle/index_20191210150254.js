import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getArticles } from './actions';

export const SingleArticle = (props) => {
  const dispatch = useDispatch();
  // const singleArticle = useSelector(state => state);

  const singleArticle = useSelector(state => state.singleArticle);

  useEffect(() => {
    dispatch(getArticles(props.match.params.id))
  }, [])
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
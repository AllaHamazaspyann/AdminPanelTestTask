import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getArticles } from './actions';
import * as S from './'

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
      <S.ArticleWrapper>
        <h2>{singleArticle.title}</h2>
        <p>{singleArticle.main_text}</p>
        <h3>{singleArticle.author_name}</h3>
        <p>{singleArticle.category}</p>
        <p>{singleArticle.created_at}</p>
      </S.ArticleWrapper>
    </>
  )
} 
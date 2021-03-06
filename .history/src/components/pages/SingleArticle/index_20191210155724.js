import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getArticles } from './actions';
import * as S from './SingleArticle.Styles';

export const SingleArticle = (props) => {
  const dispatch = useDispatch();
  // const singleArticle = useSelector(state => state);

  const singleArticleState = useSelector(state => state.singleArticle);
  const { single_article } = singleArticleState;

  useEffect(() => {
    dispatch(getArticles(props.match.params.id))
  }, [])
  console.log('singleArticle', single_article);
  return(
    <>
      <S.ArticleWrapper>
        <h2>{single_article.title}</h2>
        <p>{single_article.main_text}</p>
        <h3>{single_article.author_name}</h3>
        <p>{single_article.category}</p>
        <p>{single_article.created_at}</p>
      </S.ArticleWrapper>
      <div>
        <input placeholder=/>
      </div>
    </>
  )
} 
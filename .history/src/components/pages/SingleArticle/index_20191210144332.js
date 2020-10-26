import React, { useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getArticles } from './actions';

export const SingleArticle = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles(props.match.params.id))
  })
  return(
    <>
       <S.ArticleWrapper to={`/articles/${el.id}`} key={el.id}>
                <h2>{el.title}</h2>
                <p>{el.main_text}</p>
                <h3>{el.author_name}</h3>
                <p>{el.category}</p>
                <p>{el.created_at}</p>
              </S.ArticleWrapper>
    </>
  )
} 
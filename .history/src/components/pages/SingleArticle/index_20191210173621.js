import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { 
  getArticles, 
  handleCommentChange, 
  makeComment,
  getLatestComments
 } from './actions';
import * as S from './SingleArticle.Styles';

export const SingleArticle = (props) => {
  const dispatch = useDispatch();

  const singleArticleState = useSelector(state => state.singleArticle);
  const { single_article, commentValue, comments } = singleArticleState;


  useEffect(() => {
    dispatch(getArticles(props.match.params.id));
    dispatch(getLatestComments(props.match.params.id))
  }, [commentValue])

    comments.sort((a,b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    })
  
   const latestComments = comments.slice(0,5);

  return(
    <S.Container>
      <S.Item>
        <h2>Comments</h2>
          {latestComments && latestComments.map(el => (
            <div key={el.id}>
              {el.body}
            </div>
          ))}
      </S.Item>
      <S.Item>
        <S.ArticleWrapper>
          <h2>{single_article.title}</h2>
          <p>{single_article.main_text}</p>
          <h3>{single_article.author_name}</h3>
          <p>{single_article.category}</p>
          <p>{moment(single_article.created_at).format('LLL')}</p>
        </S.ArticleWrapper>
        <div>
          <textarea 
            value={commentValue}
            placeholder='Leave a comment'
            onChange={(e) => dispatch(handleCommentChange(e)) }/>
            <S.Comment onClick={() => dispatch(makeComment(props.match.params.id))}>
                Leave a comment
            </S.Comment>
        </div>
      </S.Item>
     
    </S.Container>
  )
} 
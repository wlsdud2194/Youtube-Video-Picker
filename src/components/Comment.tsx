import React from 'react';
import styled from 'styled-components';

  // data.items[].snippet.topLevelComment.snippet
  // authorDisplayName: 이름  //
  // authorProfileImageUrl: 프로필 사진 //
  // publishedAt: 작성일
  // updatedAt: 수정일  //
  // textDisplay: 댓글 내용 //
  // likeCount: 좋아요 갯수 

type Props = {
  authorProfileImageUrl: string;
  authorDisplayName: string; 
  textDisplay: string;
  updatedAt: string;
  likeCount: number;
}

function Comment({ authorProfileImageUrl, authorDisplayName, textDisplay, updatedAt, likeCount }: Props) {
  return (
    <CardBlock className={'comment_card'}>
    
      <CardHead className={'comment_header'}>
        <div className={'comment_img'}>
          <img src={authorProfileImageUrl} alt='프로필'/>
        </div>
        <div className={'comment_auth'}>
          {authorDisplayName}
        </div>
      </CardHead>
      
      <div className={'comment_body'}>
        {textDisplay}
      </div>

      <div className={'comment_foot'}>
        <div className={'comment_date'}>
          마지막 수정일: {updatedAt.substring(0, 10)} {updatedAt.substring(11, 16)}
        </div>
        {
          likeCount ? (
            <div className={'comment_like'}>
              <span role='img' aria-label="Thumbs Up">👍</span> {likeCount}
            </div>
          ) : (
            <div></div>
          )
        }
      </div>
    </CardBlock>
  );
}

const CardBlock = styled.div`
  margin: 1.3rem 0;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 1rem 1rem;

  .comment_body {
    padding: 10px 0 10px;
  }

  .comment_foot {
    display: flex;
    font-size: 14px;
    border-top: 1px solid #d9d9d9;
    padding: 8px 0 8px;
    margin-top: 10px;

    .comment_date {
      flex: 1;
    }
    .comment_like {
      margin-right: 10px;
    }
  }
`

const CardHead = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: flex-start;
  
  img {
    border-radius: 50%;
  }
  .comment_auth {
    margin-left: 10px;
  }
`

export default Comment;
import React from 'react';
import styled from 'styled-components';
import { BsCardList } from 'react-icons/bs';
import colors from '../libs/palette';
import Comment from './Comment';
import Loading from './Loading';

type Props ={
  loading: boolean;
  comments: any[];
  onFetchComments: () => void;
}

let id = 0;

function CommentList({ loading, comments, onFetchComments }: Props) {
  const commentList = comments.map((comment) => {
    const {
      authorDisplayName,
      authorProfileImageUrl,
      likeCount,
      updatedAt,
      textDisplay
    } = comment.snippet.topLevelComment.snippet;

    return (
      <Comment
        key={id++}
        authorDisplayName={authorDisplayName}
        authorProfileImageUrl={authorProfileImageUrl}
        likeCount={likeCount}
        textDisplay={textDisplay}
        updatedAt={updatedAt}
      />
    );
  });

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <Block>
      {comments.length > 0 ? (
        <>
          <DescBlock>
            <span className="comment_count">댓글 {comments.length}개</span>
            <span className="comment_desc">(대댓글은 제외)</span>
          </DescBlock>
          <CommentWrap>
            {commentList}
          </CommentWrap>
        </>
      ) : (
        <PendingBlock>
          <div><BsCardList style={{fontSize: '1.5rem'}} /></div>
          <div className="pending_title">댓글 보기</div>
          <div className="pending_warn">주의) 모든 댓글을 불러옵니다</div>
          <SmallBtn onClick={onFetchComments}>불러오기</SmallBtn>
        </PendingBlock>
      )}
    </Block>
  );
}

const Block = styled.div`
  padding: 1rem 0 0;
`

const PendingBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  border: 1px solid ${colors.youtube_black};
  border-radius: 8px;

  & > * + * { 
    margin-top: 0.4rem;
  }

  .pending_title {
    font-size: 1.25rem;
    font-weight: 700;
  }
`

const DescBlock = styled.div`
  margin: 0.5rem auto;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${colors.youtube_black};

  & > * + * {
    margin-left: 0.5rem;
  }

  .comment_count {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.youtube_black};
  }
  .comment_desc {
    color: gray;
  }
`

const CommentWrap = styled.div`
  height: 40rem;
  overflow: auto;
  margin: 0 0 2rem;
  padding-right: 0.5rem;
`

const SmallBtn = styled.button`
  cursor: pointer;
  outline: none;
  font-size: 1rem;
  height: 2rem;
  border-radius: 4px;
  padding: 0.3rem 1rem 0.3rem;
  transition: 0.23s all ease;
  color: white;
  background-color: ${colors.youtube_red};
  vertical-align: middle;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`

const SmallInput = styled.input`
  
`

export default CommentList;
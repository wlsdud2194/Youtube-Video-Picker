import React from 'react';
import styled from 'styled-components';
import colors from '../libs/palette';
import Comment from './Comment';
import Loading from './Loading';

type Props ={
  loading: boolean;
  comments: any[];
}

let id = 0;

function CommentList({ loading, comments }: Props) {
  const commentList = comments.map(comment => {
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
    )
  });

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <Block>
      {commentList.length > 0 && (
        <>
        <DescBlock>
          <span className="comment_count">댓글 {commentList.length}개</span>
          <span className="comment_desc">(대댓글은 제외)</span>
        </DescBlock>
        {commentList}
        </>
      )}
    </Block>
  );
}

const Block = styled.div`
  padding: 1rem 0 0;
`

const DescBlock = styled.div`
  margin: 0.5rem auto;

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

export default CommentList;
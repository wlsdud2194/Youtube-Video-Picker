import React from 'react';
import styled from 'styled-components';
import LoadingBar from '../assets/loading.gif';

function Loading() {
  return (
    <Block>
      <AlertBlock>
        <div>댓글을 불러오는 중 ...</div>
        <div className={'notice'}>댓글수가 많으면 불러오는데 시간이 걸립니다</div>
      </AlertBlock>

      <div>
        <img src={LoadingBar} alt='로딩 중' />
      </div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AlertBlock = styled.div`
  font-weight: bold;
  margin: 20px 0 20px;
  text-align: center;

  .notice {
    font-size: 12px;
  }
`

export default Loading;
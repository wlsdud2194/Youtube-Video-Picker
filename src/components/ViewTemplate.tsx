import React, { ReactNode } from "react";
import styled from "styled-components";
import { breakpoint, media } from "../libs/media";
import colors from "../libs/palette";

type Props = {
  body: ReactNode;
  children: ReactNode;
};

function ViewTemplate({ body, children }: Props) {
  return (
    <Block>
      <HeaderWrap className="point">
        <HeaderLayout className="view_header">
          <h1 className="view_title">
            <span className="youtube">YouTube</span>
            <span> 영상 정보 불러오기</span>
          </h1>
          <div className="view_subtitle">
            더욱 쉽게 영상에 관한 정보를 찾아보세요!
          </div>
          <Body>{body}</Body>
        </HeaderLayout>
      </HeaderWrap>

      <Layout>{children}</Layout>
    </Block>
  );
}

const Block = styled.div`
  color: ${colors.youtube_black};

  .view_header {
    & > * {
      text-align: center;
    }

    .view_title {
      margin: 0;

      & .youtube {
        color: ${colors.youtube_red};
      }
    }
  }

  ${media(490)} {
    .view_title {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const HeaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = styled.div`
  width: 1024px;
  margin: 0 auto;

  ${breakpoint.lg} {
    width: 700px;
  }
  ${breakpoint.md} {
    width: 400px;
  }
  ${breakpoint.sm} {
    width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const HeaderWrap = styled.div`
  padding: 4rem 0 0;
  border-bottom: 1px solid #d9d9d9;
`;

const Body = styled.div`
  /* border-bottom: 1px solid #d9d9d9; */
`;

export default ViewTemplate;

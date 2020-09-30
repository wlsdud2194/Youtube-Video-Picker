/* eslint-disable jsx-a11y/accessible-emoji */
import React, { ReactNode } from "react";
import styled from "styled-components";
import { FiEye, FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { breakpoint } from "../libs/media";
import colors from "../libs/palette";
import IconLabel from "./IconLabel";
import TagList from "./TagList";
import { makeComma } from "../libs/utils";

type Props = {
  snippet: any;
  statistics: any;
  children: ReactNode;
};

function VideoViewer({ snippet, statistics, children }: Props) {
  const { thumbnails, title, description, tags } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  return (
    <Block>
      <div>
        <Img src={thumbnails?.medium?.url} alt="thumbnail" />
      </div>
      <ContentWrap>
        <div className="title">{title}</div>
        <div className="desc">{description}</div>
        <TagList tags={tags} />

        <StatisWrap>
          <IconLabel icon={<FiEye />} value={makeComma(viewCount)} />
          <IconLabel icon={<FiThumbsUp />} value={makeComma(likeCount)} />
          <IconLabel icon={<FiThumbsDown />} value={makeComma(dislikeCount)} />
        </StatisWrap>

        {children}
      </ContentWrap>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  padding: 1.5rem 0 0;

  ${breakpoint.lg} {
    flex-direction: column;
  }
`;

const Img = styled.img`
  border-radius: 8px;
  box-shadow: 0 0 8px 4px #ccc;

  ${breakpoint.lg} {
    width: 100%;
  }
`;

const ContentWrap = styled.div`
  padding-left: 1.5rem;

  .title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .desc {
    font-size: 0.78rem;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  & > * + * {
    margin-top: 1rem;
  }

  ${breakpoint.lg} {
    padding-top: 1rem;
    padding-left: 0;
  }
`;

const StatisWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${colors.youtube_black};

  & > * + * {
    margin-left: 1rem;
  }
`;

export default VideoViewer;

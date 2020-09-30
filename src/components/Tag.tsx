import React from "react";
import styled from "styled-components";
import colors from "../libs/palette";
import { tagSharp } from "../libs/utils";

type Props = {
  name: string;
};

function Tag({ name }: Props) {
  const tagStyleName = tagSharp(name);

  return <TagBlock>{tagStyleName}</TagBlock>;
}

const TagBlock = styled.div`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 27px;
  background-color: ${colors.youtube_black};
  color: #fff;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 0.75rem;
`;

export default Tag;

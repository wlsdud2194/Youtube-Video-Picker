import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  icon: ReactNode;
  value: ReactNode;
}

function IconLabel({ icon, value }: Props) {
  return (
    <Block>
      <IconWrap>
        {icon}
      </IconWrap>
      <div>{value}</div>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;

  & > * + * {
    margin-left: 0.5rem;
  }
`

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default IconLabel;
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import colors from "../libs/palette";

type Props = {
  onSearchVideo: (url: string) => void;
};

function ViewInput({ onSearchVideo }: Props) {
  const [url, setUrl] = useState("");

  const onChangeUrl = useCallback((e) => {
    setUrl(e.target.value);
  }, []);

  const onSubmitUrl = useCallback(() => {
    onSearchVideo(url);
  }, [onSearchVideo, url]);

  return (
    <ViewBody>
      <Form className="urlInput_form">
        <Input
          className="url_input"
          type="text"
          onChange={onChangeUrl}
          value={url}
          placeholder="ex) https://www.youtube.com/watch?v=12345678910"
        />
        <Button className="url_btn" onClick={onSubmitUrl}>
          검색
        </Button>
      </Form>
      <div className="view_alert">
        해당 서비스는 <span>개인적인 용도</span> 로만 사용가능 합니다
      </div>
    </ViewBody>
  );
}

const ViewBody = styled.div`
  width: 100%;
  padding: 2rem 0 2rem;

  .view_alert {
    padding-top: 0.4rem;
    font-size: 14px;

    span {
      color: ${colors.youtube_red};
    }
  }
`;

const Form = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > * + * {
    margin-left: 0.5rem;
  }

  @media (max-width: 490px) {
    flex-direction: column;

    & > * {
      width: 100%;
    }

    & > * + * {
      margin-left: 0;
      margin-top: 0.5rem;
    }
  }
`;

const Input = styled.input`
  width: 20rem;
  height: 2.5rem;
  padding: 5px 7px 5px;
  border: 1px solid ${colors.youtube_black};
  border-radius: 2px;
  outline: none;
`;

const Button = styled.button`
  cursor: pointer;
  outline: none;
  font-weight: 700;
  font-size: 1.2rem;
  height: 2.5rem;
  border: 1px solid ${colors.youtube_black};
  border-radius: 4px;
  padding: 0.3rem 0.7rem 0.3rem;
  transition: 0.23s all ease;
  background-color: transparent;
  vertical-align: middle;

  &:hover {
    background-color: ${colors.youtube_red};
    border: 1px solid ${colors.youtube_red};
    color: white;
  }
`;

export default ViewInput;

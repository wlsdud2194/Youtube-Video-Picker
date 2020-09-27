import React, { useCallback, useState } from "react";
import queryString from "query-string";

import { getAllComments, requestVideoById } from "./api";
import ViewTemplate from "./components/ViewTemplate";
import ViewInput from "./components/ViewInput";
import CommentList from "./components/CommentList";

function App() {
  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState<any>(null);
  const [commentList, setCommentList] = useState<any[]>([]);

  const onSearchVideo = useCallback((url: string) => {
    if (url.length > 0) {
      const videoId = queryString.parseUrl(url).query.v as string;

      setLoading(true);
      setCommentList([]);

      requestVideoById(videoId).then((data) => {
        if (data.items && data.items.length > 0) {
          console.log(data.items[0]);
          setVideo(data.items[0]);
        }
      });
      // getAllComments(videoId).then((comments) => {
      //   setLoading(false);
      //   setCommentList(comments);
      // });
    } else {
      alert("url을 입력해주세요");
    }
  }, []);

  return (
    <ViewTemplate body={<ViewInput onSearchVideo={onSearchVideo} />}>
      <CommentList loading={loading} comments={commentList} />
    </ViewTemplate>
  );
}

export default App;

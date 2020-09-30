import React, { useCallback, useState } from "react";
import queryString from "query-string";

import { getAllComments, requestVideoById } from "./api";
import ViewTemplate from "./components/ViewTemplate";
import ViewInput from "./components/ViewInput";
import CommentList from "./components/CommentList";
import VideoViewer from "./components/VideoViewer";

function App() {
  const [videoId, setVideoId] = useState("");
  const [video, setVideo] = useState<any>(null);
  const [commentList, setCommentList] = useState<any[]>([]);
  const [commentLoading, setCommentLoading] = useState(false);

  const onSearchVideo = useCallback((url: string) => {
    console.log("object", url.length);
    if (url.length > 0) {
      const videoIdData = queryString.parseUrl(url).query.v as string;

      setVideoId(videoIdData);
      setCommentList([]);

      requestVideoById(videoIdData)
        .then((data) => {
          if (data.items && data.items.length > 0) {
            console.log(data.items[0]);
            setVideo(data.items[0]);
          }
        })
        .catch(() => {
          alert("뭔가 잘못됬습니다. URL을 확인해주세요");
        });
    } else {
      alert("url을 입력해주세요");
    }
  }, []);

  const onFetchCommentList = useCallback(() => {
    setCommentLoading(true);
    setCommentList([]);

    if (videoId) {
      getAllComments(videoId).then((comments) => {
        setCommentLoading(false);
        setCommentList(comments);
      });
    }
  }, [videoId]);

  return (
    <ViewTemplate body={<ViewInput onSearchVideo={onSearchVideo} />}>
      {video && (
        <VideoViewer snippet={video.snippet} statistics={video.statistics}>
          <CommentList
            loading={commentLoading}
            comments={commentList}
            onFetchComments={onFetchCommentList}
          />
        </VideoViewer>
      )}
    </ViewTemplate>
  );
}

export default App;

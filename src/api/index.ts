import Axios from "axios";
import env from "../libs/config/env";

const { youtubeApiKey } = env;
const apiServerUrl = "https://www.googleapis.com/youtube/v3";

export const requestVideoById = async (videoId: string) => {
  const params: { [key: string]: any } = {
    key: youtubeApiKey,
    part: "snippet,statistics",
    id: videoId,
    maxResults: 1,
  };

  const { data: body } = await Axios.get(`${apiServerUrl}/videos`, {
    params,
  });

  return body;
};

export const requestCommentById = (videoId: string, nextPageToken?: string) => {
  const params: { [key: string]: any } = {
    key: youtubeApiKey,
    part: "snippet",
    videoId,
    textFormat: "plainText",
    maxResults: 100,
  };

  if (nextPageToken) {
    params["pageToken"] = nextPageToken;
  }

  return Axios.get(`${apiServerUrl}/commentThreads`, {
    params,
  });
};

export const getAllComments = async (videoId: string) => {
  const comments: any[] = [];

  try {
    const { data: initBody } = await requestCommentById(videoId);
    let pageToken = initBody.nextPageToken;

    comments.push(...initBody.items);

    while (true) {
      console.log(pageToken);
      if (!pageToken) {
        break;
      }

      const { data: nextBody } = await requestCommentById(videoId, pageToken);

      comments.push(...nextBody.items);
      pageToken = nextBody.nextPageToken;
    }
  } catch (error) {
    console.error(error);
  }

  return comments;
};

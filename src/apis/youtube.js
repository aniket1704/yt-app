import axios from "axios";

const KEY = "AIzaSyD68-_bGl3ryfk8i6PVRcAZlFziu_WEwIk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

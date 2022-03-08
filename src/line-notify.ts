import axios from "axios";
import qs from 'qs';

const lineNotify = async (message:string, token: string) => {
  const response = await axios({
    method: "post",
    url: "https://notify-api.line.me/api/notify",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
    data: qs.stringify({
      message,
    }),
  });

  return response.data;
};


export default lineNotify;
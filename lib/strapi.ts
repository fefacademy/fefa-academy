import axios from "axios";

const url = process.env.STRAPI_ENDPOINT || "http://localhost:1337/";

async function _fetch(url: string, options: any) {
  const { data } = await axios.get(url, options);
  return data.data;
}

export async function fetchContent(path: string) {
  const response = await _fetch(`${url}${path}`, {
    headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
  });

  return response.map((item: any) => item.attributes);
}

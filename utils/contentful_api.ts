import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.NEXT_PUBLIC_CONTENT_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENT_TOKEN,
});

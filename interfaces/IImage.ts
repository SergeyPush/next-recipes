interface Image {
  width: number;
  height: number;
}

interface Details {
  size: number;
  image: Image;
}

interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

interface Fields {
  title: string;
  file: File;
}

export interface IImage {
  fields: Fields;
}

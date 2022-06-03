export type Track = {
  title: string;
  artist: string;
  album?: string;
  image?: string;
  url: string;
};

export type Artist = {
  name: string;
  image: string;
  url: string;
};

export type Signature = {
  name: string;
  message: string;
  createdAt: string;
};

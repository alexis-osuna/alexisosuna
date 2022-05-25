export type Track = {
  title: string;
  artist: string;
  album: string;
  image: string;
  url: string;
};

export type RecentlyPlayed = {
  tracks: Track[];
};

export type TopTracks = {
  tracks: Track[];
};

import type { NextApiRequest, NextApiResponse } from "next";
import { getCurrentlyPlaying } from "lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getCurrentlyPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ currentlyPlaying: false });
  }

  const currentlyPlaying = await response.json();

  if (currentlyPlaying.item === null) {
    return res.status(200).json({ currentlyPlaying: false });
  }

  const track = {
    title: currentlyPlaying.item.name,
    artist: currentlyPlaying.item.artists
      .map((_artist) => _artist.name)
      .join(", "),
    album: currentlyPlaying.item.album.name,
    image: currentlyPlaying.item.album.images[0].url,
    url: currentlyPlaying.item.external_urls.spotify,
  };

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json(track);
}

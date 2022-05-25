import type { NextApiRequest, NextApiResponse } from "next";
import { getTopTracks } from "lib/spotify";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track) => ({
    title: track.name,
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    album: track.album.name,
    image: track.album.images[0].url,
    url: track.external_urls.spotify,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ tracks });
}
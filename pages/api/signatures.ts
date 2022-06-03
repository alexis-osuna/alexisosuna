import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).send("Unauthorized");
  }

  const { email, name } = session.user;

  if (req.method === "GET") {
    const signature = await prisma.signature.findUnique({
      where: {
        email,
      },
    });

    if (!signature) {
      return res.status(200).json({ signature: false });
    } else {
      return res.status(200).json({
        name: signature.name,
        message: signature.message,
        createdAt: signature.createdAt,
      });
    }
  }

  if (req.method === "POST") {
    const signature = await prisma.signature.create({
      data: {
        name,
        message: (req.body.message || "").slice(0, 500),
        email,
      },
    });

    return res.status(200).json({
      name: signature.name,
      message: signature.message,
      createdAt: signature.createdAt,
    });
  }

  return res.status(405).send("Method Not Allowed");
}

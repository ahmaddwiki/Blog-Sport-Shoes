// import { getAuthSession } from "@/utils/auth";
import { getAuthSession } from "../../../utils/auth";

// import prisma from "@/utils/connect";
import prisma from "../../../utils/connect";

import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        postSlug: postSlug,
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

// CREATE A COMMENT
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json(
      { message: "Not Authenticated!" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const comment = await prisma.comment.create({
      data: {
        desc: body.desc,
        postSlug: body.postSlug,
        userEmail: session.user.email,
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(comment, { status: 200 });
  } catch (err) {
    console.error(err); // Add console error to debug the issue
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

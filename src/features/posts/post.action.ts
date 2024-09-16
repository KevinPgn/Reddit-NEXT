"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { cache } from "react"
/*
// Reddit clone

model Community {
  id String @id @default(cuid())
  name String @unique
  description String?
  imageUrl String?

  creatorId String
  creator User @relation(fields: [creatorId], references: [id])

  posts Post[]
  members Member[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Member {
  id String @id @default(cuid())
  userId String
  user User @relation(fields: [userId], references: [id])

  communityId String
  community Community @relation(fields: [communityId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([userId, communityId])
}

model Post {
  id String @id @default(cuid())
  title String
  content String
  imageUrl String?
  
  communityId String
  community Community @relation(fields: [communityId], references: [id])

  authorId String
  author User @relation(fields: [authorId], references: [id])

  comments Comment[]
  votes Vote[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Comment {
  id String @id @default(cuid())
  content String

  authorId String
  author User @relation(fields: [authorId], references: [id])

  postId String
  post Post @relation(fields: [postId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Vote {
  id String @id @default(cuid())
  type String

  postId String
  post Post @relation(fields: [postId], references: [id])

  authorId String
  author User @relation(fields: [authorId], references: [id])

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([authorId, postId])
}
*/ 

export const getPosts = async () => {
    const posts = await prisma.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            imageUrl: true,
            createdAt: true,
            updatedAt: true,
            author: {
                select: {
                    id: true,
                    name: true,
                    image: true
                }
            },
            community: {
                select: {
                    id: true,
                    name: true,
                }
            },
            _count: {
                select: {
                    comments: true,
                    votes: true
                }
            }
        },
        take: 10,
        orderBy: {
            createdAt: "desc"
        }
    })
    return posts
}

export const voteOnPost = authenticatedAction
  .schema(z.object({
    postId: z.string(),
    voteType: z.enum(["UP", "DOWN"]),
  }))
  .action(async ({parsedInput, ctx}) => {
    const { postId, voteType } = parsedInput
    const { userId } = ctx

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new Error("Post not found");
    }

    const existingVote = await prisma.vote.findUnique({
      where: {
        authorId_postId: {
          authorId: userId,
          postId,
        },
      },
    });

    if (existingVote) {
      if (existingVote.type === voteType) {
        await prisma.vote.delete({
          where: {
            id: existingVote.id,
          },
        });
      } else {
        await prisma.vote.update({
          where: {
            id: existingVote.id,
          },
          data: {
            type: voteType,
          },
        });
      }
    } else {
      await prisma.vote.create({
        data: {
          type: voteType,
          postId,
          authorId: userId,
        },
      });
    }

    revalidatePath("/");
  });

export const getPostVotes = cache(async (postId: string, userId?: string) => {
  const votesCount = await prisma.vote.groupBy({
    by: ["type"],
    where: { postId },
    _count: true,
  });

  const userVote = userId
    ? await prisma.vote.findUnique({
        where: {
          authorId_postId: {
            authorId: userId,
            postId: postId,
          },
        },
        select: { type: true },
      })
    : null;

  const upVotes = votesCount.find((v) => v.type === "UP")?._count ?? 0;
  const downVotes = votesCount.find((v) => v.type === "DOWN")?._count ?? 0;

  return {
    total: upVotes - downVotes,
    userVote: userVote?.type,
  };
});

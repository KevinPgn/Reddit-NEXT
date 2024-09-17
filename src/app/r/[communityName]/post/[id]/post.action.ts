"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
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

export const getPost = async (id: string) => {
    const post = await prisma.post.findUnique({
        where: {
            id
        },
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
            },
            comments: {
                select: {
                    id: true,
                    content: true,
                    author: {
                        select: {
                            id: true,
                            name: true,
                            image: true
                        }
                    }
                },
                take: 10,
                orderBy: {
                    createdAt: "desc"
                }
            }
        },
    }
)
    return post
}

export const createComment = authenticatedAction
    .schema(z.object({
        content: z.string().min(1).max(1000),
        postId: z.string()
    }))
    .action(async ({parsedInput, ctx}) => {
        const {content, postId} = parsedInput
        const {userId} = ctx

        const post = await prisma.post.findUnique({
            where: {
                id: postId
            },
            select: {
                community: {
                    select: {
                        name: true
                    }
                }
            }
        })

        if (!post) {
            return {
                success: false
            }
        }

        if(!userId){
            redirect("/api/auth/signin")
        }

        await prisma.comment.create({
            data: {
                content,
                postId,
                authorId: userId
            }
        })

        revalidatePath(`/r/${post.community.name}/post/${postId}`)
        return {
            success: true
        }
    })  
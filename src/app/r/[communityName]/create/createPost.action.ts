"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
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

export const createPost = authenticatedAction
    .schema(z.object({
        title: z.string().min(1),
        content: z.string().min(1),
        imageUrl: z.string().optional(),
        communityName: z.string(),
    }))
    .action(async ({parsedInput, ctx}) => {
        const {title, content, imageUrl, communityName} = parsedInput
        const {userId} = ctx

        const community = await prisma.community.findUnique({
            where: {
                name: communityName
            }
        })

        if (!community) {
            throw new Error("Community not found")
        }

        const member = await prisma.member.findUnique({
            where: {
                userId_communityId: {
                    userId,
                    communityId: community.id
                }
            }
        })

        if (!member) {
            throw new Error("You are not a member of this community")
        }

        const post = await prisma.post.create({
            data: {
                title,
                content,
                imageUrl,
                communityId: community.id,
                authorId: userId
            }
        })

        return {
            success: true,
            postId: post.id
        }
    })
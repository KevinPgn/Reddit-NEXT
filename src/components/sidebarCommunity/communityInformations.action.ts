"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { revalidatePath } from "next/cache"
import { getSession } from "../utils/CacheSession"
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

export const getCommunityInformations = async (communityName: string) => {
    const session = await getSession()

    const community = await prisma.community.findUnique({
        where: {
            name: communityName
        },
        select: {
            name: true,
            description: true,
            imageUrl: true,
            createdAt: true,
            creatorId: true,
            creator: {
                select: {
                    name: true,
                    image: true
                }
            },
            members: session?.user?.id ? {
                where: {
                    userId: session.user.id
                }
            } : false
        }
    })
    
    return community
}

export const updateCommunityDescription = authenticatedAction
    .schema(z.object({
        communityName: z.string(),
        description: z.string().max(100).optional()
    }))
    .action(async ({parsedInput, ctx:{userId}}) => {
        const {communityName, description} = parsedInput
        
        const community = await prisma.community.findUnique({
            where: {
                name: communityName,
                creatorId: userId
            }
        })

        if(!community) {
            return {
                success: false,
                message: "You are not the creator of this community"
            }
        }

        const updatedCommunity = await prisma.community.update({
            where: {
                name: communityName,
                creatorId: userId
            },
            data: {
                description: description
            }
        })

        revalidatePath(`/r/${communityName}`)
        return {
            success: true,
            updatedCommunity,
            message: "Community description updated"
        }
    })
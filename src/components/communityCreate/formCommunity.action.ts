"use server"
import prisma from "@/lib/prisma"
import {z} from "zod"
import { authenticatedAction } from "@/lib/safe-actions"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
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

// Community should me start with r/

export const createCommunity = authenticatedAction
    .schema(z.object({
        name: z.string()
            .min(4, {message: "Name must be at least 4 characters long (including r/)"})
            .max(23, {message: "Name must be at most 23 characters long (including r/)"})
            .regex(/^r\/[a-zA-Z0-9]+$/, {message: "Name must start with r/ followed by alphanumeric characters"})
    }))
    .action(async ({parsedInput: {name}, ctx:{userId}}) => {
        // Remove the "r/" prefix before saving to the database
        const communityName = name.slice(2);

        const community = await prisma.community.create({
            data: {
                name: communityName,
                creatorId: userId,
                members: {
                    create: {
                        userId: userId,
                    }
                }
            }
        })
        
        revalidatePath(`/r/${community.name}`)
        redirect(`/r/${community.name}`)
    })
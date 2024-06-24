import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {

    const body = await request.json();

    const { title, commentaire, image, authorId } = body.data;

    const slug = title
    slug.replace(/\s/, '-')
    slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

    try {
        const newPost = await prisma.post.create({
            data: {
                title, commentaire, image, slug, authorId
            }
        });
        console.log("newPost",{newPost})
        const updatedUser = await prisma.user.update({
            where : {
                id:authorId
            },
            data:{
                posts:{
                    connect: {
                        id:newPost.id
                    }
                }
            }
        })
        console.log("updatedUser",{updatedUser})
        const getPost= await prisma.user.findUnique({
            where :{
                id:authorId
            },
            include:{
                posts:true
            }
        })
        console.log("getPost",{getPost})
        return NextResponse.json({ newPost });
    } catch (error) { return NextResponse.json(error) }
}
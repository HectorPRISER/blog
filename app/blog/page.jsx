'use client';

import { useSession } from "next-auth/react";
import { useState } from "react";

import ReactTextareaAutosize from 'react-textarea-autosize';

const inputClass = 'w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300';

const FormNewPost = () => {
    const {data:session,status} = useSession({
        required:true,
        onUnauthenticated() {
            throw new Error('Not authenticated !!')
        }
    })
    const [data,setData] = useState({
        title:'',
        commentaire:'',
        image:'',
    })

    const registerPost = async (e) => {
        e.preventDefault()
        data.authorId=session?.user?.id
        const response = await fetch('/api/blog', {
            method:'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({data})
        })
    }
    
    return (
        <main>
            <div className="flex gap-4">
                <a href="myblog" className="text-white text-2xl font-bold">Blog</a>
            </div>
            <div className='gggg'>
                <form className='max-w-4xl mx-auto p-4' method="POST" onSubmit={registerPost}>
                    <div className='mb-4'>
                        <input type='text' className={`${inputClass} text-black`} placeholder='Titre'
                            id='title'
                            name="title"
                            autoComplete="given-name"
                            required
                            value={data.title}
                            onChange={(e) => {setData({...data, title:e.target.value})}}
                        />
                    </div>
                    <div className='mb-4'>
                        <ReactTextareaAutosize minRows={5}
                            id='commentaire'
                            name='commentaire'
                            className={`${inputClass} text-black`}
                            placeholder='Commentaire'
                            autoComplete="given-name"
                            required
                            value={data.commentaire}
                            onChange={(e) => {setData({...data, commentaire:e.target.value})}}
                        />
                    </div>
                    <div>
                        <input type="file"
                        id='image'
                        name='image'
                        autoComplete="given-name"
                        required
                        value={data.image}
                        onChange={(e) => {setData({...data, image:e.target.value})}}
                        />
                    </div>
                    <button type='submit'
                        className='bg-black hover:bg-opacity-25 hover:bg-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400'>Submit</button>
                </form>
            </div>
        </main>
    );
}

export default FormNewPost;

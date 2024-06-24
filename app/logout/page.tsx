"use client"

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LogoutPage = () => {
    const router = useRouter()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const logoutUser = async (e: any) => {
        e.preventDefault()
        signOut({
            redirect: false,
        }).then(() => {
            router.push("/")
        }).catch((error) => {
            throw new Error(error)
        })
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="image/logo2.png"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    & BLOG
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={logoutUser}>
                    <div>
                        VOUS ÊTES SURE ?
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-green-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Log out
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogoutPage;
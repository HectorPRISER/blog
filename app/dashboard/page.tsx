
"use client"

import { useSession } from "next-auth/react"

const DashBoardPage = () => {
    const {data:session,status} = useSession({
        required:true,
        onUnauthenticated() {
            throw new Error('Not authenticated !!')
        }
    })
    return (
        <div className="popo">
            <div className="grid grid-cols-12">
                <div className="col-span-3 bg-white flex flex-col divide-y-2 ">
                    <a className="text-center text-green-700" href="/profil/">Profil</a>
                    <a className="text-center text-green-700" href="/publication/">Publication</a>
                    <div>
                        <button type="button" className="text-lime-700 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                            <a href="./blog">
                            Publier
                            </a>
                        </button>
                    </div>
                </div>
                <div className="col-span-6 bg-balck text-center">
                    <div className="relative h-96 w-full bg-black flex justify-center items-center">
                    </div>
                </div>
                <div className="col-span-3 bg-white text-center">chercher un user</div>
            </div>
        </div>
    );
}

export default DashBoardPage;
"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

//Fonction de connection
const Login=() => {
    const router = useRouter();
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const loginUser = async (e: any) => {
        e.preventDefault()
        signIn('credentials', {
            ...data,
            redirect: false,
        }).then(authenticated => {
            router.push("/dashboard")
        }).catch((error) => {
            throw new Error(error)
        })
    }
    //affichage de la connection
    return (
        <div className="gggg">
            <main className="flex felx-col md:flex-row min-h-screen">
                {/*left Section */}
                <section className="flex-1 flex items-center justify-center">
                    <h1 className="text-6xl text-white font-bold transition-transform transform hover: scale-150 duration-1000 ease-in-out">
                        & Blog
                    </h1>
                </section>
                {/*Right Section */}
                <section className="flex-1 flex items-center justify-center md:item-start">
                    <div className="p-6 md:p-12 rounded-lg shadow-xl w-full max-w-lg bg-white">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2x1 font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your Account
                            </h2>
                        </div>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* Affichage des champs de saisie (email et mot de passe)*/}
                            <form className="space-y-6 action=#" method="POST" onSubmit={loginUser}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id='email'
                                            name="email"
                                            autoComplete="email"
                                            type="email"
                                            required
                                            value={data.email}
                                            onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <div className="text-sm">
                                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Forgot Password?
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id='password'
                                            name="password"
                                            autoComplete="current-password"
                                            type="password"
                                            required
                                            value={data.password}
                                            onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                {/* Button pour se connecter */}
                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Not a member?{' '}
                                <a href='/register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Sign up now
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Login;
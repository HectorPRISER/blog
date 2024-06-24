'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";

//fonction identification

const Register=() => {

    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(prevState => !prevState);
    }
    const router = useRouter()
    const [data,setData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        dateOfBirth:''
    })
    const registerUser = async (e:any) => {
        e.preventDefault()
        const response = await fetch('/api/register', {
            method:'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({data})
        })
    
        const userInfo = await response.json()
        router.push('/login')
    }

    //affichage identification

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
                <section className="flex-1 flex items-center justify-center md:item-start overflow-y-auto p-20">
                    <div className="p-6 md:p-12 rounded-lg shadow-xl w-full max-w-lg bg-white">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2x1 font-bold leading-9 tracking-tight text-gray-900">
                                Sign up to your Account
                            </h2>
                        </div>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* affichage des champ de saisie (nom, prénom,...) */}
                            <form className="space-y-6 action=#" method="POST" onSubmit={registerUser} >
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                        First Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id='firstName'
                                            name="firstName"
                                            autoComplete="given-name"
                                            type="text"
                                            value={data.firstName}
                                            onChange={(e) => {setData({...data, firstName:e.target.value})}}
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id='lastName'
                                            name="lastName"
                                            autoComplete="family-name"
                                            type="text"
                                            value={data.lastName}
                                            onChange={(e)=>{setData({...data, lastName:e.target.value})}}
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
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
                                            onChange={(e)=>{setData({...data, email:e.target.value})}}
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id='password'
                                            name="password"
                                            autoComplete="new-password"
                                            type="password"
                                            required
                                            value={data.password}
                                            onChange={(e)=>{setData({...data, password:e.target.value})}}
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id='confirmPassword'
                                            name="confirmPassword"
                                            autoComplete="new-password"
                                            type="password"
                                            required
                                            value={data.password}
                                            onChange={(e)=>{setData({...data, password:e.target.value})}}
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                        date of birth
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id='dateOfBirth'
                                            name="dateOfBirth"
                                            autoComplete="bday"
                                            type="date"
                                            value={data.dateOfBirth}
                                            onChange={(e)=>{setData({...data, dateOfBirth:e.target.value})}}
                                            className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                {/* agreement checkbox*/}
                                <div className="flex gap-x-4 sm:col-span-2 items-center">
                                    <div className="relative flex-shrink-0 w-6 h-6 mr-2 tarnsition duration-200 ease-in">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 cursor-pointer"
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <label htmlFor="toggle"></label>
                                    </div>
                                    <label className="text-sm leading-6 text-gray-600">
                                        By selecting this, you agree to our
                                        <a href="#" className="font-semibold text-indigo-600"> privacy policy </a>
                                        and
                                        <a href="#" className="font-semibold text-indigo-600"> Terms Conditions</a>
                                    </label>
                                </div>
                                <div>
                                    {/* Button pour créer le client une fois les champs saisie */}
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Already a member? {' '}
                                <a href='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Sign in now
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Register;
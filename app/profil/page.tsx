export default function Publication() {
    return (
        <div className="popo">
            <div className="grid grid-cols-12">
                <div className="col-span-3 bg-white flex flex-col divide-y-2 ">
                    <a className="text-center text-green-700" href="/profil/">Profil</a>
                    <a className="text-center text-green-700" href="/publication/">Publication</a>
                    <div>
                        <button type="button" className="text-lime-700 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Publier</button>
                    </div>
                </div>

                {/* paramettre du profil */}
                <div className="col-span-6 bg-black text-center overflow-y-auto">
                    <div className="relative bg-black flex justify-center">
                        <form className="space-y-6 action=#" method="POST" >
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gr text-white">
                                    first name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id='firstName'
                                        name="firstName"
                                        autoComplete="given-name"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-white">
                                        last name
                                    </label>    
                                </div>
                                <div className="mt-2">
                                <input
                                    id='lastName'
                                    name="lastName"
                                    autoComplete="family-name"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"
    
                                    />


                                </div>

                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                        email adress
                                    </label>    
                                </div>
                                <div className="mt-2">
                                <input
                                    id='email'
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    />


                                </div>

                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                        Password
                                    </label>    
                                </div>
                                <div className="mt-2">
                                <input
                                    id='password'
                                    name="password"
                                    autoComplete="current-password"
                                    type="password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-insert ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:run-insert focus:ring-indigo-600 sm:text-sm sm:leading-6"

                                    />


                                </div>

                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    valider les modifications
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-span-3 bg-white text-center"></div>
            </div>
        </div>
    );
}
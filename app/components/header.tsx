const Header = () => {
    return (
        <div>
            <header className="bg-white dark:bg-gray-900 text-lime-700 p-4 flex justify-between border-b-2">
                <a href="/menu">
                        <img src="/image/logo2.png" alt="" className="h-8 mr-4" />
                    </a>
                <div className="flex items-center">
                    <div className="flex gap-6">
                    <a href="/logout" className="mr-2 bg-pink-200 p-2 rounded-md">Déconnexion</a>
                        <a href="/login" className="mr-2 bg-pink-200 p-2 rounded-md">Connexion</a>
                        <a href="/register" className="ml-2 bg-pink-200 p-2 rounded-md">Inscription</a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;

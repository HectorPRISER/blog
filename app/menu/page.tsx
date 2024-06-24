export default function Menu() {
    return (
      <div className="popo">
        <div className="grid grid-cols-12">
          <div className="col-span-3 bg-white flex flex-col divide-y-2 ">
            <a className="text-center text-green-700" href="/profil/">
              Profil
            </a>
            <a className="text-center text-green-700" href="/publication/">
              Publication
            </a>
            <div>
              <a href="/blog">
                <button
                  type="button"
                  className="text-lime-700 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Publier
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-6 bg-balck text-center">
            <form action="">
              <div className="relative w-full bg-black flex justify-center items-center">
                <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                  <div className="text-lime-700">user</div>
                  <br />
                  <div className="text-black">titre</div>
                  <br />
                  <img src="/image/grizouuu.webp" alt="" />
                  <br />
                  <div className="text-black">text text d text</div>
                </div>
              </div>
            </form>
            <form action="">
              <div className="relative w-full bg-black flex justify-center items-center">
                <div className="bg-white w-96 p-8 rounded-lg shadow-lg">
                  <div className="text-lime-700">grizooouuu</div>
                  <br />
                  <img src="/image/grizouuu.webp" alt="" />
                  <br />
                  <div className="text-black">4-2</div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-3 bg-white text-center">chercher un user</div>
        </div>
      </div>
    );
  }
  
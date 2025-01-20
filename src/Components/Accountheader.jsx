const Accountheader = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-[20%] bg-black/45 backdrop-blur-lg pt-5 ">
        <nav className="p-4 h-full shadow-md border-b border-gray-200 relative">
          <div className="container mx-auto flex justify-between items-center">
            <a
              className="text-3xl font-bold text-blue-700"
              href="/"
              data-discover="true"
            >
              Momentum
            </a>
            <div className="lg:hidden">
              <button className="text-blue-700">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  height="28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex space-x-6 items-center semibold max-lg:flex-col">
              <a
                activeclassname="text-blue-600 font-semibold"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200"
                href="/profile"
                data-discover="true"
              >
                Profile
              </a>
              <a
                activeclassname="text-blue-600 font-semibold"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200 active"
                href="/dashboard"
                data-discover="true"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                activeclassname="text-blue-600 font-semibold"
                className="text-lg text-gray-800 hover:text-blue-600 transition-colors duration-200"
                href="/analytics"
                data-discover="true"
              >
                Analytics
              </a>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-200">
                Log Out
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
export default Accountheader

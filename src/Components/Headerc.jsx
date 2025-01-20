import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="bg-white w-screen h-screen flex flex-col items-center">
      <div className="flex flex-col max-sm:h-[60%] sm:flex-row sm:flex-wrap justify-around items-center shadow-lg w-full h-[30%] bg-blue-yellow-500 p-4 sm:p-0 bg-black/80">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold w-full sm:w-[40%] text-blue-600 text-center sm:text-left mb-4 sm:mb-0">
          Momentum
        </h1>
        <div className="flex flex-col sm:flex-row justify-around items-center w-full sm:w-[30%] gap-2 sm:gap-4 md:gap-10 text-white">
          <Link
            to="/homepage"
            className="text-sm sm:text-lg md:text-xl font-semibold w-full sm:w-24 h-10 sm:h-12 md:h-16 bg-blue-600 rounded-md mb-2 sm:mb-0 flex justify-center items-center"
          >
            <button>Home</button>
          </Link>
          <Link
            to="/login"
            className="text-sm sm:text-lg md:text-xl font-semibold w-full sm:w-24 h-10 sm:h-12 md:h-16 bg-blue-600 rounded-md mb-2 sm:mb-0 flex justify-center items-center"
          >
            <button>login</button>
          </Link>
          <Link
            to="/signup"
            className="text-sm sm:text-lg md:text-xl font-semibold w-full sm:w-24 h-10 sm:h-12 md:h-16 bg-blue-600 rounded-md flex justify-center items-center"
          >
            <button>SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Header

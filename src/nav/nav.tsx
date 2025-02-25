
function Nav() {
  return (
    <>
      <nav className="border-b-stone-100 border-b-2 fixed top-0 left-0 right-0 bg-green-700 h-16 shadow-md w-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-white text-xl font-bold font-mono">
            GolfStar
          </span>
          <img src="golfstarr.png" alt="GolfStar" className="h-8 -ml-1.5 -mt-1.5 mix-blend-multiply" />
        </div>
        <figure className="flex gap-1.5 move-left-to-right text-white">
          <img
            src="/taylor-removebg-preview.png"
            alt="Taylormade"
            className="h-8"
          />
          <img
            src="/titleist-removebg-preview.png"
            alt="Titlist"
            className="h-8"
          />
          <img src="/ping-removebg-preview.png" alt="Ping" className="h-8" />
          <img src="/cobra-removebg-preview.png" alt="Cobra" className="h-8" />
          <img src="/wil-removebg-preview.png" alt="Wilson" className="h-8" />
          <img src="/mizuma-removebg-preview.png" alt="Miz" className="h-8" />
          <img
            src="/clevland-removebg-preview.png"
            alt="clevland"
            className="h-8"
          />
          <img
            src="/callaway-removebg-preview.png"
            alt="Callaway"
            className="h-8"
          />
          <img src="/nike-removebg-preview.png" alt="nike" className="h-8" />
          <img
            src="/srixon-removebg-preview.png"
            alt="srixon"
            className="h-8"
          />
        </figure>

        <ul className="text-white flex space-x-6 cursor-pointer">
          <li className="hover:text-gray-300 transition duration-300 font-mono">
            Home
          </li>
          <li className="hover:text-gray-300 transition duration-300 font-mono">
            About
          </li>
          <li className="hover:text-gray-300 transition duration-300 font-mono">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;



function Nav() {
  return (
    <>
      <nav className="border-b-stone-100 border-b-2 fixed top-0 left-0 right-0 bg-green-700 h-16 shadow-md w-full flex items-center justify-between px-4">
        <span className="text-white text-xl font-bold font-mono">GolfStar</span>
        <figure className="flex gap-1.5 move-left-to-right text-white">
          <p>Taylormade</p>
          <p>Titlist</p>
          <p>Ping</p>
          <p>Cobra</p>
          <p>Wilson</p>
          <p>Miz</p>
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

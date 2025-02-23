
const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-6 mt-8">
      <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
        {/* Company Info */}
        <div>
          <h4 className="font-mono text-lg font-semibold">Golf Star</h4>
          <p className="text-sm">Your go-to shop for premium golf equipment.</p>
        </div>

        {/* Quick Links */}
        <div className="pr-20">
          <h5 className=" text-md font-semibold">Quick Links</h5>
          <ul className="text-sm ">
            <li>
              <a href="#" className="hover:text-green-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="font-mono text-md font-semibold">Contact</h5>
          <ul className="text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:info@golfstar.com"
                className="hover:text-green-500 transition-colors"
              >
                info@golfstar.com
              </a>
            </li>
            <li>Phone: +1 (800) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="pl-5 text-center mt-6 text-sm">
        <p>© 2025 Golf Star. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

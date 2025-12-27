// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Indocs Media</h2>
          <p className="text-sm text-gray-600">
            Empowering Digital Brilliance with strategies, stories, and stunning visuals.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">What we can do?</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="text-black">Advertising</li>
            <li className="text-black">Social Media AIO</li>
            <li className="text-black">Video Editing</li>
            <li className="text-black">Production</li>
            <li className="text-black">Simple but engaging website</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/about" className="hover:text-black">About</a></li>
            <li><a href="/services" className="hover:text-black">Services</a></li>
            <li><a href="/contact" className="hover:text-black">Contact</a></li>
            <li><a href="/portfolio" className="hover:text-black">Portfolio</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <a href="mailto:indocsmedia@gmail.com" className="text-sm text-gray-600 mb-2">Email: indocsmedia@gmail.com</a>
          <p className="text-sm text-gray-600 mb-2">
            Phones: <br />
            <a href="tel:9310895844" className="hover:text-black block">9310895844</a>
            <a href="tel:9910892766" className="hover:text-black block">9910892766</a>
            <a href="tel:7972929641" className="hover:text-black block">7972929641</a>
          </p>
          <div className="flex space-x-4 mt-3 text-xl">
            <a href="https://wa.me/9999513446" className="text-gray-600 hover:text-black" target="_blank">
              <i className="fab fa-whatsapp" />
            </a>
            <a href="https://www.instagram.com/indocsmedia?utm_source=qr&igsh=MXpxd2FyajNjcnBp" className="text-gray-600 hover:text-black" target="_blank">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.linkedin.com/in/indocs-media-b7029a32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="text-gray-600 hover:text-black" target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        <p>© 2024 Teenera Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}

import { Link } from "@remix-run/react";
export default function HeroSection() {
  return (
    <div className="relative h-screen bg-black ">
      <img
        src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
        alt="Background"
        className="absolute inset-0 opacity-60 w-full h-full object-cover"
        width="1920"
        height="1080"
        style={{
          aspectRatio: "1920 / 1080",
          objectFit: "cover",
        }}
      />
      <header className="absolute top-0 left-0 right-0 px-4 py-6 md:px-6">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link className="text-2xl font-bold text-white" to="#">
            BrandName
          </Link>
          <div className="space-x-4">
            <Link className="text-lg text-white hover:underline" to="#">
              About
            </Link>
            <Link className="text-lg text-white hover:underline" to="#">
              Services
            </Link>
            <Link className="text-lg text-white hover:underline" to="#">
              Contact
            </Link>
          </div>
        </nav>
      </header>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-5xl font-bold text-white md:text-7xl">
          Welcome to Our Website
        </h1>
        <p className="text-xl text-white md:text-2xl">
          We provide high quality services that you will love.
        </p>
        <Link
          className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white hover:bg-gray-200"
          to="#"
        >
          Explore Services
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import Button from "../components/Button";

function Hero() {
  return (
    <section className="bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Win Every Gig{" "}
          <span className="text-primaryBlue">with AI</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-8">
          Optimize your freelancer profile, improve gig SEO, and generate
          winning proposals with AI-powered tools designed to help you
          attract more clients and grow your freelancing career.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link to="/dashboard">
            <Link to="/dashboard">
  <Button className="w-full sm:w-auto px-5 py-2">
    Get Started Free
  </Button>
</Link>
          </Link>

          <button
  className="
  w-full sm:w-auto px-5 py-2 rounded-lg font-medium
  border-2 border-primaryBlue
  text-primaryBlue bg-white
  hover:bg-primaryBlue hover:text-white
  transition-all duration-300
  shadow-sm hover:shadow-md
  "
>
  Watch Demo
</button>

        </div>

      </div>
    </section>
  );
}

export default Hero;
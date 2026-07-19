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
          Optimize your freelancer profile, improve gig SEO, and create
          winning proposals with AI-powered tools built to help you attract
          more clients and grow your freelancing career.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link to="/login">
            <Button className="px-6 py-3">
              Get Started Free
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;
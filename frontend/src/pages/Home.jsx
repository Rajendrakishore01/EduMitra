import { Link } from "react-router-dom";
import { BookOpen, Users, GraduationCap } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-4">
              SDG 4 - Quality Education
            </div>

            <h1 className="text-6xl font-bold leading-tight">
              Bridging Educational Gaps Through
              <span className="text-blue-600"> Free Learning Resources</span>
            </h1>

            <p className="text-gray-600 text-lg mt-6">
              EduBridge helps students access quality notes, previous year papers,
              learning materials and educational opportunities — all in one place.
            </p>

            <div className="flex gap-4 mt-8">

              <Link
                to="/resources"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg"
              >
                Explore Resources
              </Link>

              <Link
                to="/opportunities"
                className="border border-gray-300 hover:bg-white px-8 py-3 rounded-xl font-semibold"
              >
                Opportunities
              </Link>

            </div>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students Learning"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <BookOpen
              size={40}
              className="mx-auto text-blue-600 mb-4"
            />

            <h2 className="text-4xl font-bold">500+</h2>

            <p className="text-gray-500 mt-2">
              Learning Resources
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <Users
              size={40}
              className="mx-auto text-green-600 mb-4"
            />

            <h2 className="text-4xl font-bold">1200+</h2>

            <p className="text-gray-500 mt-2">
              Students Benefited
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <GraduationCap
              size={40}
              className="mx-auto text-purple-600 mb-4"
            />

            <h2 className="text-4xl font-bold">50+</h2>

            <p className="text-gray-500 mt-2">
              Educational Partners
            </p>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose EduBridge?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">
               Free Study Materials
            </h3>

            <p className="text-gray-600">
              Access notes, assignments, question papers and educational resources at no cost.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">
              Career Opportunities
            </h3>

            <p className="text-gray-600">
              Discover internships, scholarships, hackathons and student programs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">
               SDG 4 Impact
            </h3>

            <p className="text-gray-600">
              Supporting equal access to quality education and lifelong learning.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;
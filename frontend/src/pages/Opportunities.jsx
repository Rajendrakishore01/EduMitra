import { Briefcase, Award, Rocket, Globe } from "lucide-react";

const opportunities = [
  {
    title: "Google Summer of Code",
    type: "Open Source",
    icon: <Rocket size={40} />,
    color: "from-blue-500 to-cyan-500",
    description:
      "Work with global open-source organizations and get mentorship.",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    type: "Leadership",
    icon: <Globe size={40} />,
    color: "from-purple-500 to-indigo-500",
    description:
      "Become a student leader and organize technical events.",
  },
  {
    title: "Internshala Internships",
    type: "Internship",
    icon: <Briefcase size={40} />,
    color: "from-green-500 to-emerald-500",
    description:
      "Discover internships in Web Development, AI, Data Science and more.",
  },
  {
    title: "National Hackathons",
    type: "Competition",
    icon: <Award size={40} />,
    color: "from-orange-500 to-red-500",
    description:
      "Participate in coding competitions and win exciting prizes.",
  },
];

function Opportunities() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8">

      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-3">
          Opportunities 
        </h1>

        <p className="text-gray-600 text-lg">
          Explore internships, scholarships, leadership programs and hackathons.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {opportunities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >

            <div
              className={`h-40 bg-gradient-to-r ${item.color} flex flex-col justify-center items-center text-white`}
            >
              {item.icon}

              <span className="mt-3 font-semibold text-lg">
                {item.type}
              </span>
            </div>

            <div className="p-6">

              <h2 className="text-2xl font-bold mb-3">
                {item.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {item.description}
              </p>

              <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-semibold">
                Apply Now
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Featured Section */}
      <div className="mt-12 bg-white rounded-3xl shadow-lg p-8">

        <h2 className="text-3xl font-bold mb-4">
          Featured Student Benefits 
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-blue-50 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">
              Scholarships
            </h3>
            <p className="text-gray-600">
              Access financial aid opportunities from leading organizations.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">
              Certifications
            </h3>
            <p className="text-gray-600">
              Earn industry-recognized certificates to boost your resume.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-2">
              Career Growth
            </h3>
            <p className="text-gray-600">
              Build skills and connect with professionals worldwide.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Opportunities;
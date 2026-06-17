import { Users, Download, BookOpen, TrendingUp } from "lucide-react";

function Dashboard() {
  const user = localStorage.getItem("user");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8">

      {/* Welcome Section */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

        <h1 className="text-4xl font-bold">
          Welcome Back, {user || "Student"} 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Continue your learning journey and explore educational opportunities.
        </p>

      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <BookOpen className="text-blue-600 mb-4" size={36} />
          <h2 className="text-3xl font-bold">120</h2>
          <p className="text-gray-500">Resources Uploaded</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Download className="text-green-600 mb-4" size={36} />
          <h2 className="text-3xl font-bold">580</h2>
          <p className="text-gray-500">Downloads</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <Users className="text-purple-600 mb-4" size={36} />
          <h2 className="text-3xl font-bold">1,240</h2>
          <p className="text-gray-500">Active Students</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <TrendingUp className="text-orange-500 mb-4" size={36} />
          <h2 className="text-3xl font-bold">89%</h2>
          <p className="text-gray-500">Engagement Rate</p>
        </div>

      </div>

      {/* Progress Section */}
      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Learning Progress
          </h2>

          <div className="space-y-6">

            <div>
              <div className="flex justify-between mb-2">
                <span>Computer Networks</span>
                <span>75%</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-blue-600 h-3 rounded-full w-3/4"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>DBMS</span>
                <span>60%</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-green-600 h-3 rounded-full w-3/5"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Operating Systems</span>
                <span>90%</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-purple-600 h-3 rounded-full w-[90%]"></div>
              </div>
            </div>

          </div>

        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-semibold">
                Uploaded DBMS Notes
              </p>
              <p className="text-gray-500 text-sm">
                2 hours ago
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-semibold">
                Downloaded Computer Networks PDF
              </p>
              <p className="text-gray-500 text-sm">
                Yesterday
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-semibold">
                Applied for Google Summer of Code
              </p>
              <p className="text-gray-500 text-sm">
                3 days ago
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
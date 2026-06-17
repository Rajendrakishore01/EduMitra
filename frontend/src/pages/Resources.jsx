import { Search, Download, BookOpen } from "lucide-react";

const resources = [
  {
    title: "DBMS Notes",
    subject: "Computer Science",
    type: "PDF",
  },
  {
    title: "Operating System",
    subject: "Computer Science",
    type: "Notes",
  },
  {
    title: "Computer Networks",
    subject: "Computer Science",
    type: "PDF",
  },
  {
    title: "DAA Notes",
    subject: "Computer Science",
    type: "Notes",
  },
  {
    title: "Software Engineering",
    subject: "Computer Science",
    type: "PDF",
  },
  {
    title: "Compiler Design",
    subject: "Computer Science",
    type: "Notes",
  },
];

function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-3">
          Study Resources 
        </h1>

        <p className="text-gray-600 text-lg">
          Access quality learning materials for your academic growth.
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 mb-10">

        <Search className="text-gray-400" />

        <input
          type="text"
          placeholder="Search notes, PDFs, assignments..."
          className="w-full outline-none"
        />

      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-10">

        <button className="bg-blue-600 text-white px-5 py-2 rounded-full">
          All
        </button>

        <button className="bg-white px-5 py-2 rounded-full shadow">
          Notes
        </button>

        <button className="bg-white px-5 py-2 rounded-full shadow">
          PDFs
        </button>

        <button className="bg-white px-5 py-2 rounded-full shadow">
          Assignments
        </button>

        <button className="bg-white px-5 py-2 rounded-full shadow">
          PYQs
        </button>

      </div>

      {/* Resource Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >

            <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">

              <BookOpen size={60} className="text-white" />

            </div>

            <div className="p-6">

              <div className="flex justify-between items-center mb-3">

                <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                  {item.type}
                </span>

                <span className="text-gray-400 text-sm">
                  Free
                </span>

              </div>

              <h2 className="text-xl font-bold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-500 mb-4">
                {item.subject}
              </p>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl flex items-center justify-center gap-2">

                <Download size={18} />
                Download Resource

              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Resources;
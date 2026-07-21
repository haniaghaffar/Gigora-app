import { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import Toast from "../components/Toast";

function GigSEO() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const [error, setError] = useState("");

  const TITLE_LIMIT = 80;

  const handleOptimize = () => {
    if (!title.trim() || !description.trim()) {
      setError("Please enter both title and description.");
      return;
    }

    if (title.length > TITLE_LIMIT) {
      setError("Title exceeds 80 characters.");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setResult({
        title:
          "Professional React Developer | Modern Responsive Websites",

        description:
          "I build fast, responsive and SEO optimized React websites using Tailwind CSS, JavaScript and modern UI practices.",

        keywords: [
          "React",
          "JavaScript",
          "Tailwind CSS",
          "Frontend",
          "Responsive Design",
        ],
      });

      setLoading(false);

      showToast("Gig optimized successfully!", "success");
    }, 2000);
  };


  const showToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
  };


  const copyText = async (text) => {
    await navigator.clipboard.writeText(text);

    showToast("Copied successfully!", "success");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-6 md:p-8">

      <div className="max-w-6xl mx-auto space-y-8">


        {/* Header */}

        <div className="text-center md:text-left">

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            🚀 Gig SEO Optimizer
          </h1>


          <p className="mt-3 text-lg text-gray-600 max-w-3xl">
            Improve your Fiverr & Upwork gig using AI-powered SEO suggestions,
            optimized titles, descriptions, and keyword recommendations.
          </p>

        </div>



        {/* Input Form */}

        <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8">


          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Gig Information
          </h2>



          <div className="mb-6">

  <label className="block text-gray-700 font-semibold mb-2">
    Gig Title
  </label>

  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="e.g. I will build a responsive React website"
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 !text-black placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200"
  />

  <div className="flex justify-between mt-2">

    <span className="text-sm text-gray-500">
      Recommended: 60–80 characters
    </span>

    <span
      className={`text-sm font-semibold ${
        title.length > TITLE_LIMIT
          ? "text-red-500"
          : "text-blue-600"
      }`}
    >
      {title.length}/{TITLE_LIMIT}
    </span>

  </div>

</div>
                    {/* Description */}

         <div>
  <label className="block text-gray-700 font-semibold mb-2">
    Gig Description
  </label>

  <textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Describe your services, skills and experience..."
    rows="8"
    className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200"
  />

  <p className="text-sm text-gray-500 mt-2">
    Include your skills, technologies, experience and unique selling points.
  </p>
</div>



          {/* Error */}

          {error && (

            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3">

              <p className="text-red-600 font-medium">
                {error}
              </p>

            </div>

          )}



          {/* Button */}

          <div className="mt-8">

            <Button

              onClick={handleOptimize}

              disabled={loading}

              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"

            >

              {loading ? "Optimizing..." : "✨ Optimize Gig"}

            </Button>

          </div>


        </Card>




        {/* Loading Skeleton */}

        {loading && (

          <div className="space-y-6">

            <Skeleton className="h-32 rounded-2xl"/>

            <Skeleton className="h-72 rounded-2xl"/>

          </div>

        )}




        {/* Results */}

        {!loading && result && (

          <div className="space-y-6">



            {/* SEO Score */}

            <Card className="bg-white border rounded-3xl shadow-xl p-8">


              <h2 className="text-2xl font-bold mb-8">
                📈 SEO Score
              </h2>


              {[
                {
                  label:"Title",
                  score:90,
                  color:"bg-blue-600"
                },
                {
                  label:"Tags",
                  score:85,
                  color:"bg-green-600"
                },
                {
                  label:"Description",
                  score:92,
                  color:"bg-purple-600"
                }

              ].map((item)=>(


                <div key={item.label} className="mb-6">


                  <div className="flex justify-between mb-2">

                    <span className="font-semibold text-gray-700">
                      {item.label}
                    </span>


                    <span className="font-bold text-gray-900">
                      {item.score}%
                    </span>

                  </div>



                  <div className="w-full h-3 bg-gray-200 rounded-full">

                    <div

                      className={`${item.color} h-3 rounded-full`}

                      style={{
                        width:`${item.score}%`
                      }}

                    />

                  </div>


                </div>


              ))}


            </Card>




            {/* Optimized Title */}

            <Card className="bg-white border rounded-3xl shadow-xl p-8">


              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                  ✨ Optimized Title
                </h2>


                <Button

                  onClick={()=>copyText(result.title)}

                  className="bg-blue-600 text-white px-5 py-2 rounded-xl"

                >

                  Copy

                </Button>


              </div>



              <p className="mt-6 text-lg text-gray-700">
                {result.title}
              </p>


            </Card>





            {/* Description */}

            <Card className="bg-white border rounded-3xl shadow-xl p-8">


              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                  📝 Optimized Description
                </h2>


                <Button

                  onClick={()=>copyText(result.description)}

                  className="bg-blue-600 text-white px-5 py-2 rounded-xl"

                >

                  Copy

                </Button>


              </div>



              <p className="mt-6 text-gray-700 leading-8">

                {result.description}

              </p>


            </Card>





            {/* Keywords */}

            <Card className="bg-white border rounded-3xl shadow-xl p-8">


              <div className="flex justify-between items-center">


                <h2 className="text-2xl font-bold">
                  🏷 SEO Keywords
                </h2>



                <Button

                  onClick={() =>
                    copyText(result.keywords.join(", "))
                  }

                  className="bg-blue-600 text-white px-5 py-2 rounded-xl"

                >

                  Copy

                </Button>



              </div>




              <div className="flex flex-wrap gap-3 mt-8">


                {result.keywords.map((tag,index)=>(


                  <span

                    key={index}

                    className="px-5 py-2 rounded-full bg-green-100 text-green-700 font-medium"

                  >

                    {tag}

                  </span>


                ))}


              </div>


            </Card>





            {/* Regenerate */}

            <div className="flex justify-end">


              <Button

                onClick={handleOptimize}

                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl"

              >

                🔄 Regenerate

              </Button>


            </div>


          </div>

        )}



      </div>




      {/* Toast */}

      <Toast

        message={toastMessage}

        type={toastType}

        onClose={()=>setToastMessage("")}

      />


    </div>

  );

}


export default GigSEO;
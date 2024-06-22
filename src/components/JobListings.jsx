import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const ApiUrl = isHome
        ? "/api/jobs?_limit=3"
        : "/api/jobs";
      try {
        const res = await fetch(ApiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // const jobListing = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className=" bg-gray-100 pb-20 pt-14 ">
      <div className="container-xl px-4 py-7 p-b-10 lg:container m-auto text-center justify-center">
        <span
          className="bg-clip-text pb-10 text-6xl text-center text-transparent 
                 bg-gradient-to-l from-cyan-400  to-indigo-800 via-pink-500"
        >
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </span>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;

//   {/* <!-- Job Listing 2 --> */}
//   <div className="bg-white rounded-xl shadow-md relative">
//     <div className="p-4">
//       <div className="mb-6">
//         <div className="text-gray-600 my-2">Remote</div>
//         <h3 className="text-xl font-bold">
//           Front-End Engineer (React)
//         </h3>
//       </div>

//       <div className="mb-5">
//         Join our team as a Front-End Developer in sunny Miami, FL. We
//         are looking for a motivated individual with a passion...
//       </div>

//       <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

//       <div className="border border-gray-100 mb-5"></div>

//       <div className="flex flex-col lg:flex-row justify-between mb-4">
//         <div className="text-orange-700 mb-3">
//           <i className="fa-solid fa-location-dot text-lg"></i>
//           Miami, FL
//         </div>
//         <a
//           href="job.html"
//           className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
//         >
//           Read More
//         </a>
//       </div>
//     </div>
//   </div>

//   <div className="bg-white rounded-xl shadow-md relative">
//     <div className="p-4">
//       <div className="mb-6">
//         <div className="text-gray-600 my-2">Remote</div>
//         <h3 className="text-xl font-bold">React.js Developer</h3>
//       </div>

//       <div className="mb-5">
//         Are you passionate about front-end development? Join our team in
//         vibrant Brooklyn, NY, and work on exciting projects that make a
//         difference...
//       </div>

//       <h3 className="text-indigo-500 mb-2">$70K - $80K / Year</h3>

//       <div className="border border-gray-100 mb-5"></div>

//       <div className="flex flex-col lg:flex-row justify-between mb-4">
//         <div className="text-orange-700 mb-3">
//           <i className="fa-solid fa-location-dot text-lg"></i>
//           Brooklyn, NY
//         </div>
//         <a
//           href="job.html"
//           className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
//         >
//           Read More
//         </a>
//       </div>
//     </div>
//   </div>

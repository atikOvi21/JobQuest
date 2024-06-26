import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { toast } from "react-toastify";
import MainLayout from "./layouts/MainLayout";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import HomePage from "./pages/HomePage";
import JobPage, { jobLoader } from "./pages/JobPage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  /// Edit Job

  const updateJobSubmit = async (updatedJob) => {
    console.log(updatedJob);

    const res = await fetch(`/api/jobs/${updatedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    });
  };

  /// Delete Job
  const deleteJob = async (id) => {
    console.log(id);

    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      toast.error("Failed to delete the job");
      console.error("Failed to delete the job", res.statusText);
      return;
    }

    console.log("Job deleted successfully");
  };

  /// Add Job
  const addJob = async (newJob) => {
    console.log(newJob);
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });

    if (!res.ok) {
      console.error("Failed to add the job", res.statusText);
      return;
    }

    console.log("Job added successfully");
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/add-job" element={<AddJobPage AddJobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJobSubmit} />}
          loader={jobLoader}
        />
        <Route
          path="jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;

// return (
//   <>
//     <Navbar />
//     <Hero subtitle="This is subtitle" />
//     <HomeCards />
//     <JobListings />

//     <ViewAllJobs />

//     {/* <script src="js/main.js"></script> */}
//   </>
// );
// };

// const App = () => {
//   const names = ["John", "Jane", "Doe", "Smith", "Mary"];
//   const loggedIn = false;
//   const styles = {
//     color: "blue",
//     backgroundColor: "lightyellow",
//     fontSize: "20px",
//   };
//   const x = 1;
//   const y = 2;

//   return (
//     <>
//       <div
//         classNameName="text-blue-900 m-14 p-4 text-5xl hover:text-7xl bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300 text-center
//     hover:font-mono font:font-serif border hover:rounded-2xl hover:shadow-lg hover:scale-x-105 "
//       >
//         Hello World!
//       </div>

//       <ul style={styles}>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}

//         <p>Sum of {x} and {y} is {x+y}</p>
//       </ul>

//       {loggedIn && <p>Welcome Onboard!</p>}
//     </>
//   );
// };

// export default App;

// // every react component returns jsx
// // jsx is a syntax extension for javascript that allows you to write html elements in javascript
// // jsx makes it easier to write and add HTML in React
// // jsx is not a necessity in react, but it makes your code more readable
// // jsx is faster than regular javascript because it performs optimization while compiling code
// // jsx is also type-safe and most errors can be caught during compilation
// // jsx is also easy to use with react components
// // jsx allows you to use expressions and functions in your html
// //if html were a programming language that would be called jsx

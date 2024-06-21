import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout"; 
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />
  </Route>  
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

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

export default App;

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

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import JobDetails from './components/Home/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import jobDataLoader from './jobDataLoader';
import ErrorPage from './error-page';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/featured-job.json')
      },
      {
        path: 'job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch('featured-job.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: jobDataLoader,
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

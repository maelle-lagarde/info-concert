import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import ErrorPage from './error-page';
import ArtistPage from './pages/ArtistPage';
import LocationPage from './pages/LocationPage';
import EventPage from './pages/EventPage';
import './index.css';
import './style.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Footer />
      </>
    ), 
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/artistes",
        element: <ArtistPage />,
      },
      {
        path: "/lieux",
        element: <LocationPage />,
      },
      {
        path: "/concerts",
        element: <EventPage />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
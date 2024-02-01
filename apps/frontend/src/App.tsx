import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ExampleRoute from "./routes/ExampleRoute.tsx";
import {FeedBackForm} from "./components/FeedBackForm.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div />,
      element: <Root />,
      children: [
        {
          path: "/example",
          element: <ExampleRoute />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  function Root() {
    return (
      <div className="w-full grid justify-items-center">
          <div className={"flex flex-col gap-5"}>
              <FeedBackForm/>
          </div>
        <Outlet />
      </div>
    );
  }
}

export default App;

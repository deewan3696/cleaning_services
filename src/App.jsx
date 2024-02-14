
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>
    },
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}


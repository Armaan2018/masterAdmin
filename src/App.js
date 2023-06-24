import { RouterProvider,createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About";
import MainLayout from "./Layout/MainLayout";
import SidebarLayout from "./Layout/SidebarLayout";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<MainLayout></MainLayout>,children:[
      {
      path:"/about",
      element:<About/>
      }
      ]
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>
<SidebarLayout></SidebarLayout>
      </RouterProvider>
       heelo world
    </div>
  );
}

export default App;

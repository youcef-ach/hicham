import { Layout } from "antd";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./sections/Landing";

const myRouter = createBrowserRouter([
  {
    path: "",
    Component: Landing,
  },
]);

function App() {
  return (
    <Layout style={{backgroundColor:"transparent",position:"relative"}}>
      <Header />
      <RouterProvider router={myRouter} />
    </Layout>
  );
}

export default App;
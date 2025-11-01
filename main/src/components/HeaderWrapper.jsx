import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";

function HeaderWrapper() {
  const { unstable_pattern } = useLoaderData();
  const redirect = useNavigate();

  useEffect(() => {
    if (unstable_pattern == "/") {
      return redirect("/home");
    }
  }, []);

  return (
    <>
      <Header />
      <Layout.Content style={{ paddingTop: 5 }}>
        <Outlet />
      </Layout.Content>
      <Footer />
    </>
  );
}

export default HeaderWrapper;
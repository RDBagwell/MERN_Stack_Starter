import { Outlet } from "react-router-dom";
import TopNavComponent from "../components/TopNavComponent";

function Layout() {
  return (
    <>
        <TopNavComponent />
        <Outlet />
    </>
  )
}

export default Layout
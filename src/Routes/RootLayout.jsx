import MainHeader from "../Components/MainHeader";
import { Outlet } from "react-router-dom"; //this is a placeholder of the nested compoenets that are displayed at main.jsx

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;

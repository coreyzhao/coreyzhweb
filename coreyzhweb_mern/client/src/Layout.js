import Header from "./Header";
import { Outlet } from "react-router-dom";
import Bottom from "./Bottom";


export default function Layout() {
  return (
    <main>
      
      <Header />
      <Outlet />
      <Bottom />
      
    </main>
  );
}
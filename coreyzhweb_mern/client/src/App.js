import Post from "./Post";
import Header from "./Header";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Bottom from "./Bottom"
import StreetwearPage from "./pages/StreetwearPage";
import ForumPage from "./pages/ForumPage";
import { UserContextProvider } from "./UserContext";
import CreatePage from "./pages/CreatePage";
import KnittedwearPage from "./pages/KnittedwearPage";
import OuterwearPage from "./pages/OuterwearPage";
import SmartcasualPage from "./pages/SmartcasualPage";




function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path ="/" element={<Layout/>}>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={ <LoginPage /> } />
          <Route path={"/signup"} element={ <SignUpPage />} />
          <Route path={"/streetwear"} element={ <StreetwearPage />} />
          <Route path={"/knittedwear"} element={ <KnittedwearPage />} />
          <Route path={"/smartcasual"} element={ <SmartcasualPage />} />
          <Route path={"/outerwear"} element={ <OuterwearPage />} />
          <Route path={"/ForumPage"} element={ <ForumPage />} />
          <Route path={"/create"} element={ <CreatePage />} />
        </Route>
      </Routes>
    </UserContextProvider>
    
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/home.jsx";
import { NotFound } from "./pages/NotFound/notFound.jsx";
import { Signup } from "./pages/Signup/signup.jsx";
import { Login } from "./pages/Login/login.jsx";
import { Profile } from "./pages/Profile/profile.jsx";
import { AuthContextComponent } from "./config/context/authContext.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute/protectedRoute.jsx";
import { Navbar } from "./components/Navbar/navbar.jsx";
import { CreateTab } from "./pages/CreateTab/createtab.jsx";
import { TabDetails } from "./pages/TabDetails/tabDetails.jsx";
import { useNavigate } from "react-router-dom";
import { Redirect } from "./pages/Redirect/index.jsx";
import { motion } from "framer-motion";
import { LoadingTeste } from "./pages/teste/teste.jsx";
import { Footer } from "./components/Footer/footer.jsx";
import { UserInfoContextComponent } from "./config/context/userInfoHook.jsx";
import { CategoryPage } from "./pages/Category/categoryPage.jsx";
import { Feed } from "./pages/Feed/feed.jsx";

function App() {
  //const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="App bg-slate-100 dark:bg-zinc-700">
        <UserInfoContextComponent>
          <AuthContextComponent>
            <Navbar />
            <div className=" pt-20  ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/:category/:page" element={<CategoryPage />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tab/:tabId" element={<TabDetails />} />
                <Route path="/teste" element={<LoadingTeste />} />
                <Route
                  path="/create/tab"
                  element={
                    <ProtectedRoute>
                      <CreateTab />
                    </ProtectedRoute>
                  }
                />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route
                  path="/profile/:username/user"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route path="/redirect/:userId" element={<Redirect />} />
              </Routes>
              <Footer />
            </div>
          </AuthContextComponent>
        </UserInfoContextComponent>
      </div>
    </motion.div>
  );
}

export default App;

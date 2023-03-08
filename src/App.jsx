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

function App() {
  //const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="App bg-slate-100 dark:bg-zinc-700 h-full w-full ">
        <AuthContextComponent>
          <Navbar />
          <div
            style={{ maxHeight: "800px" }}
            className="overflow-auto  pt-20 w-full scrollbar-thin dark:scrollbar-thumb-emerald-600 scrollbar-thumb-emerald-500 scrollbar-track-gray-200 dark:scrollbar-track-zinc-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
          >
            <Routes>
              <Route path="/" element={<Home />} />
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
          </div>
        </AuthContextComponent>
      </div>
    </motion.div>
  );
}

export default App;

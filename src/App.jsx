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

function App() {
  return (
    <div className="App bg-slate-100 dark:bg-zinc-700 h-full w-full ">
      <AuthContextComponent>
        <div className="">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
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
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;

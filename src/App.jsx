import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/home.jsx";
import { NotFound } from "./pages/NotFound/notFound.jsx";
import { Signup } from "./pages/Signup/signup.jsx";
import { Login } from "./pages/Login/login.jsx";
import { Profile } from "./pages/Profile/profile.jsx";
import { AuthContextComponent } from "./config/context/authContext.jsx";
import { ProtectedRoute } from "./pages/ProtectedRoute/protectedRoute.jsx";

function App() {
  return (
    <div className="App">
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={<Profile />} />}
          />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;

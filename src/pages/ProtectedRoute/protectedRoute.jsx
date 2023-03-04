import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const parsedUser = JSON.parse(loggedInUser || '""');

  useEffect(() => {
    if (!parsedUser.token) {
      navigate("/login");
    }
  }, []);

  return <>{children}</>;
}

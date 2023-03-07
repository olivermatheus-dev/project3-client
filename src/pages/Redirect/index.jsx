import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Redirect() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/profile/${params.userId}/user`);
  }, []);
  return <div className="w-screen bg-zinc-800">Oi, tchau!</div>;
}

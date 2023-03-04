import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1 className="mb-10">Home</h1>
      <Link to="/login" className="bg-slate-500 p-2 px-5 rounded-full">
        <button>Login</button>
      </Link>
      <Link to="/sign-up" className="bg-slate-500 p-2 px-5 rounded-full">
        <button>Sign up</button>
      </Link>
    </>
  );
}

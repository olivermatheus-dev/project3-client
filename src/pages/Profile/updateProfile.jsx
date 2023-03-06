import { useState, useEffect } from "react";
import { api } from "../../config/api/api.jsx";

export function UpdateProfile({ setUpdated, updated }) {
  const storedUser = localStorage.getItem("loggedInUser");
  const [userForm, setUserForm] = useState({ name: "seu nome" });
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");
        setUserForm({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [updated]);

  function handleChange(e) {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.put("/user/update", { ...userForm });
      setUpdated((state) => {
        !state;
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userForm.name}
          onChange={handleChange}
        />
        <button>clique aqui!</button>
      </form>
    </>
  );
}

import { useEffect } from "react";
import { create } from "zustand";

const statusUser = create((set) => ({
  statusUserLogged: false,
  userLogged: () => set((state) => ({ statusUserLogged: true })),
  userNotLogged: () => set((state) => ({ statusUserLogged: false })),
}));

// const loggedInUser = localStorage.getItem("loggedInUser");

// const parsedUser = JSON.parse(loggedInUser || '""');

export default statusUser;

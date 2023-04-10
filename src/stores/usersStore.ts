import { create } from "zustand";

export const usersStore = create(() => ({
    users: [],
    user: {
        name: "min",
        age: "30",
    },
}));

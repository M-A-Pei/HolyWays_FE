import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IUser {
    user: {
        name: string
        email: string
        phone: string
        pfp?: string
    } | null
    setUser: (user: { name: string, email: string, phone: string, pfp?: string }) => void
    clearUser: () => void
}

export const useUser = create(
    persist<IUser>(
        (set) => ({
            user: null,
            setUser: (user) => {
                set({ user })
                console.log("user has been set")
            },
            clearUser: () => {
                set({ user: null })
            }
        }),
        {
            name: "user-storage"
        }
    ))
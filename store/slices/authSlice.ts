import { StateCreator } from "zustand";
import IAuth from "../types/IAuth";
import { useUserProfile } from "@/network";
import { useMemo } from "react";

const { data: userRes } = useUserProfile();
const userProfiles = useMemo(() => userRes ?? [], [userRes]);
const userProfile = userProfiles?.shift();

const createAuthSlices: StateCreator<IAuth> = (set, get) => ({
    isAuthenticated: false,
    user: { userProfile }

})

export default createAuthSlices;
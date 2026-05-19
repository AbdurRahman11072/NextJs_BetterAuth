import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const userService = {
  getUserSession: async () => {
    const SessionData = await auth.api.getSession({
      headers: await headers(),
    });

    return SessionData;
  },
};

export default userService;

"use server"

import { cookies } from "next/headers"

export const getSubscriptionStatus = async()=> {
    const cookieStore = cookies();

    const accessToken = (await cookieStore).get("accessToken")?.value || null;

    const res = await fetch (`${process.env.BACKEND_API_URL}/api/subscription/status`, {
        headers: {
            Cookie: `accessToken=${accessToken}`
        }
    })

    const result = await res.json();

    return result;
}
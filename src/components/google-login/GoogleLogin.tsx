/* global google */

import { useEffect, useState } from "react"

import LogoutSvg from "./LogoutSvg"

type JwtPayload = {
    iss: string
    azp: string
    aud: string
    sub: string
    email: string
    email_verified: boolean
    nbf: number
    name: string
    picture: string
    given_name: string
    family_name: string
    locale: string
    iat: number
    exp: number
    jti: string
}

type Response = {
    clientId: string
    client_id: string
    credential: string
    select_by: string
}

export default function GoogleLogin({ show }: { show: boolean }) {
    const parseJwt = (token: string | null): JwtPayload | null => {
        if (!token) return null

        var base64Url = token.split(".")[1]
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
        var jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split("")
                .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                .join("")
        )

        return JSON.parse(jsonPayload)
    }

    const [userInfo, setUserInfo] = useState<JwtPayload | null>(
        parseJwt(localStorage.getItem("google-token"))
    )

    const handleCallbackResponse = (response: Response) => {
        localStorage.setItem("google-token", response.credential)
        setUserInfo(parseJwt(response.credential))
    }

    const handleLogout = () => {
        localStorage.removeItem("google-token")
        setUserInfo(null)
    }

    useEffect(() => {
        //@ts-ignore
        google.accounts.id.initialize({
            client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
            callback: handleCallbackResponse,
        })

        //@ts-ignore
        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            theme: "outline",
            size: "large",
        })
    }, [userInfo, show])

    return (
        <div
            className={`p-6 absolute justify-between
                flex w-full pr-20 sm:pr-24 md:pr-28 lg:pr-32
                opacity-${show ? "100" : "0"} transition-opacity duration-1000 ease-in-out`}
        >
            {userInfo && (
                <img
                    src={userInfo.picture}
                    referrerPolicy="no-referrer"
                    className="rounded-full w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 2xl:w-30 2xl:h-30"
                />
            )}
            {userInfo && (
                <h3 className="items-center flex lg:text-lg xl:text-xl 2xl:text-2xl">
                    Welcome
                    <strong className="ml-2">{" " + userInfo.given_name.split(" ")[0]}</strong>
                </h3>
            )}
            {!!userInfo ? (
                <button onClick={handleLogout} title="Logout">
                    <LogoutSvg className="w-8 h-8 cursor-pointer align-middle md:w-10 md:h-10 lg:w-12 lg:h-12 2xl:w-18 2xl:h-18" />
                </button>
            ) : (
                <div id="signInDiv"></div>
            )}
        </div>
    )
}

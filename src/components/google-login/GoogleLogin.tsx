/* global google */

import { useEffect, useState } from "react"
import { Transition } from "@headlessui/react"

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
            client_id: "828095341543-smpnstki2jratd6egutt3e9ecnq1hsfa.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        })

        //@ts-ignore
        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            theme: "outline",
            size: "large",
        })
    }, [userInfo, show])

    return (
        <div className={`p-8 absolute opacity-${show ? '100' : '0'} transition-opacity duration-1000 ease-in-out`}>
            {!!userInfo ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <div id="signInDiv" className="w-9 overflow-hidden"></div>
            )}
            {userInfo && <h3>Welcome {userInfo.given_name.split(" ")[0]}</h3>}
            {userInfo && (
                <img src={userInfo.picture} referrerPolicy="no-referrer" className="rounded-full" />
            )}
        </div>
    )
}

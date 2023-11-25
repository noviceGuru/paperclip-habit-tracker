/* global google */

import { useEffect, useState } from "react"
import Overlay from "./components/overlay/Overlay"
import PaperClipTracker from "./components/paperClipTracker/PaperClipTracker"

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

function App() {
    const [userInfo, setUserInfo] = useState<JwtPayload | null>(null)
    //@ts-ignore
    // const google = window.google
    const parseJwt = (token: string) => {
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

    const handleCallbackResponse = (response: Response) => {
        setUserInfo(parseJwt(response.credential))
    }

    const handleLogout = () => {
        setUserInfo(null)
    }

    useEffect(() => {
        //@ts-ignore
        google.accounts.id.initialize({
            client_id:
                "828095341543-smpnstki2jratd6egutt3e9ecnq1hsfa.apps.googleusercontent.com",
            callback: handleCallbackResponse,
        })

        //@ts-ignore
        google.accounts.id.renderButton(document.getElementById("signInDiv"), {
            theme: "outline",
            size: "large",
        })
    }, [userInfo])

    return (
        <div className="h-full relative min-w-[290px] bg-sky-100">
            {!!userInfo ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <div id="signInDiv" className="w-9 overflow-hidden"></div>
            )}
            {userInfo && <h3>Welcome {userInfo.given_name.split(" ")[0]}</h3>}
            {userInfo && (
                <img
                    src={userInfo.picture}
                    referrerPolicy="no-referrer"
                    className="rounded-full"
                />
            )}
            <Overlay />
            <PaperClipTracker />
        </div>
    )
}

export default App

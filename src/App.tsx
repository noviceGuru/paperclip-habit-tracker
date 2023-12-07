import { useState } from "react"

import Overlay from "./components/overlay/Overlay"
import PaperClipTracker from "./components/paperClipTracker/PaperClipTracker"
import GoogleLogin from "./components/google-login/GoogleLogin"

function App() {
    const [showOverlay, setShowOverlay] = useState<boolean>(
        localStorage.getItem("overlayShow") !== "no"
    )

    return (
        <div className="h-full relative min-w-[290px] bg-sky-100">
            <GoogleLogin show={!showOverlay} />
            <Overlay show={showOverlay} setShow={setShowOverlay} />
            <PaperClipTracker />
        </div>
    )
}

export default App

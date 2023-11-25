import Overlay from "./components/overlay/Overlay"
import PaperClipTracker from "./components/paperClipTracker/PaperClipTracker"
import GoogleLogin from "./components/google-login/GoogleLogin"

function App() {

    return (
        <div className="h-full relative min-w-[290px] bg-sky-100">
            <GoogleLogin/>
            <Overlay />
            <PaperClipTracker />
        </div>
    )
}

export default App

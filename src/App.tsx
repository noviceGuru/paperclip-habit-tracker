import Overlay from "./components/overlay/Overlay"
import PaperClipTracker from "./components/paperClipTracker/PaperClipTracker"

function App() {
    

    return (
        <div className="h-full relative min-w-[290px] bg-sky-100">
            <Overlay/>
            <PaperClipTracker/>
        </div>
    )
}

export default App

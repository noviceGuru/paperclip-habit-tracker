import JarContainer from "./components/container/Container"
import { useRef, useState } from "react"
import { generateUniqueArrays } from "./utils/randomArrMaker"

function App() {
    const [paperClipPositions, setPaperClipPositions] = useState<
        [number, number, number][]
    >([])
    const inputRef = useRef<HTMLInputElement>(null)
    const hanldeClickGo = () => {
        const totalNum = inputRef.current ? parseInt(inputRef.current.value) : 0
        setPaperClipPositions(
            generateUniqueArrays(3, totalNum) as [number, number, number][]
        )
    }

    return (
        <div className="p-10 h-full flex flex-col">
            <label className="h-10 self-center gap-4 flex items-center flex-wrap justify-center">
                How many are we doing today?
                <input
                    className="border-solid border-amber-200 border-4 rounded-lg w-12 text-center focus:border-red-600 focus:border-2 outline-none"
                    ref={inputRef}
                    onChange={e => console.log(e.target.value)}
                />
                <button
                    className="border-solid border-amber-200 bg-amber-200 border-4 rounded-lg p-1"
                    onClick={hanldeClickGo}
                >
                    Go!
                </button>
            </label>
            <JarContainer paperClipPositions={paperClipPositions} />
        </div>
    )
}

export default App

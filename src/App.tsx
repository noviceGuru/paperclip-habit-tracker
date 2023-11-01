import JarContainer from "./components/container/Container"
import { useRef, useState } from "react"
import { generateUniqueArrays } from "./utils/randomArrMaker"

function App() {
    const [paperClipPositions, setPaperClipPositions] = useState<
        [number, number, number][]
    >([])
    const [inputValue, setInputValue] = useState<number>(0)

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const number = parseInt(e.target.value)
        
        if (!isNaN(number)) {
            const number = parseInt(e.target.value)

            if (number >= 1 && number <= 300) {
                setInputValue(number)
            }
        }
    }

    const hanldeClickGo = () => {
        setPaperClipPositions(
            generateUniqueArrays(3, inputValue) as [number, number, number][]
        )
    }

    return (
        <div className="p-10 h-full flex flex-col gap-32">
            <label className="h-10 self-center gap-4 flex items-center flex-wrap justify-center text-center select-none sm:text-lg md:text-xl">
                <span className="flex items-center h-full">
                    How many are we doing today?
                </span>
                <input
                    className="border-solid border-amber-200 border-4 rounded-lg w-12 text-center focus:border-red-600 focus:border-2 outline-none"
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button
                    className="border-solid border-amber-200 bg-amber-200 border-4 rounded-lg p-1 select-none"
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

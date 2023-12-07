import { useState } from "react"
import { generateUniqueArrays } from "../../utils/randomArrMaker"

export default function NumberInput({
    setPaperClipPositions,
}: {
    setPaperClipPositions: (
        value: React.SetStateAction<[number, number, number][]>
    ) => void
}) {
    const [inputValue, setInputValue] = useState<number>(0)

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const number = parseInt(e.target.value)

        if (e.target.value === "") {
            setInputValue(0)
            return
        }

        if (!isNaN(number)) {
            const number = parseInt(e.target.value)

            if (number >= 0 && number <= 300) {
                setInputValue(number)
            }
        }
    }

    const hanldeClickGo = () => {
        setPaperClipPositions(
            generateUniqueArrays(3, inputValue) as [number, number, number][]
        )
    }

    const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            hanldeClickGo()
        }
    }

    const onInputFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        e.target.select()
    }
    return (
        <label className="h-10 self-center gap-4 flex items-center flex-wrap justify-center text-center select-none sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-12">
            <span className="flex items-center h-full">
                How many are we doing today?
            </span>
            <input
                className="border-solid border-amber-200 border-4 rounded-lg w-12 text-center focus:border-red-600 focus:border-2 outline-none bg-slate-400"
                value={inputValue}
                onChange={onInputChange}
                onKeyUp={onInputEnter}
                onFocus={onInputFocus}
            />
            <button
                className="border-solid border-amber-200 bg-amber-200 border-4 rounded-lg p-1 select-none disabled:opacity-0 transition-all duration-150"
                onClick={hanldeClickGo}
                disabled={!inputValue}
            >
                Go!
            </button>
        </label>
    )
}

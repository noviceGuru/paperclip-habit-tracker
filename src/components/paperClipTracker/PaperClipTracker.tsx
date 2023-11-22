import { useState } from "react"
import JarContainer from "../container/Container"
import { generateUniqueArrays } from "../../utils/randomArrMaker"
import NumberInput from "../number-input/NumberInput"

export default function PaperClipTracker() {
    const [paperClipPositions, setPaperClipPositions] = useState<
        [number, number, number][]
    >([])

    return (
        <div className="p-10 h-full flex flex-col gap-32">
            <NumberInput setPaperClipPositions={setPaperClipPositions} />
            <JarContainer paperClipPositions={paperClipPositions} />
        </div>
    )
}

import { useState } from "react"
import Jar from "../jar/Jar"
import { positions as paperClipPositions } from "../../mockData/mockData"

export default function JarContainer({ totalNum }: { totalNum: number }) {
    const [right, setRight] = useState(0)
    
    const jarClickHandler = (signal: "toRight" | "toLeft") => {
        if (signal === "toRight" && right !== totalNum) {
            setRight(right + 1)
        }

        if (signal === "toLeft" && right !== 0) {
            setRight(right - 1)
        }
    }

    return (
        <div className="p-10 flex gap-10 justify-center h-1/2 self-center">
            <Jar
                key="left"
                paperClipNumbers={[...paperClipPositions.slice(0, totalNum - right)]}
                onClick={() => jarClickHandler("toRight")}
            />
            <Jar
                key="right"
                paperClipNumbers={right>0? [...paperClipPositions.slice(-right)] : []}
                onClick={() => jarClickHandler("toLeft")}
            />
        </div>
    )
}

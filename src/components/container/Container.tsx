import { useEffect, useState } from "react"
import Jar from "../jar/Jar"

export default function JarContainer({
    paperClipPositions,
}: {
    paperClipPositions: [number, number, number][]
}) {
    const [right, setRight] = useState(0)
    useEffect(() => {
        if (paperClipPositions) {
            setRight(0)
        }
    }, [paperClipPositions])

    const totalNum = paperClipPositions.length

    const jarClickHandler = (signal: "toRight" | "toLeft") => {
        if (signal === "toRight" && right !== totalNum) {
            setRight(right + 1)
        }

        if (signal === "toLeft" && right !== 0) {
            setRight(right - 1)
        }
    }

    return (
        <div className="p-10 flex flex-col gap-36 justify-center h-full self-center">
            <span className="self-center select-none h-6">{!!(totalNum) && `${right} Done!`}</span>
            <div className="flex gap-12 justify-center self-center h-1/4">
                <Jar
                    key="left"
                    paperClipNumbers={[
                        ...paperClipPositions.slice(0, totalNum - right),
                    ]}
                    onClick={() => jarClickHandler("toRight")}
                />
                <Jar
                    key="right"
                    paperClipNumbers={
                        right > 0 ? [...paperClipPositions.slice(-right)] : []
                    }
                    onClick={() => jarClickHandler("toLeft")}
                />
            </div>
        </div>
    )
}

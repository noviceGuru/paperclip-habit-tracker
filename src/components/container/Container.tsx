import { useEffect, useState } from "react"
import Jar from "../jar/Jar"

export default function JarContainer({
    paperClipPositions,
}: {
    paperClipPositions: [number, number, number][]
}) {
    const [right, setRight] = useState(0)
    const [showTodo, setShowTodo] = useState<boolean>(false)

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
        <div className="flex flex-col gap-36 justify-center h-full self-center min-h-[200px]">
            <span className="self-center select-none h-6">
            {!!totalNum && 
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" onClick={()=>setShowTodo(!showTodo)} className="sr-only peer" />
                    <div
                        className="w-40 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
                dark:peer-focus:ring-lime-300 rounded-full
                dark:bg-gray-200 peer-checked:after:translate-x-[135px] peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
                after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-lime-300 text-center"
                    >
                       {showTodo ? `${totalNum - right} To Do` : `${right} Done!` }
                    </div>
                </label>}
            </span>
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
                        right > 0 ? [...paperClipPositions.slice(-right).reverse()] : []
                    }
                    onClick={() => jarClickHandler("toLeft")}
                />
            </div>
        </div>
    )
}

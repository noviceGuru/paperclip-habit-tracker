import { useEffect, useState } from "react"
import { Transition } from "@headlessui/react"
import PaperClipSvg from "../icons/PaperClipIcon"

export default function PaperClip({
    position,
}: {
    position: [number, number, number]
}) {
    const [show, setShow] = useState<boolean>(false)

    useEffect(()=>{setShow(true)},[])

    return (
        <Transition
            show={show}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <PaperClipSvg
                className="opacity-60"
                style={{
                    transform: `rotate(${position[0]}deg)`,
                    height: "24px",
                    width: "24px",
                    right: position[1] % 70,
                    bottom: position[2] % 120,
                    position: "absolute",
                }}
            />
        </Transition>
    )
}

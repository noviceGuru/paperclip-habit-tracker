import PaperClip from "../paperClip/PaperClip"
import JarSvg from "./JarSvg"

export default function Jar({
    paperClipNumbers,
    onClick,
}: {
    paperClipNumbers: [number, number, number][]
    onClick: () => void
}) {
    return (
        <>
            <div className="relative w-24" onClick={onClick}>
                <JarSvg 
                className="absolute bottom-0 left-0 "/>
                {paperClipNumbers.map((paperClip, index) => (
                    <PaperClip
                        key={index}
                        position={paperClip}
                    />
                ))}
            </div>
        </>
    )
}

import PaperClipSvg from "../icons/PaperClipIcon"

export default function PaperClip({ rotated, position }: { rotated: number, position: [number, number, number] }) {
    
    return (
        <div
            style={{transform: `rotate(${rotated}deg)`, right:position[0], bottom: position[1]}}
            className="absolute"
        >
            <PaperClipSvg className="w-6" />
        </div>
    )
}

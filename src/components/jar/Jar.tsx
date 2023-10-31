import PaperClip from "../paperClip/PaperClip"

export default function Jar({
    paperClipNumbers,
    onClick,
}: {
    paperClipNumbers: [number, number, number][]
    onClick: () => void
}) {
    return (
        <div
            className="relative border-solid border-l-2 border-r-2 border-b-2 border-red-700 rounded-3xl w-28 sm:w-32 md:w-36 p-2 gap-4"
            onClick={onClick}
        >
            {paperClipNumbers.map((paperClip, index) => (
                <PaperClip key={index} rotated={paperClip[0]} position={paperClip}/>
            ))}
        </div>
    )
}

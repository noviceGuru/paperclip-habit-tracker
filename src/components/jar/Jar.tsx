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
            className="flex flex-col-reverse items-center border-solid border-l-2 border-r-2 border-b-2 border-red-700 rounded-3xl w-40 p-2 gap-4 relative"
            onClick={onClick}
        >
            {paperClipNumbers.map((paperClip, index) => (
                <PaperClip key={index} rotated={paperClip[0]} position={paperClip}/>
            ))}
        </div>
    )
}

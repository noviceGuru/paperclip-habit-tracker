import PaperClip from "../paperClip/PaperClip"

export default function Jar({
    paperClipNumber,
    onClick,
}: {
    paperClipNumber: number
    onClick: () => void
}) {
    const num = new Array(paperClipNumber).fill(1)

    return (
        <div
            className="flex flex-col-reverse items-center border-solid border-l-2 border-r-2 border-b-2 border-red-700 rounded-3xl w-40 p-2 gap-4"
            onClick={onClick}
        >
            {num.map((_, index) => (
                <PaperClip key={index} />
            ))}
        </div>
    )
}

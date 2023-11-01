import PaperClipSvg from "../icons/PaperClipIcon"

export default function PaperClip({
    position,
}: {
    position: [number, number, number]
}) {
    return (
        <PaperClipSvg
            style={{
                transform: `rotate(${position[0]}deg)`,
                height: "24px",
                width: "24px",
                right: position[1]%70,
                bottom: position[2]%120,
                position: "absolute",
            }}
        />
    )
}

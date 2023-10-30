import PaperClip from "../paperClip/PaperClip"

export default function Jar({paperClipNumber}:{paperClipNumber: number}){
    const num = new Array(paperClipNumber).fill(1)
    return <div>
        {num.map(() => <PaperClip/>)}
    </div>
}
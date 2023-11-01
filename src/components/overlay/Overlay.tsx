import { useState } from "react"

export default function Overlay() {
    const [show, setShow] = useState<boolean>(true)

    return (
        show && (
            <div className="h-full bg-lime-500 bg-opacity-50 absolute top-0 flex flex-col justify-between">
                <div>
                    <div
                        className="right-0 cursor-pointer m-8 font-extrabold"
                        onClick={() => setShow(false)}
                    >
                        X
                    </div>
                    <div className="bg-lime-500 bg-opacity-80 felx ps-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        <p>
                            In 1993, a bank in Abbotsford, Canada, hired a
                            twenty-three-year-old stockbroker named Trent
                            Dyrsmid. Abbotsford was a relatively small suburb,
                            tucked away in the shadow of nearby Vancouver, where
                            most of the big business deals were being made.
                            Given the location, and the fact that Dyrsmid was a
                            rookie, nobody expected too much of him. But he made
                            brisk progress thanks to a simple daily habit.
                        </p>
                        <p className="mt-4">
                            Dyrsmid began each morning with two jars on his
                            desk. One was filled with 120 paper clips. The other
                            was empty. As soon as he settled in each day, he
                            would make a sales call. Immediately after, he would
                            move one paper clip from the full jar to the empty
                            jar and the process would begin again. “Every
                            morning I would start with 120 paper clips in one
                            jar and I would keep dialing the phone until I had
                            moved them all to the second jar”,he told me.
                        </p>
                        <p className="mt-4">
                            Within eighteen months, Dyrsmid was bringing in $5
                            million to the firm. By age twenty-four, he was
                            making $75,000 per year—the equivalent of $125,000
                            today. Not long after, he landed a six-figure job
                            with another company.
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col align-middle gap-8">
                    <a
                        className="top-7 bg-lime-950  text-white font-bold text-center text-2xl cursor-pointer"
                        href="https://jamesclear.com/atomic-habits"
                        target="_blank"
                    >
                        From `Atomic Habits` by `James Clear`
                    </a>
                    <button
                        className="border-solid border-amber-500 bg-amber-600 border-4 rounded-lg p-1 select-none mb-3 font-extrabold"
                        onClick={() => setShow(false)}
                    >
                        Let's Go!
                    </button>
                </div>
            </div>
        )
    )
}

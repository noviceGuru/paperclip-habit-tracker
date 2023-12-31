import { useState } from "react"
import { Transition } from "@headlessui/react"

export default function Overlay({
    show,
    setShow,
}: {
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [checked, setChecked] = useState<boolean>(false)

    const handleCheckboxChange = () => setChecked(!checked)
    const handleClose = () => {
        if(checked){
            localStorage.setItem('overlayShow', 'no')
        }
        setShow(false)
    }

    return <Transition
            show={show}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="h-full bg-sky-200 bg-opacity-50 absolute top-0 flex flex-col justify-between z-10">
                <div className="flex flex-col justify-center h-full">
                    <div
                        className="p-3 text-xl cursor-pointer m-8 font-bold absolute left-0 top-0 
                        hover:font-extrabold hover:text-amber-800 transition-all duration-300 hover:text-2xl hover:rotate-90"
                        onClick={handleClose}
                    >
                        X
                    </div>
                    <div className="bg-lime-500 bg-opacity-80 felx p-5 text-md sm:text-lg md:text-xl lg:text-2xl text-center rounded-xl
                    mx-12 md:mx-28 lg:mx-48 2xl:mx-56">
                        <p>
                            Every morning, Dyrsmid began with two jars on his
                            desk. One held 120 paper clips, while the other was
                            empty. After each sales call, he moved one paper
                            clip from the full jar to the empty one and repeated
                            the process.
                        </p>
                        <p className="mt-4">
                            His results were impressive, and within eighteen
                            months, he was generating $5 million for the firm.
                            By age twenty-four, he was earning $75,000 a year
                            (equivalent to $125,000 today) and soon landed a
                            six-figure job with another company.
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col align-middle gap-8">
                    <a
                        className="top-7 bg-lime-950  text-white font-bold text-center text-2xl cursor-pointer p-3
                        hover:text-amber-500 transition-colors duration-600"
                        href="https://jamesclear.com/atomic-habits"
                        target="_blank"
                    >
                        From `Atomic Habits` by `James Clear`
                    </a>
                    <label className="flex justify-center gap-3 select-none">
                        <input
                            type="checkbox"
                            onChange={handleCheckboxChange}
                            checked={checked}
                        ></input>
                        Don't show again
                    </label>
                    <button
                        className="border-solid border-amber-500 bg-amber-600 border-4 rounded-lg p-1 select-none mb-3 font-bold w-2/3 self-center 
                        hover:bg-amber-500 hover:border-amber-700 hover:text-amber-700 hover:font-extrabold
                        transition-all duration-200"
                        onClick={handleClose}
                    >
                        Let's Go!
                    </button>
                </div>
            </div>
        </Transition>
    }

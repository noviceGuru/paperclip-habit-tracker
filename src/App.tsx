import { useState } from "react"
import "./App.css"
import Jar from "./components/jar/Jar"

function App() {
    const [count, setCount] = useState(0)

    return <>
    <Jar key={'left'} paperClipNumber={3}/>
    <Jar key={'right'} paperClipNumber={5}/>
    </>
}

export default App

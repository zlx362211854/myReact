

import MyReact, { useState } from "./core"

const Comp = () => {
    return <p> i am a child component</p>
}

/** @jsx MyReact.createElement */
function Counter() {
    const [state, setState] = useState(1)
    const [count, setCount] = useState(1)
    return (
        <article className="markdown-body">
            <h1 onClick={() => setState(state + 1)}>
                Count: {state}
                <p>click to add</p>
            </h1>
            <code onClick={() => setCount(count => count * 2)}>const a = {count}</code>
            <ul>
                <li>some112</li>
                <li>some1</li>
                <li>some12</li>
            </ul>
            <blockquote>sds</blockquote>
            <Comp />
        </article >
    )
}
const element = <Counter />
const container = document.getElementById('root')
MyReact.render(element, container)
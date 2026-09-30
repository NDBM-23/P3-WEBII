import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
    const randomMessage = () =>
        messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <p>{greeting}! Gracias por visitar mi sitio.</p>
            <button onClick={() => setGreeting(randomMessage())}>
                Nuevo saludo
            </button>
        </div>
    );
}

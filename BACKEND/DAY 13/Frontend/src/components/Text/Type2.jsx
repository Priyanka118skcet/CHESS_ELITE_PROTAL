import React from 'react';
import Typewriter from "typewriter-effect";
import './Type2.css';

function Tp() {
    return (
        <div className="Ty">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("GeeksForGeeks")
                        .pauseFor(1000)
                        .typeString("<br>") // Add line break
                        .typeString("Welcomes You")
                        .pauseFor(1000)
                        .typeString("<br>") // Add line break
                        .typeString("To Our Website")
                        .pauseFor(1000)
                        .typeString("<br>") // Add line break
                        .typeString("Have a great time!")
                        .start();
                }}
                options={{
                    delay: 50, // Adjust delay between each character if needed
                }}
            />
        </div>
    );
}

export default Tp;

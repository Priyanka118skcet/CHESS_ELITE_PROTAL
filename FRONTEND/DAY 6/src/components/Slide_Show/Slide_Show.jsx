import "../../styles/Slide_Show.css";
import { useEffect, useState } from "react";
import s1 from '../../pictures/s1.jpg';
import s2 from '../../pictures/s2.avif';
import s3 from '../../pictures/s3.avif';
import s4 from '../../pictures/s4.jpg';
import s5 from '../../pictures/s5.jpg';
import s6 from '../../pictures/s6.jpeg';
import s7 from '../../pictures/s7.jpg';
import s9 from '../../pictures/s9.avif';
import s10 from '../../pictures/s10.png';
import gif from '../../pictures/c23.gif'; // Import your GIF file
import { Link } from "react-router-dom";

function Slide() {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;
    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const cards = [
    { id: "1", image: s1 },
    { id: "2", image: s2 },
    { id: "3", image: s3 },
    { id: "4", image: s4 },
    { id: "5", image: s5 },
    { id: "6", image: s6 },
    { id: "7", image: s7 },
    { id: "8", image: s9 },
    { id: "9", image: s10 },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      console.log(index);
    }, 3000);
  }, [index]);

  const handlePlayGame = () => {
    // Add logic to handle "Let's Play a Game" button click
    console.log("Let's play a game clicked!");
  };

  const handleExploreCourses = () => {
    // Add logic to handle "Let's Explore New Courses" button click
    console.log("Let's explore new courses clicked!");
  };

  return (
    <div className="page-container">
      <div className="Slide">
        <div className="carousel">
          {cards.map((item, i) => {
            const indexLeft = mod(index - 1, cards.length);
            const indexRight = mod(index + 1, cards.length);

            let className = "card";

            if (i === index) {
              className = "card card--active";
            } else if (i === indexRight) {
              className = "card card--right";
            } else if (i === indexLeft) {
              className = "card card--left";
            } else className = "card";

            return (
              <img
                key={item.id}
                className={className}
                src={item.image}
                alt="Comic"
              />
            );
          })}
        </div>
      </div>
      <div className="welcome-message">
        <h1 className="wel">Welcome Back...!</h1>
        <p className="para">
          Every chess master was once a beginner.” 
          <br />
          “The hardest game to win is a won game.” <br />
         
          “If you wish to succeed, you must brave the risk of failure.” <br />
         
        </p>
        <img src={gif} alt="Animated GIF" />
        <div className="buttons-container">
        
        <Link to="/Chess">
          <button >Let's Play a New Game</button>
          </Link>
      
          <Link to="/course">
          <button >Let's Explore New Courses</button>
           </Link>

        </div>
      </div>
    </div>
  );
}

export default Slide;

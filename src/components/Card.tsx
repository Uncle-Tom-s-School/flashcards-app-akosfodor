import { useState, useEffect } from "react";
import "../index.css";

interface CardProps {
  data: {
    id: number;
    question: string;
    answer: string;
    points: number;
  };
  nextCard: () => any;
}

const Card = ({ data, nextCard }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  useEffect(() => {
    setIsFlipped(false);
  }, [data.id]);

  const handleCardClick = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    }
  };

  const handleButtonClick = (e: React.MouseEvent, pointChange: number) => {
    e.stopPropagation();
    
    data.points += pointChange; 
    
    setIsFlipped(false);

    setTimeout(() => {
        nextCard();
    }, 200);
  };

  return (
    <>
      <div 
        className="flip-card border-none" 
        onClick={handleCardClick}
      >
        <div className={`flip-card-inner border-none ${isFlipped ? "flipped" : ""}`}>
          
          <div
            className={`flip-card-front flex flex-col justify-center items-center p-7 rounded-xl border-none gap-8 ${
              data.points === 0
                ? "bg-white text-black"
                : data.points > 0
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            <h1>{data.question}</h1>
          </div>

          <div className="flip-card-back flex flex-col justify-center items-center p-7 rounded-2xl border-2 border-black bg-gray-300 gap-8">
            <div
              className={`flex w-full justify-center items-center rounded-xl border-none ${
                data.points === 0
                  ? "bg-white text-black"
                  : data.points > 0
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              <h1 className="text-center">{data.points}</h1>
            </div>
            <h1>{data.answer}</h1>
            <div>
              <button
                className="cursor-pointer mr-4"
                onClick={(e) => handleButtonClick(e, 1)}
              >
                <i className="fa-regular fa-circle-check fa-2x"></i>
              </button>

              <button
                className="cursor-pointer"
                onClick={(e) => handleButtonClick(e, -1)}
              >
                <i className="fa-regular fa-circle-xmark fa-2x"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
import { useEffect, useState } from "react";
import cardData from "../../public/cards.json";
import Card from "./Card";

const FlipCard = () => {
  type CardType = {
    id: number;
    question: string;
    answer: string;
    points: number;
  };
  const [cardIndex, setCardIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<CardType | null>(null);

  useEffect(() => {
    DefaultCard();
    console.log(cardIndex)
  }, [cardIndex]);

  const DefaultCard = () => {
    const card = cardData[cardIndex];
    setCurrentCard(card);
  };

  const NextCard = () => {
    setCardIndex(cardIndex + 1);
    if (cardIndex == 13) setCardIndex(0);
    const card = cardData[cardIndex];
    setCurrentCard(card);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {currentCard && <Card nextCard={NextCard} data={currentCard}/>}
    </div>
  );
};

export default FlipCard;
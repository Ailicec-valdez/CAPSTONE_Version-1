import { useState } from "react";
import { Survey } from "./components/Survey";
import { BatInfo } from "./components/BatInfo";

export default function App() {
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [favoriteAnimal, setFavoriteAnimal] = useState("");
  const [fearAnimal, setFearAnimal] = useState("");

  const handleSurveyComplete = (favorite: string, fear: string) => {
    setFavoriteAnimal(favorite);
    setFearAnimal(fear);
    setSurveyCompleted(true);
  };

  if (!surveyCompleted) {
    return <Survey onComplete={handleSurveyComplete} />;
  }

  return <BatInfo favoriteAnimal={favoriteAnimal} fearAnimal={fearAnimal} />;
}

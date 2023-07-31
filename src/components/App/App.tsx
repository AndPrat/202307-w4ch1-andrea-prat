import { useState } from "react";
import { QuestionStructure } from "../../types";
import Question from "../Question/Question";

const App = (): React.ReactElement => {
  const initialQuestions: QuestionStructure[] = [
    {
      id: 0,
      question: "La tortilla:",
      answer: "",
    },
    {
      id: 1,
      question: "En verano:",
      answer: "",
    },
  ];

  const [questions] = useState(initialQuestions);

  return (
    <div className="container">
      {questions.map((item) => (
        <Question key={item.id} question={item} />
      ))}
    </div>
  );
};

export default App;

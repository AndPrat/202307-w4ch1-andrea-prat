import { QuestionStructure } from "../../types";

interface QuestionProps {
  question: QuestionStructure;
}

const Question = ({
  question: { question },
}: QuestionProps): React.ReactElement => {
  return (
    <div className="options">
      <span className="options__question">{question}</span>
      <div className="options__answers"></div>
    </div>
  );
};

export default Question;

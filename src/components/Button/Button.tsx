import { ButtonStructure } from "../../types";
import "./Button.css";

interface ButtonProps {
  button: ButtonStructure;
  actionOnClick: () => void;
}

const Button = ({ button: { text } }: ButtonProps): React.ReactElement => {
  return <button className="button">{text}</button>;
};

export default Button;

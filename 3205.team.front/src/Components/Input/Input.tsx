import { InputHTMLAttributes } from 'react';
import { inputMask } from '../utils/mask';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: boolean;
}

export const Input: React.FC<InputProps> = (props) => {
  const { mask, placeholder, required, ...otherProps } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (mask) {
      const text = e.target.value;
      const mask = inputMask(text);
      e.target.value = mask;
    }
  };

  return (
    <input
      className="input"
      onChange={onChange}
      placeholder={`${placeholder} ${required ? '*' : ''}`}
      {...otherProps}
    ></input>
  );
};

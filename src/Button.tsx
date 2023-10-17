import { useEffect, useRef } from "react";

type ButtonProps = { count: number; fuckingCount: () => void };

const Button = (props: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
    console.log(props.count);
    return () => {
      console.log("cleaning");
    };
  }, [buttonRef.current]);
  return (
    <button ref={buttonRef} onClick={props.fuckingCount}>
      count is {props.count}
    </button>
  );
};

export default Button;

import { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  function fuckingCount(count: number) {
    let counting = count;
    setCount(counting + 1);
  }

  return (
    <>
      <h1
        className={`mx-auto flex flex-col justify-center items-center h-[150px] shadow-2xl bg-neutral-500 shadow-deric-light w-dericSize ${
          count > 3 ? "text-2xl uppercase" : "text-xs"
        }`}
      >
        Vite + React
      </h1>
      <div className="card bg-sky-400 mt-12 w-1/2 rounded-full hover:bg-red-400 transition-colors duration-500 md:text-xl">
        {count < 5 ? (
          <>
            <Button
              count={count}
              fuckingCount={() => fuckingCount(count)}
            ></Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </>
        ) : (
          "RIPP Button"
        )}
      </div>
      <p className="read-the-docs text-phil bg-deric-light/75">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

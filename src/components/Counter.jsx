import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between items-center gap-x-11">
      <button
        className="px-3 py-2 rounded-lg bg-orange-200"
        onClick={() => setCount((count) => count - 1)}
      >
        DECREMENT COUNT
      </button>
      <div className="text-3xl">{count}</div>
      <button
        className="px-3 py-2 rounded-lg bg-orange-200"
        onClick={() => setCount((count) => count + 1)}
      >
        INCREMENT COUNT
      </button>
    </div>
  );
};

export default Counter;

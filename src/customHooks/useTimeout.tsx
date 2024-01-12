import React, { useEffect, useRef } from "react";

// Create a hook to easily use setTimeout(callback, delay).

// 1- reset the timer if delay changes
// 2- DO NOT reset the timer if only callback changes


export function useTimeout(callback: () => void, delay: number) {

  // for 2nd condition i am using useRef;
  const callbackref=useRef(callback);
  callbackref.current=callback;
  useEffect(()=>{
  const timeoutId= setTimeout(()=>{callbackref.current()},delay);
   return ()=>{clearTimeout(timeoutId)};
  },[delay])
}

export function App() {
  return <div>your app</div>
}





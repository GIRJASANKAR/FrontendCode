import React, { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number) {
  const callbackref=useRef(callback);
  callbackref.current=callback;
  useEffect(()=>{
  const timeoutId= setTimeout(()=>{callbackref.current()},delay);
   return ()=>{clearTimeout(timeoutId)};
  },[delay])
  // your code here
}

export function App() {
  return <div>your app</div>
}





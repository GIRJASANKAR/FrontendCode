import React, { useRef } from "react";

export function useIsFirstRender(): boolean {
  // your code here
  const renderFirst=useRef(true);
  if(renderFirst.current){
    renderFirst.current=false;
    return true;
  }
return false;


}

// if you want to try your code on the right panel
// remember to export App() component like below

export function App() {
  return <div>your app</div>
}

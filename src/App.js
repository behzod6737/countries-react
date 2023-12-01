import { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
	let [isWhite,setWhite] = useState(false)
  return (
	<div className={`body  ${isWhite ? 'body-white-mode' : '' } `}>
	<Header whiteMode={isWhite} setWhite={setWhite}/>
	<Main/>
	</div>
  )
}

export default App;

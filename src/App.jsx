import React, { useEffect } from 'react'
import { useState } from 'react'
const App = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem("count"))||0)

  useEffect(()=>{

	localStorage.setItem("count",JSON.stringify(count))
  },[count])
  
 
	return (
		<div>
			<h2 data-testid="count-id">Count: {count}</h2>
			<button data-testid="inc-id" onClick={() => setCount(count + 1)}>
				+
			</button>
			<button data-testid="dec-id" onClick={() => setCount(count - 1)}>
				-
			</button>
		</div>
  )
}

export default App
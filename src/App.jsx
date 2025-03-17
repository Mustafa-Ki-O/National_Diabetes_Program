import { RouterProvider } from "react-router-dom";
import './App.css'
import Start from './app/start'
import { useState ,useEffect} from 'react'
import route from './router/route'
import Circle from "./components/general/Circle";
function App() {
 
  const [showStartPage, setShowStartPage] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowStartPage(false);
    }, 5500); 

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return showStartPage ? <Start /> :(
    <>
    <Circle
                     w={2}
                     color1='#37A9EF'
                     color2='#fff'
                     degree='45deg'
                     top='22%'
                     right='10%'
                     translateX={0}
                     translateY={0}
                     className="first"
                     duration='3s'
                 />
                 <Circle
                     w={1}
                     color1='#37A9EF'
                     color2='#fff'
                     degree='45deg'
                     top='92%'
                     right='7%'
                     translateX={0}
                     translateY={0}
                     className="second"
                     duration='1s'
                 />
                 <Circle
                     w={1}
                     color1='#37A9EF'
                     color2='#fff'
                     degree='145deg'
                     top='12%'
                     right='89%'
                     translateX={0}
                     translateY={4}
                     className="third"
                     duration='3s'
                 />
                 <Circle
                     w={3}
                     color1='#37A9EF'
                     color2='#fff'
                     degree='105deg'
                     top='80%'
                     right='90%'
                     translateX={3}
                     translateY={-2}
                     className="fourth"
                     duration='4s'
                 />
    <RouterProvider router={route} /></>
  
) ;
}

export default App

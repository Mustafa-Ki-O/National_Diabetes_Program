// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { RouterProvider } from "react-router-dom";
import './App.css'
import { useEffect} from 'react'
import route from './router/route'
import Circle from "./components/general/Circle";

function App() {
 

  return (
    <>
                {/* <Circle
                     w={2}
                     color1='#37A9EF'
                     color2='#fff'
                     degree='45deg'
                     top='22%'
                     right='10%'
                     translateX={0}
                     translateY={0}
                     className="first"
                     duration='4s'
                 />
                 <Circle
                     w={1.5}
                     color1='#37A9EF'
                     color2='#37A9EF'
                     degree='45deg'
                     top='92%'
                     right='7%'
                     translateX={2}
                     translateY={0}
                     className="second"
                     duration='4s'
                 />
                 <Circle
                     w={1}
                     color1='#37A9EF'
                     color2='#fff'
                     degree='145deg'
                     top='12%'
                     right='89%'
                     translateX={2}
                     translateY={4}
                     className="third"
                     duration='4s'
                 />
                 <Circle
                     w={3}
                     color1='#37A9EF'
                     color2='#fff'
                     degree='105deg'
                     top='80%'
                     right='50%'
                     translateX={3}
                     translateY={-5}
                     className="fourth"
                     duration='4s'
                 />
                 <Circle
                     w={3}
                     color1='#37A9EF'
                     color2='#fff'
                     degree='145deg'
                     top='82%'
                     right='89%'
                     translateX={4}
                     translateY={-2}
                     className="five"
                     duration='6s'
                 />
                    <Circle
                     w={2}
                     color1='#37A9EF'
                     color2='#20A9EF'
                     degree='165deg'
                     top='20%'
                     right='60%'
                     translateX={-3}
                     translateY={-1}
                     className="six"
                     duration='5s'
                   /> */}
    <RouterProvider router={route} /></>
  
) ;
}

export default App

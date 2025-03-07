import { RouterProvider } from "react-router-dom";
import './App.css'
import Start from './app/start'
import { useState ,useEffect} from 'react'
import route from './router/route'
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

  return showStartPage ? <Start /> : <RouterProvider router={route} />;
}

export default App

import { useEffect } from 'react';

const UpScroll = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return null; 
};

export default UpScroll;
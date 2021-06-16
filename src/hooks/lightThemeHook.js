import { useEffect } from 'react'

function useLightBody() {
    useEffect(() => {
      document.body.style.backgroundColor = 'whitesmoke';

  
      return () => {
        document.body.style.backgroundColor = '#fff';
      }
    })
  }
  
  export default useLightBody
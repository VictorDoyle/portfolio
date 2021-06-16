import { useEffect } from 'react'

function useBaseTheme() {
    useEffect(() => {
      document.body.style.backgroundColor = '#0f1e39';

  
      return () => {
        document.body.style.backgroundColor = '#0f1e39';
      }
    })
  }
  
  export default useBaseTheme
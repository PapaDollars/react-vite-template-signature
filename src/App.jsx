import { useEffect } from 'react';
import { initSignature } from './utils/signature';
import { useSignature } from './hooks/useSignature';
import InvisibleSignature from './components/InvisibleSignature';

function App() {
  useSignature();
  
  useEffect(() => {
    initSignature();
    
    window.onerror = function(msg) {
      console.error('🐛 Error in project by 24PapaDollar:', msg);
    };
    
    if (window.performance?.mark) {
      performance.mark('24papa-signature');
    }
  }, []);
  
  return (
    <>
      <InvisibleSignature />
      {/* Votre application */}
    </>
  );
}

export default App;
import React from 'react';
import WebViewIframe from './components/WebView/WebViewIframe';

const App: React.FC = () => {
  return (
    <WebViewIframe url={'https://ruta7.chiletur.cl/?comuna=Cerro%20Castillo&region=Ays%C3%A9n&zona=Patagonia'} />
  
  );
};

export default App;

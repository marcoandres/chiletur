import React from 'react';
import WebViewIframe from './components/WebView/WebViewIframe';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Carousel from './components/Carousel/CarouselProps';

const App: React.FC = () => {
  const videoData = [
    { uri: require('./assets/Videos/video1.mp4') },
    { uri: require('./assets/Videos/video2.mp4') },
    { uri: require('./assets/Videos/video3.mp4') },
  ];

  console.log('videoData:', videoData);

  try {
    return (
      <>
      <SafeAreaView style={styles.container}>
        
        <Text style={styles.header}>CHILETURCOPEC</Text>
        <Carousel data={videoData} />
        <WebViewIframe 
          url={'https://ruta7.chiletur.cl/?comuna=Cerro%20Castillo&region=Ays%C3%A9n&zona=Patagonia'} 
        />
        
      </SafeAreaView>
      </>
    );
  } catch (error) {
    console.error('Error al renderizar Carousel:', error);
    return <Text>Error al cargar el carrusel</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  
  webView: {
    flex: 1,
  },
});

export default App;

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface CarouselProps {
  data: { uri: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  console.log('datos del carousel', data);

  return (
    <View style={styles.carouselContainer}>
      <Text>Carrusel simplificado</Text>
      <Text>{`Número de elementos: ${data.length}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width,
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default Carousel;
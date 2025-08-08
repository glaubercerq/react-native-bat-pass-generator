import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <Animatable.View animation="fadeInDown" duration={1500} delay={300}>
      <Animatable.Text 
        animation="pulse" 
        iterationCount="infinite" 
        duration={2000}
        style={styles.title}
      >
        BAT PASS GENERATOR
      </Animatable.Text>
      
      <Animatable.Image
        animation="bounceIn"
        duration={1200}
        delay={600}
        source={batLogo}
        style={styles.logoImage}
      />
      
      <Animatable.Text 
        animation="fadeInUp" 
        duration={1000} 
        delay={900}
        style={styles.subtitle}
      >
        Segura • Forte • Aprovada por Gotham
      </Animatable.Text>
    </Animatable.View>
  );
}
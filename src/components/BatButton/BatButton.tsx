import React, { useState } from 'react';
import { Text, Pressable, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import generatePass from '../../services/passwordService';
import { BatTextInput } from '../BatTextInput/BatTextInput';

import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';

export function BatButton() {
  const [pass, setPass] = useState('');
  const [isGeneratePressed, setIsGeneratePressed] = useState(false);
  const [isCopyPressed, setIsCopyPressed] = useState(false);

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  async function handleCopyButton() {
    if (pass) {
      await Clipboard.setStringAsync(pass);
      Alert.alert('Sucesso!', 'Senha copiada para a área de transferência! 🦇');
    } else {
      Alert.alert('Ops!', 'Gere uma senha primeiro! 🦇');
    }
  }

  return (
    <Animatable.View animation="fadeInUp" duration={1000} delay={1200}>
      <BatTextInput pass={pass} />
      
      <Animatable.View animation="slideInLeft" duration={800} delay={1400}>
        <Pressable
          onPress={handleGenerateButton}
          onPressIn={() => setIsGeneratePressed(true)}
          onPressOut={() => setIsGeneratePressed(false)}
          style={[styles.button, isGeneratePressed && styles.buttonPressed]}
        >
          <Text style={styles.text}>🦇 GERAR SENHA</Text>
        </Pressable>
      </Animatable.View>

      <Animatable.View animation="slideInRight" duration={800} delay={1600}>
        <Pressable
          onPress={handleCopyButton}
          onPressIn={() => setIsCopyPressed(true)}
          onPressOut={() => setIsCopyPressed(false)}
          style={[styles.button, isCopyPressed && styles.buttonPressed]}
        >
          <Text style={styles.text}>⚡ COPIAR PARA ÁREA DE TRANSFERÊNCIA</Text>
        </Pressable>
      </Animatable.View>
    </Animatable.View>
  );
}
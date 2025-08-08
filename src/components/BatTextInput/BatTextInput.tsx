import React, { useEffect, useRef } from 'react';
import { TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
  pass: string;
}

export function BatTextInput(props: BatTextInputProps) {
  const inputRef = useRef<any>(null);

  useEffect(() => {
    if (props.pass && inputRef.current) {
      inputRef.current.pulse(800);
    }
  }, [props.pass]);

  return (
    <Animatable.View ref={inputRef}>
      <TextInput
        style={styles.inputer}
        placeholder="🦇 Sua senha segura aparecerá aqui..."
        placeholderTextColor="#666666"
        value={props.pass}
        editable={false}
        selectTextOnFocus={true}
      />
    </Animatable.View>
  );
}
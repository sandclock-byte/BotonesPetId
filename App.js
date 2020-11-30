import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import BotonAzul from './src/components/Botones/BotonAzul'
import BotonAcceso from './src/components/Botones/BotonAcceso'


const presionarBoton = (nombre) => {
  console.log(`Se presiono ${nombre}`);
}

export default function App() {

  const [formData, setFormData] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    formData != '' ? setIsAvailable(true) : setIsAvailable(false);
  }, [formData])

  return (
    <>
      <Text>Este es el botón</Text>
      <View >
        <TextInput
          style={styles.input}
          placeholder='Contraseña'
          placeholderTextColor='#969696'
          secureTextEntry={true}
          onChange={(e) => setFormData(e.nativeEvent.text.trim())}
        />
        <BotonAcceso
          title={'ACCESO'}
          onPress={() => presionarBoton('ACCESO')}
          available={isAvailable}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  input: {
    height: 50,
    color: '#FFF',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1E3040',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1E3040'
  },
});
import React from 'react'
import { View, Text, Button } from 'react-native'
import Registar from './src/components/Botones/Registrar'

const presionarBoton = (nombre) => {
  console.log(`Se presiono ${nombre}`);
}

export default function App() {
  return (
    <>
      <Text>Este es el botón</Text>
      <View >
        <Registar title={'REGISTRAR'} onPress={()=>presionarBoton('REGISTRAR')} />
      </View>
    </>
  );
}
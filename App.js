import React from 'react'
import { View, Text } from 'react-native'
import BotonAzul from './src/components/Botones/BotonAzul'


const presionarBoton = (nombre) => {
  console.log(`Se presiono ${nombre}`);
}

export default function App() {
  return (
    <>
      <Text>Este es el botón</Text>
      <View >
        <BotonAzul title={'REGISTRAR'} onPress={() => presionarBoton('REGISTRAR')} />
      </View>
    </>
  );
}
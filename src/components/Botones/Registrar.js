import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export default function Registrar(props) {
    const { nombre, sePresiona } = props;
    const [pressed, setPressed] = useState(false);

    return (
        <View style={{ width: '100%', alignItems: 'center' }}>
            <TouchableHighlight
                underlayColor={'white'}
                onHideUnderlay={() => { setPressed(false) }} // Cuando el botón NO es presionado
                onShowUnderlay={() => { setPressed(true) }} // Cuando el botón es presionado
                onPress={() => sePresiona(nombre)}
            >
                <View style={[styles.viewButton, pressed ? { backgroundColor: '#FFF' } : { backgroundColor: '#1D4293' }]}>
                    <Text style={[styles.text, pressed ? { color: '#1D4293' } : { color: '#FFF' }]} >{nombre}</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({

    viewButton: {
        alignContent: 'center',
        borderWidth: 1,
        borderColor: '#1D4293',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 12,
    },

    text: {
        fontSize: 15.3737,
        textAlign: 'center',
        fontFamily: 'LatoRegular',
    },
})

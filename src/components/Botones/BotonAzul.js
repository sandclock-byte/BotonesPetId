import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

export default function BotonAzul(props) {
    const { title, onPress } = props;
    const [pressed, setPressed] = useState(false);

    return (
        <>
            <TouchableHighlight
                underlayColor={false}
                onHideUnderlay={() => { setPressed(false) }} // Cuando el botón NO es presionado
                onShowUnderlay={() => { setPressed(true) }} // Cuando el botón es presionado
                onPress={onPress}
            >
                <View style={[styles.viewButton, pressed ? { backgroundColor: '#FFF' } : { backgroundColor: '#1D4293' }]}>
                    <Text style={[styles.text, pressed ? { color: '#1D4293' } : { color: '#FFF' }]} >{title}</Text>
                </View>
            </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({

    viewButton: {
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

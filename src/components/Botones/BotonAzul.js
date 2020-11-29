import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const styleNoPressed = {
    backgroundColor: '#1D4293',
    textColor: '#FFF'
};

const stylePressed = {
    backgroundColor: '#FFF',
    textColor: '#1D4293'
};
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
                <View style={[
                    styles.viewButton,
                    pressed ?
                        { backgroundColor: stylePressed.backgroundColor, borderColor: stylePressed.textColor }
                        : { backgroundColor: styleNoPressed.backgroundColor, borderColor: styleNoPressed.backgroundColor }
                ]}>
                    <Text style={[
                        styles.text,
                        pressed ?
                            { color: stylePressed.textColor }
                            : { color: styleNoPressed.textColor }
                    ]}>
                        {title}
                    </Text>
                </View>
            </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({

    viewButton: {
        borderWidth: 1,
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

import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const styleNoPressed = {
    backgroundColor: '#1E88E5',
    textColor: '#FFF'
};

const stylePressed = {
    backgroundColor: '#005CB2',
    textColor: '#FFF'
};
export default function BotonAcesso(props) {
    const { title, onPress, available } = props;
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
                        { backgroundColor: stylePressed.backgroundColor }
                        : { backgroundColor: styleNoPressed.backgroundColor }
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
        width: 200,
        height: 46,
        borderRadius: 21,
        paddingVertical: 12,
        paddingHorizontal: 12,
        alignItems: 'center',
    },

    text: {
        fontSize: 15,
    },
})

import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const styleNoAvailable = {
    backgroundColor: '#C6C6C6',
};
const styleNoPressed = {
    backgroundColor: '#1E88E5',
};

const stylePressed = {
    backgroundColor: '#005CB2',
};
export default function BotonAcesso(props) {
    const { title, onPress, available } = props;
    const [pressed, setPressed] = useState(false);

    let funcion = available ? onPress : () => { };

    return (
        <>
            <TouchableHighlight
                underlayColor={false}
                onHideUnderlay={() => { setPressed(false) }} // Cuando el botón NO es presionado
                onShowUnderlay={() => { setPressed(true) }} // Cuando el botón es presionado
                onPress={funcion}
            >
                <View style={[
                    styles.viewButton,
                    available ?
                        (pressed ?
                            { backgroundColor: stylePressed.backgroundColor }
                            : { backgroundColor: styleNoPressed.backgroundColor })
                        : { backgroundColor: styleNoAvailable.backgroundColor }
                ]}>
                    <Text style={styles.text}>
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
        color: '#FFF'
    },
})

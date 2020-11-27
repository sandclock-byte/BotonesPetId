import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Registrar() {
    return (
        <View style={{width: '100%', alignItems: 'center'}}>
            <TouchableOpacity>
                <View style={styles.viewButton}>
                    <Text style={styles.text} >REGISTRAR</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewButton: {
        alignContent: 'center',
        backgroundColor: '#1D4293',
        borderWidth: 1,
        borderColor: '#1D4293',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

    text: {
        fontSize: 15.3737,
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'LatoRegular',
    },
})

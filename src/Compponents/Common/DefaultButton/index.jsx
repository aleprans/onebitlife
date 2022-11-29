import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height
}){
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={handlePress}    
            style={[estilo.button, {width: width, height: height}]}
        >
            <Text style={estilo.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        marginBottom: 20
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
})

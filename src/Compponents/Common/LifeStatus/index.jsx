import React from "react";
import { View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

export default function LifeStatus(){
    return(
        <View style={estilo.container}>
            <Lottie
                source={require('../../../assets/education/education-1.json')}
                autoPlay
                loop
                style={estilo.educacaoAnimacao}
            />
            <Lottie
                source={require('../../../assets/money/money-100.json')}
                autoPlay
                loop
                style={estilo.financasAnimacao}
            />
            <Lottie
                source={require('../../../assets/robot/robot-100-100.json')}
                autoPlay
                loop
                style={estilo.roboAnimacao}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
    },

    roboAnimacao: {
        width: 190,
        marginTop: 30,
        marginLeft: 25
    },

    educacaoAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: "absolute"
    },
    
    financasAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 95,
        position: "absolute"
    },


})
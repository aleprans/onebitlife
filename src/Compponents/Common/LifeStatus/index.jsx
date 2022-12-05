import React, { useEffect, useState } from "react";
import { View, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';
import AnimationService from '../../../Services/AnimationService';

export default function LifeStatus(
    mindHabit,
    moneyHabit,
    bodyHabit,
    funHabit
){
    const [mind, setMind] = useState()
    const [money, setMoney] = useState()
    const [robot, setRobot] = useState()

    useEffect(()=>{
        AnimationService.AnimationStatus(
            mindHabit?.progressBar,
            moneyHabit?.progressBar,
            bodyHabit?.progressBar,
            funHabit?.progressBar,
            setMind,
            setMoney,
            setRobot
        )
    }),[mindHabit, moneyHabit, bodyHabit, funHabit]

    return(
        <View style={estilo.container}>
            <Lottie
                source={mind}
                autoPlay
                loop
                style={estilo.educacaoAnimacao}
            />
            <Lottie
                source={money}
                autoPlay
                loop
                style={estilo.financasAnimacao}
            />
            <Lottie
                source={robot}
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
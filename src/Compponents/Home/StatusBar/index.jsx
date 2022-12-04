import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ProgressBar } from 'react-native-paper';


export default function StatusBar({
    mindHabit,
    moneyHabit,
    bodyHabit,
    funHabit
}){
    return(
        <View style={estilo.container}>
            <View estyle={estilo.statusBarContainer}>
                <Image
                    source={require('../../../assets/icons/educationIcon.png')}
                    style={estilo.icon}
                />
                <ProgressBar progress={mindHabit} color={'#90b7f3'} style={estilo.progress} />
            </View>

            <View estyle={estilo.statusBarContainer}>
                <Image
                    source={require('../../../assets/icons/moneyIcon.png')}
                    style={estilo.icon}
                />
                <ProgressBar progress={moneyHabit} color={'#85bb65'} style={estilo.progress} />
            </View>

            <View estyle={estilo.statusBarContainer}>
                <Image
                    source={require('../../../assets/icons/bodyIcon.png')}
                    style={estilo.icon}
                />
                <ProgressBar progress={bodyHabit} color={'#ff0043'} style={estilo.progress} />
            </View>

            <View estyle={estilo.statusBarContainer}>
                <Image
                    source={require('../../../assets/icons/funIcon.png')}
                    style={estilo.icon}
                />
                <ProgressBar progress={funHabit} color={'#fe7f23'} style={estilo.progress} />
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#151515',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },

    statusBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6
    },

    icon: {
        width: 25,
        height: 25,
        marginRight: 5
    },

    progress: {
        borderRadius: 10,
        width: 250,
        height: 8
    }
})
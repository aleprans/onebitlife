import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


export default function ExplanationCard(){
    return(
        <View style={estilo.container}>
            <Text style={estilo.title}>
                Atravez deste APP voce vai consolidar {'\n'} 4 hábitos de áreas fundamentais:
            </Text>
            <View style={estilo.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/educationIcon.png')}
                    style={estilo.icon}
                />
                <Text style={estilo.description}>
                    <Text style={estilo.mind}>
                        Mente:  
                    </Text> Hábitos para melhorar sua inteligência / sabedoria</Text>
            </View>

            <View style={estilo.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/moneyIcon.png')}
                    style={estilo.icon}
                />
                <Text style={estilo.description}>
                    <Text style={estilo.money}>
                        Finança: 
                    </Text> Hábitos para te ajudar com controle financeiro</Text>
            </View>

            <View style={estilo.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/bodyIcon.png')}
                    style={estilo.icon}
                />
                <Text style={estilo.description}>
                    <Text style={estilo.body}>
                        Corpo: 
                    </Text> Hábitos para te mais saudável e forte</Text>
            </View>

            <View style={estilo.explanationContainer}>
                <Image
                    source={require('../../../assets/icons/funIcon.png')}
                    style={estilo.icon}
                />
                <Text style={estilo.description}>
                    <Text style={estilo.fun}>
                        Humor: 
                    </Text> Hábitos para controlar o stress {'\n'} e aumentar a felicidade.</Text>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#151515',
        width: 350,
        borderRadius: 25,
        padding: 30
    },

    title: {
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        fontSize: 16
    },

    explanationContainer:{
        flexDirection: 'row',
        marginTop: 30,

    },

    icon: {
        width: 40,
        height: 40,
        marginRight: 5,
    },

    mind: {
        color: '#90b7f3',
        fontWeight: 'bold',
    },

    money: {
        color: '#85bb65',
        fontWeight: 'bold',
    },
    
    body: {
        color: '#ff0044',
        fontWeight: 'bold',
    },
    
    fun: {
        color: '#fe7f23',
        fontWeight: 'bold',
    },

    description: {
        color: '#fff',
    }
})
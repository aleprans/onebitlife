import React from "react";
import { View, Image ,ScrollView, Text, StyleSheet } from "react-native";

export default function Start(){
    return(
        <View style={estilo.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require("../../assets/icons/logo3.png")} style={estilo.logo}/>
                    <Text style={estilo.description}>
                        Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} o melhor nivel.
                    </Text>
                </View>
            </ScrollView>

        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(21,21,21,0.98)',
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20,
    },

    description: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 60
    }
})
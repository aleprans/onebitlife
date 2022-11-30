import React from "react";
import { View, Image ,ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import LifeStatus from '../../Compponents/Common/LifeStatus'
import DefaultButton from '../../Compponents/Common/DefaultButton'

export default function Start(){

    const navigation = useNavigation()

    const handleNavAppExplanation = () => {
        navigation.navigate('AppExplanation')
    }

    return(
        <View style={estilo.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{alignItems: 'center'}}>
                    <Image source={require("../../assets/icons/logo3.png")} style={estilo.logo}/>
                    <LifeStatus />
                    <Text style={estilo.description}>
                        Vamos transformar sua vida {"\n"} em jogo, buscando sempre {"\n"} o melhor nivel.
                    </Text>
                    <DefaultButton 
                        buttonText={'Continuar'}
                        handlePress={handleNavAppExplanation}
                        width={250}
                        height={50}
                    />
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
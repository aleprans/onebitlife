import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import LifeStatus from '../../Compponents/Common/LifeStatus'
import StatusBar from "../../Compponents/Home/StatusBar";

export default function Home(){

    const navigator = useNavigation()

    function handleNavExplanation(){
        navigator.navigate('AppExplanation')
    }

    return(
        <View style={estilo.container}>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Text style={estilo.dailyChecks}> 20 dias / 80 checks</Text>
                    <LifeStatus />
                    <StatusBar />
                </View>
                <Text 
                    style={estilo.explanationText}
                    onPress={() => {
                        handleNavExplanation()
                    }}
                >
                    Ver explicação novamente.
                </Text>
            </ScrollView>
        </View>
    )
}

const estilo = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'rgba(21,21,21,0.98)'
    },

    dailyChecks: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 40
    },

    explanationText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 25
    }
})
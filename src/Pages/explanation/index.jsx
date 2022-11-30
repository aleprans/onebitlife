import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DefaultButton from "../../Compponents/Common/DefaultButton";
import ExplanationCard from '../../Compponents/explanation/explanationCard';
import { useNavigation } from '@react-navigation/native'


export default function AppExplanation() {

    const navigator = useNavigation()

    function handleNavHome(){
        navigator.navigate('Home')
    }

    return(
        <View style={estilo.container}>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Text style={estilo.title}>
                        Antes,   deixa {'\n'}eu te explicar...
                    </Text>
                    <ExplanationCard />
                    <Text style={estilo.descriptionCta}>
                        Pronto(a) para subir de nivel na vida?
                    </Text>
                    <Text style={estilo.description}>
                        Na proxima tela voce vai poder escolher {'\n'} seus 4 hábitos de forma individual.
                    </Text>
                    <DefaultButton
                        buttonText={'Continuar'}
                        handlePress={handleNavHome}
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

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginVertical: 40
    },

    descriptionCta: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10
    },
    
    description: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30
    }
})
import React from "react";
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation }from '@react-navigation/native';
import HabitsService from "../../../Services/HabitsService";


export default function UpdateExcludeButton({
    habitInput,
    handlePress,
    habitArea
}){

    const Navigation = useNavigation()

    function handleDeleteHabit(){
        HabitsService.deleteHabit(habitArea)
        .then(()=>{
            Alert.alert("Hábito excluido com sucesso!")
            Navigation.navigate('Home', {
                excludeArea: `${habitArea}`
            })
        })
        .catch((error)=> console.log(error))
    }

    return (
        <View style={estilo.container}>
            <TouchableOpacity
                style={estilo.updateButton}
                activeOpacity={0.8}
                onPress={() => {
                    Alert.alert(
                        "Ao prosseguir você vai atualizar o hábito, tem certeza?",
                        "Ao fazer isso você pode mudar o hábito, frequência e notificação",
                        [
                            {
                                text: "Cancelar"
                            },
                            {
                                text: "Atualizar",
                                onPress : handlePress
                            }
                        ]
                    )
                }}
                
                >
                    <Text style={estilo.updateButtonText}>Atualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={estilo.trashButton}
                activeOpacity={0.8}
                onPress={() => {
                    Alert.alert(
                        "Você tem certeza que deseja excluir o hábito?",
                        "Ao fazer isso você perderá todo o progresso  ou falha do hábito.",
                        [
                            {
                                text: "Cancelar",
                                onPress: () => {
                                    Alert.alert("Exclusão cancelada com sucesso!")
                                }
                            },
                            {
                                text: "Excluir",
                                onPress: handleDeleteHabit
                            }
                        ]
                    )
                }}
                >
                    <Image
                        source={require('../../../assets/icons/trash.png')}
                        style={estilo.trashIcon}
                    />
            </TouchableOpacity>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20
    },

    updateButton: {
        borderWidth: 1,
        borderColor: '#FFF',
        width: 150,
        height: 50,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    updateButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18
    },

    trashButton: {
        borderWidth: 1,
        borderColor: '#ff0044',
        borderRadius: 10,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },

    trashIcon: {
        width: 25,
        height: 25
    }
})
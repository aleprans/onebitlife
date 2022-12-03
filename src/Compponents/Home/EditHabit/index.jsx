import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function EditHabit({habit, checkColor}){

    const navigation = useNavigation()

    function handleEdit(){
        navigation.navigate('HabitPage',{
            create: false,
            habit: habit 
        })
    }

    function handleCheck(){
        console.log(`Botão de check da ${habit?.habitArea} `)
    }

    const textNotification = 
        habit?.habitNotificationTime === null
            ? `Sem notificação - ${habit?.habitFrequency}`
            : `${habit?.habitFrequency} - ${habit?.habitNotificationFrequency} - ${habit?.habitNotificationTime} - `

    return (
        <TouchableOpacity 
            activeOpacity={0.9}
            style={estilo.button}
            onPress={handleEdit}
        >
            <View style={estilo.habitText}>
                <Text style={estilo.habitTitle}>{habit?.habitName}</Text>
                <Text style={estilo.habitFrequancy}>{textNotification}</Text>
            </View>
            <TouchableOpacity 
                style={[estilo.check, {borderColor: checkColor}]}
                onPress={handleCheck}
            />
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    button: {
        backgroundColor: '#151515',
        borderRadius: 5,
        width: 320,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    habitTitle: {
        color: '#fff',
        fontWeight: 'bold'
    },

    habitFrequancy: {
        color: '#fff',

    },

    check: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 10
    }
})
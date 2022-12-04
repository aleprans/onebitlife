import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Alert, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function EditHabit({habit, checkColor}){

    const navigation = useNavigation()
    const [habitCheck, setHabitCheck] = useState()
    const [imageCheck, setImageCheck] = useState(
        require('../../../assets/icons/Mind.png')
    )

    function handleEdit(){
        navigation.navigate('HabitPage',{
            create: false,
            habit: habit 
        })
    }

    function handleCheck(){
        if(habitCheck === 0){
            setHabitCheck(1)
        }
    }

    useEffect(()=>{
        setHabitCheck(habit?.habIsChecked)
        if(habit?.habitArea === "Finaceiro"){
            setImageCheck(require('../../../assets/icons/Money.png'))
        }
        setHabitCheck(habit?.habIsChecked)
        if(habit?.habitArea === "Corpo"){
            setImageCheck(require('../../../assets/icons/Body.png'))
        }
        setHabitCheck(habit?.habIsChecked)
        if(habit?.habitArea === "Humor"){
            setImageCheck(require('../../../assets/icons/Fun.png'))
        }
    }),[]

    const textNotification = 
        habit?.habitNotificationTime === null
            ? `Sem notificação - ${habit?.habitFrequency}`
            : `Notificação ativa - ${habit?.habitNotificationFrequency} - ${habit?.habitNotificationTime}`

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
            {habitCheck === 0 ? 
                <TouchableOpacity 
                    style={[estilo.check, {borderColor: checkColor}]}
                    onPress={handleCheck}
                /> : <TouchableOpacity 
                    style={[estilo.check, {borderColor: checkColor}]}
                    onPress={handleCheck}
                    >
                        <Image source={checkImage} style={estilo.checked} />
                    </TouchableOpacity>
            }
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
    },

    checked: {
        width: 25,
        height: 25
    }
})
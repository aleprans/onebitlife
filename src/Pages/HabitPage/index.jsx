import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SelectHabit from "../../Compponents/HabitPage/SelectHabit";
import SelectFrequency from "../../Compponents/HabitPage/SelectFrequency";
import Notification from "../../Compponents/HabitPage/Notification";
import TimeDatePicker from "../../Compponents/HabitPage/DateTimePicker";
import UpdateExcludeButton from "../../Compponents/HabitPage/UpdateExcludeButton";
import DefaultButton from "../../Compponents/Common/DefaultButton";
import HabitsService from '../../Services/HabitsService';

export default function HabitPage({ route }) {

    const navigation = useNavigation();
    const [habitInput, setHabitInput] = useState()
    const [frequencyInput, setFrequencyInput] = useState()
    const [notificationToggle, setNotificationToggle] = useState()
    const [dayNotification, setDayNotification] = useState()
    const [timeNotification, setTimeNotification] = useState()

    const {create, habit} = route.params

    const habitCreated = new Date()
    const formatDate = `${habitCreated.getFullYear()}-${habitCreated.getMonth().toString().padStart(2, "0")}-${habitCreated.getDate.toString().padStart(2,"0")}`

    function handleCreateHabit(){
        if( 
            habitInput === undefined || 
            frequencyInput === undefined)
            {
            Alert.alert(
                `Você precisa selecionar um habito e uma frequencia para ${'\n'}continuar`
            )
        }else if (
            notificationToggle === true && 
            frequencyInput === "Diário" && 
            timeNotification === undefined)
            {
            Alert.alert(
                "Você precisa dizer o horário da notificação"
            )
        }else if(
            notificationToggle === true && 
            frequencyInput === "Diário" &&
            dayNotification === undefined &&
            timeNotification === undefined)
            {
            Alert.alert(
                "Você precisa dizer a frequência e o horário da notificação"
            )
        }else {
            HabitsService.createHabit({
                habitArea: habit?.habitArea,
                habitName: habit?.habitInput,
                habitFrequency: habit?.frequencyInput, 
                habitHasNotification: habit?.notificationToggle, 
                habitNotificationFrequency: habit?.dayNotification, 
                habitNotificationTime: habit?.timeNotification, 
                lastCheck: formatDate,
                daysWithOutChecks: 0, 
                progressBar: 1, 
            })
            .then(()=>{
                Alert.alert("Sucesso na criação do hábito!")
                navigation.navigate("Home", {
                    createHabit: `Created in ${habit?.habitArea}`
                })
            })
        }
    }
    
    function handleUpdateHabit(){
        if(
            notificationToggle === true &&
            !dayNotification &&
            !timeNotification
        ){
            Alert.alert(
                "Você precisa colocar a frequência e horário da notificação"
            )
        }else {
            navigation.navigate('Home', {
                updateHabit: `Update in ${habit?.habitArea}`
            })
        }
    }

    return (
        <View style={estilo.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity
                        style={estilo.backPageBtn}
                        onPress={()=> navigation.goBack()}
                    >
                        <Image
                            source={require('../../assets/icons/arrowBack.png')}
                            style={estilo.arrowBack}
                        />
                    </TouchableOpacity>
                    <View style={estilo.mainContent}>
                        <Text style={estilo.title}>Configurações {"\n"} de hábito.</Text>
                        <Text style={estilo.inputText}>Area</Text>
                        <View style={estilo.inputContainer}>
                            <Text style={estilo.area}>{habit?.habitArea}</Text>
                        </View>
                        <Text style={estilo.inputText}>Hábito</Text>
                        <SelectHabit habit={habit} habitInput={setHabitInput}/>
                        <Text style={estilo.inputText}>Frequencia</Text>
                        <SelectFrequency 
                            habitFrequency={habit?.habitFrequency}
                            frequencyInput={setFrequencyInput}
                        />
                        {frequencyInput === "Mensal" ? null : (
                            <Notification
                                notificationToggle={notificationToggle}
                                setNotificationToggle={setNotificationToggle}
                            />
                        )}
                        {notificationToggle ? (
                            frequencyInput === 'Mensal' ? null : (
                                <TimeDatePicker
                                    frequency={frequencyInput}
                                    dayNotification={dayNotification}
                                    timeNotification={timeNotification}
                                    setDayNotification={setDayNotification}
                                    setTimeNotification={setTimeNotification}
                                />
                            )
                        ): null}
                        {create === false ? (
                            <UpdateExcludeButton
                                handleUpdate={handleUpdateHabit}
                                habitArea={habitArea}
                                habitInput={habitInput}
                            />
                        ) : (
                            <View style={estilo.configButton}>
                                <DefaultButton
                                    buttonText={'Criar'}
                                    handlePress={handleCreateHabit}
                                    width={250}
                                    height={50}
                                />
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21,21,21,0.98)"
    },

    backPageBtn: {
        width: 40,
        height: 40,
        margin: 25
    },

    arrowBack: {
        width: 40,
        height: 40
    },

    mainContent: {
        width: 250,
        alignSelf: 'center'
    },

    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        fontSize: 30
    },

    inputText: {
        color: '#fff',
        fontSize: 16,
        marginTop: 35,
        marginBottom: 10,
        marginLeft: 5
    },

    inputContainer: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15
    },

    area: {
        color: '#bbb',
        fontSize: 15
    }
})
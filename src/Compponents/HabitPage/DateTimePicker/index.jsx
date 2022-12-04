import React, { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";


export default function TimeDatePicker({
    frequency,
    dayNotification,
    timeNotification,
    setDayNotification,
    setTimeNotification
}){

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState("date")
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState("-")
    const [notificationDate, setNotificationDate] = useState()
    const [notificationTime, setNotificationTime] = useState()

    const onChange = (_, selectDate) => {
        const currentDate = selectDate || date
        setShow(Platform.OS === "ios")
        setDate(currentDate)
        let tempDate = new Date(currentDate)
        const notificationHour = tempDate.getHours().toString().padStart(2, "0")
        const notificationMin = tempDate.getMinutes().toString().padStart(2, "0")
        let dateNotification

        if(frequency === "Semanal"){
            dateNotification = selected
        }
        const timeNotification = `${notificationHour}:${notificationMin}`

        setNotificationDate(dateNotification)
        setNotificationTime(timeNotification)

        if(frequency === "Diário"){
            setDayNotification("Diário")
        }else {
            setDayNotification(dateNotification)
        }
        setTimeNotification(timeNotification)
    }
    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }

    const data = [
        {key: 'Domingo', value: 'Dom'},
        {key: 'Segunda', value: 'Seg'},
        {key: 'Terça', value: 'Ter'},
        {key: 'Quarta', value: 'Qua'},
        {key: 'Quinta', value: 'Qui'},
        {key: 'Sexta', value: 'Sex'},
        {key: 'Sabado', value: 'Sab'}
    ]   
    return (
        <View>
            <TouchableOpacity
                style={estilo.button}
                onPress={()=>showMode("time")}
            >
                <Text style={estilo.buttonText}>Selecione a Hora</Text>
            </TouchableOpacity>
            <View style={estilo.textContainer}>
                {frequency === 'Diário' ? (
                    <Text style={estilo.notificationText}>
                        Dia do hábito: Diário
                    </Text>
                ) : null}
                {frequency === 'Semanal' ? (
                    <SelectList
                        data={data}
                        search={false}
                        setSelected={setSelected}
                        onSelect={()=>{
                            onChange()
                        }}
                        placeholder={selected}
                        boxStyles={estilo.boxStyle}
                        inputStyles={estilo.inputStyle}
                        dropdownStyles={estilo.dropdownStyle}
                        dropdownItemStyles={estilo.dropdownItemStyle}
                        dropdownTextStyles={estilo.dropdownTextStyle}
                        arrowicon={
                            <Image
                                source={require("../../../assets/icons/arrowDropdown.png")}
                                style={estilo.arrow}
                            />
                        }
                    />
                ) : null}
                {frequency === 'Semanal' ? (
                    <Text style={estilo.notificationText}>
                        Dia do hábito: {notificationDate}
                    </Text>
                ) : null}
                <Text style={estilo.notificationText}>
                    Horário do hábito: {notificationTime}
                </Text>
            </View>
        {show && (
            <DateTimePicker
                testID="DateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
        )}
        </View>
    )
}

const estilo = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: '#FFF',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },

    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },

    textContainer: {
        marginVertical: 20
    },

    notificationText: {
        color: '#FFF',
        fontSize: 18,
    },
    boxStyle: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15
    },

    inputStyle: {
        color: '#fff'
    },

    dropdownStyle: {
        borderWidth: 0
    },

    dropdownItemStyle: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        marginBottom: 15
    },

    dropdownTextStyle: {
        borderColor: '#bbb',
        color: '#fff'
    },

    arrow: {
        width: 20,
        height: 20
    }
})
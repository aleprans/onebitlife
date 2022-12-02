import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function Notification({ notificationToggle, setNotificationToggle}){


    const toggleSwitch = () => {
        setNotificationToggle((previusState) => !previusState)
    }
    return (
        <View style={estilo.container}>
            <Text style={estilo.title}>Notificação</Text>
            <Switch
                trackColor={{false: '#FF0044', true: '#2dbe56'}}
                thumbColor={'#FFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={notificationToggle}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },

    titleDisabled: {
        color: '#BBB',
        fontSize: 20,
        marginRight: 10
    },

    title: {
        color: '#FFF',
        fontSize: 20,
        marginRight: 10
    }
})
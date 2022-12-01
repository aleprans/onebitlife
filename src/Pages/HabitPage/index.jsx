import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HabitPage({ route }) {

    const navigation = useNavigation();
    const {create, habit} = route.params

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
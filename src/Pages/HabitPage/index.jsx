import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HabitPage() {

    const navigation = useNavigation();

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
    }
})
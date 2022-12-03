import React, { useState, useEffect }from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'

import LifeStatus from '../../Compponents/Common/LifeStatus'
import StatusBar from "../../Compponents/Home/StatusBar";
import CreateHabit from "../../Compponents/Home/CreateHabit";
import EditHabit from "../../Compponents/Home/EditHabit";
import ChangeNavigationService from '../../Services/ChangeNavigationService'

export default function Home({ route }){

    const navigator = useNavigation()
    const [mindHabit, setMindHabit] = useState()
    const [moneyHabit, setMoneyHabit] = useState()
    const [bodyHabit, setBodyHabit] = useState()
    const [funHabit, setFunHabit] = useState()
    const [robotDaysLife, setRobotDaysLife] = useState()
    const today = new Date()

    useEffect(() =>{
        ChangeNavigationService.checkShowHome(1)
        .then((showHome) => {
            const formDate = `${today.getFullYear()}-${today.getMonth().toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`
            const checkDays = new Date(formDate) - new Date(showHome.appStartData) +1
            setRobotDaysLife(checkDays.toString().padStart(2, "0"))
        })
        .catch((err) => {console.log("er: "+err)})
    },[route.params])

    function handleNavExplanation(){
        navigator.navigate('AppExplanation')
    }

    return(
        <View style={estilo.container}>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Text style={estilo.dailyChecks}>❤️ {robotDaysLife} {robotDaysLife === "01" ? "dia" : "dias"} - ✔️ 80 checks</Text>
                    <LifeStatus />
                    <StatusBar />
                    {mindHabit ? (
                        <EditHabit
                            habit={mindHabit?.habitName}
                            frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency}`}
                            habitArea={mindaHabit?.habitArea}
                            checkColor="#90b7f3"
                        />
                    ) : (
                        <CreateHabit habitArea="Mente" borderColor="#90b7f3" />
                        )}
                    {moneyHabit ? (
                        <EditHabit
                            habit={moneyHabit?.habitName}
                            frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`}
                            habitArea={moneyaHabit?.habitArea}
                            checkColor="#85bb65"
                        />
                    ) : (
                        <CreateHabit habitArea="Financeiro" borderColor="#85bb65" />
                        )}
                    {bodyHabit ? (
                        <EditHabit
                            habit={bodyHabit?.habitName}
                            frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency}`}
                            habitArea={bodyaHabit?.habitArea}
                            checkColor="#ff0044"
                        />
                    ) : (
                        <CreateHabit habitArea="Corpo" borderColor="#ff0044" />
                        )}
                    {funHabit ? (
                        <EditHabit
                            habit={funHabit?.habitName}
                            frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency}`}
                            habitArea={funaHabit?.habitArea}
                            checkColor="#fe7f23"
                        />
                    ) : (
                        <CreateHabit habitArea="Humor" borderColor="#fe7f23" />
                        )}





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
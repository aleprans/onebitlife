import React, { useState, useEffect }from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native'

import LifeStatus from '../../Compponents/Common/LifeStatus'
import StatusBar from "../../Compponents/Home/StatusBar";
import CreateHabit from "../../Compponents/Home/CreateHabit";
import EditHabit from "../../Compponents/Home/EditHabit";
import ChangeNavigationService from '../../Services/ChangeNavigationService';
import HabitsService from "../../Services/HabitsService";
import CheckService from "../../Services/CheckService";

export default function Home({ route }){

    const navigator = useNavigation()
    const [mindHabit, setMindHabit] = useState()
    const [moneyHabit, setMoneyHabit] = useState()
    const [bodyHabit, setBodyHabit] = useState()
    const [funHabit, setFunHabit] = useState()
    const [robotDaysLife, setRobotDaysLife] = useState()
    const today = new Date()

    useEffect(() =>{
        HabitsService.findByArea("Mente")
        .then((mind)=>{
            setMindHabit(mind[0])
        })
        HabitsService.findByArea("Financeiro")
        .then((money)=>{
            setMoneyHabit(money[0])
        })
        HabitsService.findByArea("Corpo")
        .then((body)=>{
            setBodyHabit(body[0])
        })
        HabitsService.findByArea("Humor")
        .then((fun)=>{
            setFunHabit(fun[0])
        })

        if(excludeArea){
            if(excludeArea == "Mente")setMindHabit(null)
            if(excludeArea == "Financeiro")setMoneyHabit(null)
            if(excludeArea == "Corpo")setBodyHabit(null)
            if(excludeArea == "Humor")setFunHabit(null)
        }

        ChangeNavigationService.checkShowHome(1)
        .then((showHome) => {
            const dt = showHome.appStartData
            const dtIni = dt.slice(0,4)+'-'+dt.slice(5,7).padStart(2,"0")+'-'+dt.slice(8, 9).padStart(2,"0")
            const formDate = `${today.getFullYear()}-${today.getMonth().toString().padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`
            const checkDays = new Date(formDate) - new Date(dtIni) + 1
            setRobotDaysLife(checkDays.toString().padStart(2, "0"))
        })
        .catch((err) => {console.log("er: "+err)})
    },[route.params])

    function handleNavExplanation(){
        navigator.navigate('AppExplanation')
    }

    const excludeArea = route.params?.excludeArea

    useEffect(()=>{
        CheckService.removeCheck(mindHabit, moneyHabit, bodyHabit, funHabit)
    }),[mindHabit, moneyHabit, bodyHabit, funHabit]

    return(
        <View style={estilo.container}>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Text style={estilo.dailyChecks}>❤️ {robotDaysLife} {robotDaysLife === "01" ? "dia" : "dias"} - ✔️ 80 checks</Text>
                    <LifeStatus 
                        mindHabit={mindHabit}
                        moneyHabit={moneyHabit}
                        bodyHabit={bodyHabit}
                        funHabit={funHabit}
                    />
                    <StatusBar 
                        mindHabit={mindHabit?.progressBar}
                        moneyHabit={moneyHabit?.progressBar}
                        bodyHabit={bodyHabit?.progressBar}
                        funHabit={funHabit?.progressBar}
                    />
                    {mindHabit ? (
                        <EditHabit
                            habit={mindHabit}
                            checkColor="#90b7f3"
                        />
                    ) : (
                        <CreateHabit habitArea="Mente" borderColor="#90b7f3" />
                        )}
                    {moneyHabit ? (
                        <EditHabit
                            habit={moneyHabit}
                            checkColor="#85bb65"
                        />
                    ) : (
                        <CreateHabit habitArea="Financeiro" borderColor="#85bb65" />
                        )}
                    {bodyHabit ? (
                        <EditHabit
                            habit={bodyHabit}
                            checkColor="#ff0044"
                        />
                    ) : (
                        <CreateHabit habitArea="Corpo" borderColor="#ff0044" />
                        )}
                    {funHabit ? (
                        <EditHabit
                            habit={funHabit}
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
import React, { useEffect, useState } from "react";
import { StyleSheet, Image } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import HabitsData from '../../../DataBase/habitData'

export default function SelectHabit({ habit, habitInput }) {

    const [selected, setSelected] = useState(
        habit?.habitName ? habit?.habitName : "-"
    )
    const [data, setData] = useState()

    useEffect(()=>{
        if(habit?.habitArea === "Mente")
            setData(HabitsData.dataMind)
        
        if(habit?.habitArea === "Financeiro")
            setData(HabitsData.dataMoney)
        
        if(habit?.habitArea === "Corpo")
            setData(HabitsData.dataBody)
        
        if(habit?.habitArea === "Humor")
            setData(HabitsData.dataFun)
        
        habitInput(habit?.habitName ? habit?.habitName : undefined)
    },[])

    return (
        <>
            <SelectList
                setSelected={setSelected}
                data={data}
                search={false}
                onSelect={()=>{
                    habitInput(selected)
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
        </>
    )
}

const estilo = StyleSheet.create({
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
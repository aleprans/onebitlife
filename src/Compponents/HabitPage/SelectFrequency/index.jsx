import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';

export default function SelectFrequency({ habitFrequency, frequencyInput}){

    const [selected, setSelected] = useState(
        habitFrequency ? habitFrequency : "-"
    )

    const data = [
        { key: 'Diário', value: 'Diário' },
        { key: 'Semanal', value: 'Semanal' },
        { key: 'Mensal', value: 'Mensal' },
    ]

    useEffect(() => {
        frequencyInput(habitFrequency ? habitFrequency : undefined)
    },[])

    return (
        <View style={{marginBottom: 20}}>
            <SelectList
                setSelected={setSelected}
                data={data}
                search={false}
                onSelect={()=>{
                    frequencyInput(selected)
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
        </View>
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
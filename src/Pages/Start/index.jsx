import React from "react";
import { View, Image ,ScrollView, Text } from "react-native";

export default function Start(){
    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image source={require("../../assets/icons/logo3.png")}/>
                    <Text>
                        Vamos transformar sua vida {"/n"} em jogo, buscando sempre {"/n"} o melhor nivel.
                    </Text>
                </View>
            </ScrollView>

        </View>
    )
}
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";
import dogimage from "../../assets/images/dog_image.jpg"


const Feedcard = () => {
    return (
        <View style={[styles.container]}>
            <Image source={dogimage} style={[styles.image]}/>
            <View style={{marginTop: 12}}>
                <Text style={[styles.nametext]}>Name</Text>
                <Text style={[styles.infotext]}>Type</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        height: 113,
        width: 308,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: COLORS.primary,
        flexDirection: "row",
        gap: 20,
    },
    image: {
        marginLeft: 20,
        alignSelf: "center",
        maxHeight: 80,
        maxWidth: 80,  
        borderRadius: 50,
    },
    nametext: {
        fontFamily: "RobotoSlab-SemiBold",
        fontSize: 20,
    },
    infotext: {
        fontFamily: "Roboto-Regular"
    },
})

export default Feedcard;
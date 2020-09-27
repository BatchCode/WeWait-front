import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// Change default opacity when user press it 
TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export const CustomBtn = ({ onPress, title, backgroundColor, width}) => (
    <TouchableOpacity 
        onPress={onPress}
        style={[
            styles.btn,
            backgroundColor && { backgroundColor },
            width && { width },
        ]}>
        <Text style={styles.btnText}>{title}  </Text>
    </TouchableOpacity>
)

const styles = new StyleSheet.create({
    btn: {
        elevation: 8,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    btnText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
})
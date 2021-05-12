import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Card from "../components/Card";
import Input from "../components/Input"
import Colors from "../constants/colors";

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Start a New Game !</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Reset" onPress={() => { }} color={Colors.accent}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Submit" onPress={() => { }} color={Colors.primary}/>
                    </View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: "center"
    }
});

export default StartGameScreen;
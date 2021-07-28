import React, { useState } from 'react'
import { ViewBase, View, Text, Button, StyleSheet, TextInput, Modal, } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer} >
                <TextInput placeholder="Course Goal" style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.btnGrouped}>
                    <View style={styles.btnCancel}>
                        <Button title="CANCEL" color="white" onPress={props.onCancel} />
                    </View>

                    <View style={styles.btnAdd}>
                        <Button title="Add" color="white" onPress={addGoalHandler} />
                    </View>

                </View>

            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',


    },
    input: {
        borderColor: 'black', width: '80%', borderWidth: 1,
        padding: 10,

    },
    btnGrouped: {
        marginTop: 13,
        width: "60%",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnCancel: {
        width: "40%",
        backgroundColor: 'red'
    },
    btnAdd: {
        width: "40%",
        backgroundColor: 'blue'
    }
})
export default GoalInput;
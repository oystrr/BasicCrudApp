import React, { useState, useEffect } from 'react';
import { TextInput, Button, StyleSheet, Alert } from 'react-native';

const DummyDataEntry = (props) => {
    const [userName, setUserName] = useState('');
    const [country, setCountry] = useState('');
    const [favorite, setFavorite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dataObject, setDataObject] = useState({});

    const pressHandler = (dataObject) => {
        setDataObject({ userName: userName, country: country, favorite: favorite, phoneNumber: phoneNumber });
        //navigating to Detail screen along with dataObject prop
        props.navigation.navigate('Detail Screen', dataObject);
    }

    //useEffect hook to ensure the updated state gets passed along the navigation.
    // useEffect( pressHandler() ={
    //     if (dataObject) {
    //         props.navigation.navigate('Detail Screen', dataObject);
    //     }
    // }, []);

    return (
        <>
            <TextInput
                style={styles.inputDummy}
                placeholder='name'
                onChangeText={(text) => setUserName(text)}
            />
            <TextInput
                style={styles.inputDummy}
                placeholder='country'
                onChangeText={(text) => setCountry(text)}
            />
            <TextInput
                style={styles.inputDummy}
                placeholder='favorite phone brand'
                onChangeText={(text) => setFavorite(text)}
            />
            <TextInput
                style={styles.inputDummy}
                placeholder='phone number'
                onChangeText={(text) => setPhoneNumber(text)}
                keyboardType='number-pad'
            />
            <Button
                title="Submit"
                onPress={() => {
                    pressHandler(dataObject)
                    //setDataObject( {userName: userName, country:country, favorite: favorite, phoneNumber: phoneNumber});
                }}
            />
        </>
    );
}

export default DummyDataEntry;

const styles = StyleSheet.create({
    inputDummy: {
        padding: 16,
        marginTop: 16,
        marginStart: 10,
        marginEnd: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }
});
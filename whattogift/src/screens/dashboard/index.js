import react, {useEffect, useCallback, useState} from 'react'
import {Button, View, Text} from 'react-native';
import Style from "../../utilities/AppStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = (props) => {

    const [token, setToken] = useState('');

    const getDataFromAsync = useCallback(async () => {
        const dataFromAsync = await AsyncStorage.getItem('Token');
        if(dataFromAsync != null){
            const data = JSON.parse(dataFromAsync);
            setToken(data.token);
        }
    }, [setToken])

    useEffect(() => {
        getDataFromAsync();
    }, [getDataFromAsync])

    console.log(token);

    return(
        <View style={Style.container}>
            <Text>Dashboard</Text>
            {/* <Button onPress={() => {props.navigation.navigate('test')}} title='Go To Test'/> */}
        </View>
    )
}

export default Dashboard;
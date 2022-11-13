import react, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-paper';
import Style from '../../utilities/AppStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        if(errorMsg) {
            Alert.alert('Login', errorMsg);
        }
    }, [errorMsg])

    const login = async() => {
        setIsLoading(true);
        if(email != "" || password != "")
        {
            try {
                const url = 'http://192.168.1.5:3001/api/account/login';
                const response = await fetch(url, {
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })

                const data = await response.json();
                if(data.status)
                {
                  AsyncStorage.setItem('Token', JSON.stringify({
                      token: data.token
                  }));

                    setErrorMsg(data.token);
                    const overview_url = 'http://192.168.1.5:3001/api/account/getOverview';
                    const overview_response = await fetch(overview_url, {
                      method: 'get',
                      headers: {
                        'Content-Type' : 'application/json',
                        'Authorization' : `Bearer ${data.token}`
                      }
                    })
                    const overview_data = await overview_response.json();
                    setErrorMsg(overview_data.message);

                    setIsLoading(false);
                }
                else
                {
                    setIsLoading(false);
                    setErrorMsg(data.message);
                }
            } catch (error) {
                setIsLoading(false);
                setErrorMsg(error.message);
            }
        } else {
            setIsLoading(false);
            setErrorMsg('All inputs required');
        }
    }

    return(
        <View style={styles.container}>
          <Text style={styles.title}>{email}</Text>
    
          <TextInput
            label="Email"
            style={styles.input}
            keyboardType= 'email-address'
            autoCapitalize="none"
            placeholder= "Email"
            value={email}
            right={<TextInput.Icon icon="email"/>}
            onChangeText={text => setEmail(text)}/>
    
        <TextInput
                label="Password"
                style={styles.input}
                keyboardType= 'default'
                placeholder= "Password"
                value={password}
                secureTextEntry
                right={<TextInput.Icon icon="eye"/>}
                onChangeText={text => setPassword(text)}/>
    
        {
            isLoading ? (<ActivityIndicator style={{marginTop: 10}}/>) : (<TouchableOpacity style={styles.btn} onPress={login}><Text>Login</Text></TouchableOpacity>)
        }
          <Text style={styles.title} onPress={() => {props.navigation.navigate('register')}} >don't have an account?</Text>
        </View>
      )
}

const styles = StyleSheet.create({
    title: {
      marginTop: 13,
      color: "#ffffff"
    },
    input: {
      marginTop: 10,
      borderRadius: 7,
      backgroundColor: 'white',
      width: '80%'
    },
    btn: {
      marginTop: 20,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F6BE00',
      width: '80%',
      borderRadius: 5
    },
    container: {
      backgroundColor: '#3a3b3c',
      flex: 1,
      padding: 30,
      alignItems: 'center',
      justifyContent: 'center'
    }
  })

export default Login;
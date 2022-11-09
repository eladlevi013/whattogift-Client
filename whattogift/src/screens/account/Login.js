import react, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import Style from '../../utilities/AppStyle';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {

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
    
          <TouchableOpacity style={styles.btn} onPress={login}>
            <Text>Login</Text>
          </TouchableOpacity>
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
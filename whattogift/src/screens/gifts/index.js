import react from 'react'
import { View, Text, Button} from 'react-native';
import Style from "../../utilities/AppStyle";

const Gifts = (props) => {
    return(
        <View style={Style.container}>
            <Text>Gifts</Text>
            <Button onPress={() => {props.navigation.navigate('test')}} title='Go To Test'/>
        </View>
    )
}

export default Gifts;
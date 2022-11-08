import react from 'react'
import { View, Text, Button} from 'react-native';
import Style from "../../utilities/AppStyle";

const Favorites = (props) => {
    return(
        <View style={Style.container}>
            <Text>Favorites</Text>
            <Button onPress={() => {props.navigation.navigate('test')}} title='Go To Test'/>
        </View>
    )
}

export default Favorites;
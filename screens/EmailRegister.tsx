import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Text, View } from '../components/Themed';
import { StyleSheet, Pressable, Image, TextInput } from 'react-native';
import DropShadow from "react-native-drop-shadow";  
import { useState } from 'react';
import {NetworkCommunicator} from "../network/NetworkCommunicator";
import registerUser = NetworkCommunicator.registerUser;




type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
export default function EmailRegister({navigation}: Props) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            const user = { username, password, name, email, avatar };
            const response = await registerUser(user);
            const authToken = response.data.authToken;
            // TODO: do something with the authToken and navigate
        } catch (e) {
            console.log("ERROR");
            console.log(e);
        }
    }

    return (
        <View style={styles.fullContainer}>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Image
                style={styles.backButton}
                source={require("../assets/images/back.png")}
                ></Image>
            </Pressable>
            
            <View style={styles.container}>
                <Image
                    style={styles.film}
                    source={require("../assets/images/film-icon.png")}></Image>
                <Text style={{fontSize: "16", color: '#707070', marginTop: -100, textAlign: 'center', marginBottom: 50,}}>Let’s get started!</Text>
                <View style={{backgroundColor: '#fffcf2'}}>
                <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            setName(value)}}
                        value={name}
                        placeholder="Name"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            setEmail(value)}}
                        value={email}
                        autoCapitalize='none'
                        placeholder="Email"
                    /> 
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            setUsername(value)}}
                        value={username}
                        autoCapitalize='none'
                        placeholder="Username"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            setPassword(value)}}
                        value={password}
                        autoCapitalize='none'
                        placeholder="Password"
                        secureTextEntry={true}
                    /> 
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            setAvatar(value)}}
                        value={avatar}
                        autoCapitalize='none'
                        placeholder="Avatar"
                    />
                        <DropShadow style={styles.shadowProp}> 
                            <Pressable style={styles.button} onPress={() => register()}>
                                <Text style={styles.continue}>REGISTER</Text>
                            </Pressable>
                        </DropShadow>
                    </View>
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontSize: "11", marginTop: 10, color: "#707070", textDecorationLine: 'underline', marginBottom: 100,}}>I ALREADY HAVE AN ACCOUNT</Text>
                </Pressable>
            </View>
        </View>
	);

    


}

const styles = StyleSheet.create({
    shadowProp: {
        shadowOffset:{width:0, height:3},  
        shadowColor:'#171717',  
        shadowOpacity:0.4,  
        shadowRadius:2,  
    },
    fullContainer: {
        flex: 10,
		backgroundColor: '#fffcf2',
    },
    container: {
		// headerShown: false,
		flex: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fffcf2',
	},
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: '#ff797f',
        fontSize: 20,
    },
    button: {
        backgroundColor: '#ff797f',
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 30,
        shadowColor: '#000',
        elevation: 20,
    },
    continue: {
        color: '#fff',
        fontSize: 24,
    },
    started: {
        fontSize: "16", 
        // marginBottom: 150, 
        color: '#707070', 
        marginTop: 0, 
        width: 150,
        textAlign: 'center',
    },
	film: {
		flex: 1,
		width: 100,
		height: 80,
		resizeMode: 'contain',
	},
    backButton: {
        // alignItems: "left",
        marginTop: 50,
        marginLeft: 40,
        width: 40,
        height: 40,
    },


});
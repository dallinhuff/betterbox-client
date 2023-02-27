import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Text, View } from '../components/Themed';
import { StyleSheet, Pressable, Image, TextInput } from 'react-native';
import DropShadow from "react-native-drop-shadow";  
import { useState } from 'react';




type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};
export default function EmailLogin({navigation}: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mismatch, setMismatch] = useState(false);

    const checkEmailAndPass = () => {
        //check if email or password doesn't exist
        //navigation.navigate()
    };

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
                <Text style={{fontSize: "16", color: '#707070', marginTop: -100, textAlign: 'center'}}>Let’s get started!</Text>
                <Text style={{fontSize: "16", color: '#707070', width: 200, textAlign: 'center', marginBottom: 40,}}>Please enter your email and password.</Text>
                <View style={{backgroundColor: '#fffcf2', marginBottom: 200,}}>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            setEmail(value)}}
                        value={email}
                        autoCapitalize='none'
                        placeholder="Email ..."
                    /> 
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            setPassword(value)}}
                        value={password}
                        autoCapitalize='none'
                        placeholder="Password ..."
                        secureTextEntry={true}
                    />
                    {mismatch && (
                        <Text style={{color: '#ff797f', textAlign: 'center', marginBottom: 10}}>Email or password is incorrect</Text>
                    )}
                    <DropShadow style={styles.shadowProp}> 
                        <Pressable style={styles.button} onPress={() => checkEmailAndPass()}>
                            <Text style={styles.continue}>LOGIN</Text>
                        </Pressable>
                    </DropShadow>
                </View>
                <Pressable onPress={() => navigation.navigate('Register')}>
                    <Text style={{ fontSize: "11", marginTop: 10, color: "#707070", textDecorationLine: 'underline', marginBottom: 100,}}>I DON'T HAVE AN ACCOUNT</Text>
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
        height: 44,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: '#ff797f',
        marginBottom: 20,
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
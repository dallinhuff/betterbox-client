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
export default function EmailRegister({navigation}: Props) {
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [emailMismatch, setEmailMismatch] = useState(false);
    const [passMismatch, setPassMismatch] = useState(false);
    const [showEmails, setShowEmails] = useState(true);
    const [showPasswords, setShowPasswords] = useState(false);

    const checkEmails = () => {
        if (email == email2) {
            setEmailMismatch(false)
            setShowEmails(false)
            setShowPasswords(true)
            
        }
        else {
            setEmailMismatch(true)
        }
    };

    const checkPasswords = () => {
        if (password == password2) {
            setPassMismatch(false)
            // register
            // navigation.navigate()
        }
        else {
            setPassMismatch(true)
        }
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
                <Text style={{fontSize: "16", color: '#707070', width: 200, textAlign: 'center'}}>Please enter your email and a secure password.</Text>
                {showEmails && (
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
                                setEmail2(value)}}
                            value={email2}
                            autoCapitalize='none'
                            placeholder="Confirm Email ..."
                        />
                        {emailMismatch && (
                            <Text style={{color: '#ff797f', textAlign: 'center', marginBottom: 10}}>Emails don't match</Text>
                        )}
                        <DropShadow style={styles.shadowProp}> 
                            <Pressable style={styles.button} onPress={() => checkEmails()}>
                                <Text style={styles.continue}>CONTINUE</Text>
                            </Pressable>
                        </DropShadow>
                    </View>
                )}
                {showPasswords && (
                    <View style={{backgroundColor: '#fffcf2', marginBottom: 200,}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => {
                                setPassword(value)}}
                            value={password}
                            autoCapitalize='none'
                            placeholder="Password ..."
                            secureTextEntry={true}
                        /> 
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => {
                                setPassword2(value)}}
                            value={password2}
                            autoCapitalize='none'
                            placeholder="Confirm Password ..."
                            secureTextEntry={true}
                        />
                        {passMismatch && (
                            <Text style={{color: '#ff797f', textAlign: 'center', marginBottom: 10}}>Passwords don't match</Text>
                        )}
                        <DropShadow style={styles.shadowProp}> 
                            <Pressable style={styles.button} onPress={() => checkPasswords()}>
                                <Text style={styles.continue}>REGISTER</Text>
                            </Pressable>
                        </DropShadow>
                    </View>

                )}
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
        marginBottom: 20,
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
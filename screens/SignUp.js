import React, { useState, useEffect } from 'react';
import { View, Pressable, StyleSheet, Text, SafeAreaView, TextInput, ActivityIndicatorBase, KeyboardAvoidingView, Platform } from 'react-native';
import { LargeButton, LargeYellowButton } from '../src/components/Buttons';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignUp({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titlefont}>| Rehabilitation Monitoring Systems</Text>

            <View style={styles.row}>
                <Text style={styles.label}>First name</Text>

                <Text style={styles.label}>Last Name</Text>
            </View>

            <View style={styles.row}>
                <TextInput
                    style={[styles.input, { backgroundColor: 'white' }]}
                    value={firstName}
                    placeholder='First Name'
                    onChangeText={setFirstName}
                />

                <TextInput
                    style={[styles.input, { backgroundColor: 'white' }]}
                    value={lastName}
                    placeholder='Last Name'
                    onChangeText={setLastName}
                />
            </View>

            {/* <View style={styles.container}> */}
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={[styles.input2, { backgroundColor: 'white' }]}
                value={password}
                placeholder='Enter Email'
                onChangeText={(text) => setEmail(text)}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={[styles.input2, { backgroundColor: 'white' }]}
                value={password}
                placeholder='Enter Password'
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={[styles.input2, { backgroundColor: 'white' }]}
                value={password}
                placeholder='Confirm Password'
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />

            <Text style={styles.position}>Which Are You?</Text>

            <View style={styles.pressableContainer}>
                <Pressable
                    style={[styles.button, role === 'Athlete' && styles.selected]}
                    onPress={() => setRole('Athlete')}
                >
                    <Text style={styles.text}>Athlete</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, role === 'Trainer' && styles.selected]}
                    onPress={() => setRole('Trainer')}
                >
                    <Text style={styles.text}>Trainer</Text>
                </Pressable>
            </View>

            <Text style={styles.font}></Text>

            {loading ? (
                <ActivityIndicatorBase size="large" color="#000ff" />
            ) : (
                <>
                    <LargeYellowButton text="Sign Up" onPress={signUp} />
                </>
            )
            }

        </View>
    );

}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        //   marginTop: 50,
        padding: 16,
        flex: 1,
        backgroundColor: '#AEB6C5'
    },
    position: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
        color: '#1E3861',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        color: '#1E3861',
        width: '50%',
    },
    input2: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginTop: 4,
        width: '50%',
    },
    titlefont: {
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 50,
        color: '#1E3861',
    },
    font: {
        fontSize: 24,
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 10,
        color: '#1E3861'
    },
    inputContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    pressableContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    button: {
        padding: 12,
        borderRadius: 4,
        width: '45%',
        marginHorizontal: 8,
        backgroundColor: '#f0f0f0',
    },
    selected: {
        backgroundColor: '#1E3861',
        color: '#D4DAE4'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1E3861',
        textAlign: 'center',
    },
});


// <SafeAreaView style={styles.container}>
//     <View>
//         <Text style={styles.titlefont}>| Rehabilitation Monitoring Systems</Text>

//         <View style={styles.inputContainer}>
//             <Text style={styles.font}>Email</Text>
//             <TextInput
//                 style={[styles.input, { backgroundColor: 'white' }]}
//                 placeholder='Enter Email'
//                 autoCapitalize='none'
//                 onChangeText={(text) => setEmail(text)}
//             />
//         </View>

//         <View style={styles.inputContainer}>
//             <Text style={styles.font}>Password</Text>

//             <TextInput
//                 style={[styles.input, { backgroundColor: 'white' }]}
//                 // value={password}
//                 placeholder='Enter Password'
//                 onChangeText={(text) => setPassword(text)}
//                 secureTextEntry={true}
//             />
//         </View>

//         <Text style={styles.font}></Text>

//         {loading ? (
//             <ActivityIndicatorBase size="large" color="#000ff" />
//         ) : (
//             <>
//                 <LargeButton text="Sign Up" onPress={signUp} />
//             </>
//         )
//         }
//     </View>
// </SafeAreaView>
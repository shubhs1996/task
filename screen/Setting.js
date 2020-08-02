import React, { useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Avatar, Divider, Card } from 'react-native-paper'
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

const Setting = () => {


    const fade1 = useRef(new Animated.Value(0.2)).current;
    const fade2 = useRef(new Animated.Value(0)).current;
    const fade3 = useRef(new Animated.Value(0)).current;
    const fade4 = useRef(new Animated.Value(0)).current;
    const fade5 = useRef(new Animated.Value(0)).current;

  
//Animation
    const fadeIn = () => {
        Animated.sequence([
            Animated.timing(fade1, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
            , Animated.timing(fade2, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(fade3, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(fade4, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(fade5, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })

        ]).start()
        //    ]).start();
    };
//end


    useEffect(() => {
        fadeIn();
    })



    return <View style={styles.screen}>

        <Animated.View style={{ opacity: fade1 }}>
        <Card style={styles.container2}>

        <Card.Content>
        <View style={styles.option}>
            <Avatar.Text style={styles.avatar} size={40} label="S" color='white' />
            <View style={styles.info}>
                <Text style={{ fontSize: 22 }}>Shubham</Text>
                <Text style={{ fontSize: 15, color: 'gray' }}>shsingh2096@gmail.com</Text>
                <Text style={{ fontSize: 15, color: 'gray' }}>9958774942</Text>
            </View>
            </View>
            </Card.Content>
            </Card>
        </Animated.View>



        <Animated.View style={{ opacity: fade2 }}>
            <Card style={styles.container2}>
                <Card.Content>
                    <View style={styles.option}>
                        <Avatar.Icon style={{ backgroundColor: 'white' }} icon={'home'} size={35} color='gray' />
                        <View style={styles.info}>
                            <Text style={{ fontSize: 18 }}>Add Flat/Villa/Workplace</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
        </Animated.View>



        <Animated.View style={{ opacity: fade3 }}>
            <Card style={styles.container2}>
                <Card.Content>
                    <View style={styles.option}>
                        <Avatar.Icon style={{ backgroundColor: 'red' }} icon={'security'} size={35} />
                        <View style={styles.information}>
                            <Text style={{ fontSize: 18 }}>Security Alert List</Text>
                        </View>
                        <AntDesign name="right" size={18} color="gray" />
                    </View>
                </Card.Content>
            </Card>
        </Animated.View>



        <Animated.View style={{ opacity: fade4 }}>

            <Card style={styles.container2}>
                <Card.Content>
                    <View style={styles.option}>
                        <Avatar.Icon style={{ backgroundColor: 'blue' }} icon={'message'} size={35} />
                        <View style={styles.information}>
                            <Text style={{ fontSize: 18 }}>Support & Feedback</Text>
                        </View>
                        <AntDesign name="right" size={18} color="gray" />
                    </View>


                    <Divider style={styles.divider} />

                    <View style={styles.option}>
                        <Avatar.Icon style={{ backgroundColor: 'violet' }} icon={'security'} size={35} color={'white'}/>
                        <View style={styles.information}>
                            <Text style={{ fontSize: 18 }}>Tell a friend about MyGate</Text>
                        </View>
                        <AntDesign name="right" size={18} color="gray" />
                    </View>


                    <Divider style={styles.divider} />


                    <View style={styles.option}>
                        <Avatar.Icon style={{ backgroundColor: '#ed6b61' }} icon={'logout'} size={35} color='white'/>
                        <View style={styles.info}>
                            <Text style={{ fontSize: 18 }}>Logout</Text>
                        </View>

                    </View>
                </Card.Content>
            </Card>
        </Animated.View>

        <Animated.View  style={{opacity:fade5}}>
        <View style={styles.AppInfo}>
        <View style={styles.logo}>
        <Avatar.Icon icon={'home'} size={45}  style={{backgroundColor:'white'}}/>
        <Text style={{fontSize:25}}>MyGate</Text>
        </View>
        <View style={styles.condition}>
        <TouchableOpacity>
        <Text style={{color:'red'}}>Term & Conditions</Text>
        </TouchableOpacity>
        <Text style={{color:'red'}}>|</Text>
        <TouchableOpacity>
        <Text style={{color:'red'}}>Privacy Policy</Text>
        </TouchableOpacity>
        </View>
        <Text>version 1.0.0</Text>
        </View>
        </Animated.View>
    </View>

}

Setting.navigationOptions=()=>{
    return {
        headerTitle: 'Settings',
        headerStyle: {
            backgroundColor: '#ed6b61'
        },
        headerTintColor:'white',
        headerTitleStyle: {
            color: 'white',
            fontSize: 25
        },
    }
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems:'center'
    },
    avatar: {
        backgroundColor: '#ed6b61'
    },
    info: {
        width: '80%',
    },
    container2: {
        width: '95%',
        marginHorizontal: '2.5%',
        marginTop: 20
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding:2
    },

    information: {
        width: '70%'
    },
    divider:{
        width:'90%',
        marginHorizontal:'5%',
        marginVertical:5
    },
    AppInfo:{
        width:'95%',
        position:'absolute',
        marginHorizontal:'2.5%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:120,
    },
    logo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:'35%',
    },
    condition:{
        flexDirection:'row',
        width:'55%',
        justifyContent:'space-around'
    }

})


export default Setting
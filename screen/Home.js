import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';


import HeaderButton from '../components/HeaderButton'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = (props) => {


    const onpressHandler=()=>{
        props.navigation.navigate('RequestDemo')
    }

    return <View style={styles.screen}>
        <View style={styles.person}>
            <Ionicons name="md-person" size={90} color="gray" />
        </View>
        <Text style={styles.name}>Shubham Singh</Text>
        <TouchableOpacity onPress={()=>console.log('Add villa')}>
        <View style={styles.options}>
            <Text style={styles.optionText}> ADD FLAT/VILLA </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>console.log('Add workplace')}>
        <View style={styles.options}>
            <Text style={styles.optionText}>ADD WORKPLACE</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.note}>
            <Text style={styles.noteText}>
                Is your community using MyGate? No, request a callback for more information.
  </Text></View>
  <TouchableOpacity onPress={onpressHandler}>
        <View style={{ ...styles.options, borderColor: 'gray' }}>
            <Text style={{ ...styles.optionText, textDecorationLine: 'underline', color: 'gray' }}>REQUEST CALLBACK</Text>
        </View>
        </TouchableOpacity>
    </View>

}


Home.navigationOptions = (navData) => {
    return {
        headerTitle: 'My Gate',
        headerStyle: {
            backgroundColor: '#ed6b61'
        },
        headerTitleStyle: {
            textAlign: 'center',
            color: 'white',
            marginLeft: '20%',
            fontSize: 25
        },
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-settings"
                    onPress={() =>navData.navigation.navigate('Setting')}
                />
            </HeaderButtons>
        )
    }
}


const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    person: {
        width: 100,
        height: 100,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 100
    },
    name: {
        fontSize: 22,
        marginTop: 10
    },
    options: {
        width: '70%',
        padding: 15,
        marginHorizontal: '15%',
        borderWidth: 1.5,
        marginTop: 20,
        borderColor: '#ed6b61',
        borderRadius: 30,
    },
    optionText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ed6b61'
    },
    note: {
        marginTop: 50,
        width: '80%',
        marginHorizontal: '10%',

    },
    noteText: {
        fontSize: 18,
        textAlign: 'center'
    }
})

export default Home
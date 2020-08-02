import { createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screen/Home'
import Setting from '../screen/Setting'
import RequestDemo from '../screen/RequestDemo'


const stackNavigator = createStackNavigator({
    Home: Home,
    Setting: Setting,
    RequestDemo: RequestDemo
})




const Navigation = createAppContainer(stackNavigator)

export default Navigation
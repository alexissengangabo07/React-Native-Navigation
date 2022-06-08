import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Home'
import About from './About'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Notification from './Notification'

const Tab = createBottomTabNavigator()

function TabNav() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, tabBarStyle:{backgroundColor: 'lightblue', borderTopLeftRadius: 30,
    borderTopRightRadius:30}, tabBarActiveBackgroundColor: "#7dc3db"
    }}>
        <Tab.Screen name="Home" component={Home} options={{ title: 'Home' , 
          headerShown: true,
          tabBarIcon: () => <MaterialIcons name='home' size={35} />
          }} />
           <Tab.Screen name="Notification" component={Notification} options={{
        tabBarIcon: () => <MaterialIcons name='bell-outline' size={30} />,
        tabBarBadge: 2
         }} />
        <Tab.Screen name="About" component={About} options={{
        tabBarIcon: () => <MaterialIcons name='information' size={30} />

         }} />
    </Tab.Navigator>
  )
}

export default TabNav
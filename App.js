import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View, Text, SafeAreaView, ScrollView, StatusBar, 
  Image, Button, TouchableOpacity, Alert
} from 'react-native';
import style from './style'; 
import Page1 from './components/Page1';

const StackNav = createNativeStackNavigator();

function App() {
  return (
      <SafeAreaView style={style.container}>
        <StatusBar barStyle={"light-content"} hidden={false} backgroundColor="#00BCD4"  />
        <ScrollView>
          <View style={style.mainContent}>
          <Text style={style.textTitle}> Users</Text>
              <TouchableOpacity style={style.trendingItems} onPress={() => Alert.alert('')}>
              <View>
                      <Image source={require("./images/img-1-new.png")} style={style.imgSmall} />
                  </View>
                  <View>
                      <Text class="username">@tegan</Text>
                      <Text class="trending-detail">World Peace Builder</Text>
                  </View>
              </TouchableOpacity>
              
              <TouchableOpacity style={style.trendingItems} onPress={() => Alert.alert('')}>
                  <View>
                      <Image source={require("./images/img-1.png")} style={style.imgSmall} />
                  </View>
                  <View>
                      <Text class="username">@morgan</Text>
                      <Text class="trending-detail">Super Cool Project</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.trendingItems} onPress={() => Alert.alert('')}>
                  <View>
                      <Image source={require("./images/img-3.png")} style={style.imgSmall} />
                  </View>
                  <View>
                      <Text class="username">@kendall</Text>
                      <Text class="trending-detail">Life Changing App</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.trendingItems} onPress={() => Alert.alert('')}>
                  <View>
                      <Image source={require("./images/img-4.png")} style={style.imgSmall} />
                  </View>
                  <View>
                      <Text class="username">@alex</Text>
                      <Text class="trending-detail">No Traffic Maker</Text>
                  </View>
              </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default App;
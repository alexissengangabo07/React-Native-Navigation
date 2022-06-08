import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  View, Text, SafeAreaView, ScrollView, StatusBar, 
  Image, Button, TouchableOpacity, Alert
} from 'react-native';
import style from '../style'; 

const Tab = createBottomTabNavigator();

function Home({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
    <StatusBar barStyle={"light-content"} hidden={false} backgroundColor="#00BCD4"  />
    <ScrollView>
      <View style={style.mainContent}>
      <Text style={style.textTitle}> Users</Text>
          <TouchableOpacity style={style.trendingItems} onPress={() => navigation.navigate('Detail')}>
          <View>
                  <Image source={require("../images/img-1-new.png")} style={style.imgSmall} />
              </View>
              <View>
                  <Text style={style.textBold}>@tegan</Text>
                  <Text style={style.textSmallGray}>World Peace Builder</Text>
              </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={style.trendingItems}  onPress={() => navigation.navigate('Detail')}>
              <View>
                  <Image source={require("../images/img-1.png")} style={style.imgSmall} />
              </View>
              <View>
                  <Text style={style.textBold}>@morgan</Text>
                  <Text style={style.textSmallGray}>Super Cool Project</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.trendingItems}  onPress={() => navigation.navigate('Detail')}>
              <View>
                  <Image source={require("../images/img-3.png")} style={style.imgSmall} />
              </View>
              <View>
                  <Text style={style.textBold}>@kendall</Text>
                  <Text style={style.textSmallGray}>Life Changing App</Text>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={style.trendingItems}  onPress={() => navigation.navigate('Detail')}>
              <View>
                  <Image source={require("../images/img-4.png")} style={style.imgSmall} />
              </View>
              <View>
                  <Text style={style.textBold}>@alex</Text>
                  <Text style={style.textSmallGray}>No Traffic Maker</Text>
              </View>
          </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default Home
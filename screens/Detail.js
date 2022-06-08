import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import style from '../style'; 

function Page1() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
      <View>
      <Text>MORE DETAILS</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Page1
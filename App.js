import React from 'react';
import { 
  View, Text, SafeAreaView, ScrollView, StatusBar, 
  Image, Button
} from 'react-native';
import style from './style'; 

function App() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle={"light-content"} hidden={false} backgroundColor="#00BCD4"  />
      <ScrollView>
        <View>
        <Text>Treding</Text>
        <View class="trending annonces">
            <View style={style.trendingItems}>
                <View>
                    <Image source={require("./images/img-1-new.png")} style={style.imgSmall} />
                </View>
                <View>
                    <Text class="username">@tegan</Text>
                    <Text class="trending-detail">World Peace Builder</Text>
                </View>
            </View>
            <View style={style.trendingItems}>
                <View>
                    <Image source={require("./images/img-1.png")} style={style.imgSmall} />
                </View>
                <View>
                    <Text class="username">@morgan</Text>
                    <Text class="trending-detail">Super Cool Project</Text>
                </View>
            </View>
            <View style={style.trendingItems}>
                <View>
                    <Image source={require("./images/img-3.png")} style={style.imgSmall} />
                </View>
                <View>
                    <Text class="username">@kendall</Text>
                    <Text class="trending-detail">Life Changing App</Text>
                </View>
            </View>
            <View style={style.trendingItems}>
                <View>
                    <Image source={require("./images/img-4.png")} style={style.imgSmall} />
                </View>
                <View>
                    <Text class="username">@alex</Text>
                    <Text class="trending-detail">No Traffic Maker</Text>
                </View>
            </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;
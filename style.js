import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container: {
        backgroundColor: "#e1e7ef",
        height: '100%'
    },
    mainContent: {
        marginLeft: 8,
        marginRight: 8,
    },
    imgSmall: {
        height: 100,
        width: 100,
        borderRadius: 50
    },
    trendingItems: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
        margin: 5,
        borderRadius: 7,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 6
    },
    textTitle : {
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 6
    },
    textSmallGray: {
        fontSize: 10,
        color: 'gray'
    }
  });

  export default style;
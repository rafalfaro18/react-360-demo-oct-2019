import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  asset,
} from 'react-360';

export default class Hello360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
        <View style={{flexDirection: 'row', width: 900, height: 400, padding: 20}}>
          <View style={{backgroundColor: 'blue', flex: 0.3}}>
            <Text style={{color: 'black'}}>Hello World!</Text>
          </View>
          <View style={{backgroundColor: 'red', flex: 0.3}}>
          </View>
          <View style={{backgroundColor: 'transparent', flex: 0.3}}>
            <Image style={{width: 300, height: 200, transform: [{scaleY : 0.5},{scaleX : 0.5}] }} source={asset('600x400.png')} />
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);

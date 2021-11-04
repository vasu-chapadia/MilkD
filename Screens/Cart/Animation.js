import React from "react";
import { StyleSheet, View,Text } from "react-native";

import LottieView from "lottie-react-native";

export default function Animation() {
  return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
      <LottieView
        source={require("../../assets/36605-shopping-cart.json")}
        autoPlay
        style={styles.animation}
      />
      <Text style={{fontWeight: 'bold',fontSize:20,alignSelf:'center'}}>Cart Is Empty</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 150,
    height: 150,
  },
});
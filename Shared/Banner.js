import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";

var { width } = Dimensions.get("window");
const IMAGES = {
  image1: require('../assets/1.png'),
  image2: require('../assets/2.png'),
  image3: require('../assets/3.png'),
  image4: require('../assets/4.png'),
};
const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
{/* <a href="https://ibb.co/r48k1py"><img src="https://i.ibb.co/wMGyxQ6/1.png" alt="1" border="0"></a>
<a href="https://ibb.co/TLWJSFp"><img src="https://i.ibb.co/RyjtmVZ/2.png" alt="2" border="0"></a>
<a href="https://ibb.co/88Vf22n"><img src="https://i.ibb.co/h8v4HHx/3.png" alt="3" border="0"></a>
<a href="https://ibb.co/x6bbyw4"><img src="https://i.ibb.co/L1yyMBG/4.png" alt="4" border="0"></a> */}
  useEffect(() => {
    setBannerData([
      "https://i.ibb.co/wMGyxQ6/1.png",
      "https://i.ibb.co/RyjtmVZ/2.png",
      "https://i.ibb.co/h8v4HHx/3.png",
      "https://i.ibb.co/L1yyMBG/4.png",
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{ height: width / 2 }}
            showButtons={false}
            autoplay={true}
            autoplayTimeout={2}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;

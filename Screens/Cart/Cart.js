import React from "react";
import { View, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { Container, Text, Left, Right, H1, Button } from "native-base";
import Animation from "./Animation";
import { connect } from "react-redux";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/FontAwesome";
import * as actions from "../../Redux/Actions/cartActions";
import CartItem from "./CartItem";
var { height, width } = Dimensions.get("window");
const Cart = (props) => {
  var total = 0;
  props.cartItems.forEach((cart) => {
    return (total = total + cart.product.price);
  });
  return (
    <>
      {props.cartItems.length ? (
        <Container>
          <H1 style={{ alignSelf: "center" }}>Cart</H1>
          <SwipeListView
            data={props.cartItems}
            renderItem={(data) => {
              return <CartItem item={data} />;
            }}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity
                  style={styles.hiddenButton}
                  onPress={() => props.removeFromCart(data.item)}
                >
                  <Icon name="trash" color={"white"} size={30} />
                </TouchableOpacity>
              </View>
            )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
          />
          <View style={styles.bottomContainer}>
            <Left>
              <Text style={styles.price}>₹{total}</Text>
            </Left>
            <Right>
              <Button
                transparent
                rounded
                size="sm"
                variant="outline"
                onPress={() => props.clearCart()}
              >
                <Text>Clear</Text>
              </Button>
            </Right>
            <Right>
              <Button
                transparent
                rounded
                size="sm"
                variant="outline"
                onPress={() => props.navigation.navigate("Checkout")}
              >
                <Text>Checkout</Text>
              </Button>
            </Right>
          </View>
        </Container>
      ) : (
        <Container style={styles.emptyContainer}>
          <View>
            <Animation />
          </View>
        </Container>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};
const styles = StyleSheet.create({
  emptyContainer: {
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    elevation: 20,
    margin: 10,
  },
  price: {
    fontSize: 18,
    margin: 20,
    color: "red",
  },
  hiddenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  hiddenButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 25,
    height: 70,
    width: width / 1.2,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

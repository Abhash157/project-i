import React from "react";
import { View, Image, StyleSheet, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HomeScreen from "./home";
const LoginPage = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100vw",
        }}
      >
        <Image source={require("../assets/images/bg.jpg")} />
      </View>
      <View
        style={{
          position: "absolute",
          top: "10%",
          height: "100px",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 11,
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/shahid-logo.png")}
            style={{
              width: "160%",
              height: "160%",
              //   backgroundColor: "red",
              margin: "auto",
            }}
          />
        </View>
        <View
          style={{
            flex: 22,
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.CollegeTitle}>Shahid Smarak</Text>
          <Text style={styles.CollegeTitle}>College</Text>
          <Text style={styles.address}>Kirtipur, Ktm</Text>
        </View>
      </View>

      <View style={styles.loginBox}>
        <View style={styles.loginField}>
          <Image
            source={require("../assets/images/email.png")}
            style={styles.loginIcon}
          />
          <TextInput
            id="email"
            style={styles.credtitle}
            placeholder="E-mail ID"
          />
        </View>
        <View style={styles.loginField}>
          <Image
            source={require("../assets/images/pass.png")}
            style={styles.loginIcon}
          />
          <TextInput
            id="password"
            style={styles.credtitle}
            secureTextEntry
            placeholder="Password"
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={navigation.navigate(HomeScreen)}
        >
          Login
        </TouchableOpacity>
      </View>
    </View>
  );
};

const colors = {
  primary: "#aa8d49",
  secondary: "#07294d",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cc0",
  },
  CollegeTitle: {
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "OldEnglshFive",
    fontSize: 24,
    fontWeight: 700,
    textTransform: "uppercase",
    textAlign: "center",
  },
  loginBox: {
    position: "absolute",
    top: "45%",
    bg: "green",
  },
  loginField: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: "2px",
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "red",
  },
  credtitle: {
    fontSize: "14px",
    // backgroundColor: '#ccce',
    color: colors.secondary,
    padding: "10px",
    margin: "2px",
    width: "70vw",
    maxWidth: "280px",
    outlineStyle: "none",
  },
  loginIcon: {
    height: "50px",
    width: "50px",
  },
  loginButton: {
    padding: "10px",
    backgroundColor: colors.secondary,
    color: "white",
    marginTop: "30px",
    borderRadius: "40px",
  },
});

export default LoginPage;

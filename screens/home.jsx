import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Component,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Elements } from "@/constants/Elements";
import { Colors } from "@/constants/Colors";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[styles.container, Elements.centered]}>
      <View style={[styles.profileDetails, Elements.centered]}>
        <View style={styles.profilePictureBox}>
          <View style={styles.bigCircle}></View>
          <View style={[styles.circle]}>
            <Image
              source={require("../assets/images/abhash.jpeg")}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </View>
          <View style={styles.profileName}>Abhash Limbu</View>
        </View>

        <View style={styles.profileTextBox}>
          <View style={styles.profileSummary}>
            <View
              style={[
                {
                  width: "100%",
                  // backgroundColor: 'red',
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
                Elements.flexMe,
              ]}
            >
              <Text style={[Elements.flexMe, styles.profileText]}>
                Grade: Bachelor
              </Text>
              <Text style={[Elements.flexMe, styles.profileText]}>
                Gender: Male
              </Text>
            </View>
            <Text style={[Elements.flexMe, styles.profileText]}>
              Date: 2024/01/01
            </Text>
            <Text style={[Elements.flexMe, styles.profileText]}>
              Section: A
            </Text>
            <Text style={[Elements.flexMe, styles.profileText]}>ID: 7777</Text>
          </View>
        </View>
      </View>

      <View style={styles.options}>
        <View style={styles.optionsBox}>
          <View style={styles.optionsRow}>
            <View style={styles.optionsButton}>
              <Image source={require("../assets/images/favicon.png")} />
              <Text style={styles.optionsText}>Assignment</Text>
            </View>
            <View style={styles.optionsButton}>
              <Image source={require("../assets/images/favicon.png")} />
              <Text style={styles.optionsText}>Library</Text>
            </View>
            <View style={styles.optionsButton}>
              <Image source={require("../assets/images/favicon.png")} />
              <Text style={styles.optionsText}>Routine</Text>
            </View>
            <View style={styles.optionsButton}>
              <Image source={require("../assets/images/favicon.png")} />
              <Text style={styles.optionsText}>Lesson Plans</Text>
            </View>
          </View>
          <View style={styles.optionsRow}>
            <View style={styles.optionsButton}>
              <Image source={require("../assets/images/favicon.png")} />
              <Text style={styles.optionsText}>Teaching</Text>
            </View>
            <View style={styles.optionsButton}>
              <Image source={require("../assets/images/favicon.png")} />
              <Text style={styles.optionsText}>Exam Routine</Text>
            </View>
            <View style={styles.optionsButton}>
              <Image source={require("../assets/images/favicon.png")} />
              <Text style={styles.optionsText}>Results</Text>
            </View>
            <View style={styles.optionsButton}>
              <Image source={require("../assets/images/favicon.png")} />
              <Text style={styles.optionsText}>Calender</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View
          style={[
            styles.footerCollege,
            {
              flex: 5,
            },
          ]}
        >
          <Image />
          <Text style={styles.footerCollegeText}>Shahid Smarak College</Text>
        </View>
        <View
          style={[
            styles.footerCollege,
            {
              flex: 2,
            },
          ]}
        >
          <Image />
          <TouchableHighlight>
            <View>Leave Application</View>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};
const bigCircleSize = 165;
const circleSize = 110;
const circleMinus = (bigCircleSize - circleSize) / 2;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.light.primary,
  },
  profileDetails: {
    // backgroundColor: 'yellow',
    height: circleSize + "px",
    width: "85%",
    margin: "auto",
    marginTop: "10px",
    flexDirection: "row",
  },
  profilePictureBox: {
    zIndex: 100,
  },
  profileTextBox: {
    width: "calc(100% - 130px)",
    backgroundColor: Colors.light.secondary,
    borderRadius: "12px",
  },
  profileName: {
    marginTop: "5px",
    height: "10px",
    position: "absolute",
    bottom: "-20px",
    fontWeight: "600",
  },
  bigCircle: {
    backgroundColor: Colors.light.primary,
    height: bigCircleSize + "px",
    width: bigCircleSize + "px",
    borderRadius: "50%",
    position: "absolute",
    top: 0,
    transform: "translate(-" + circleMinus + "px,-" + circleMinus + "px)",
    position: "absolute",
  },
  circle: {
    backgroundColor: "brown",
    height: circleSize + "px",
    width: circleSize + "px",
    border: "1px " + Colors.light.secondary + " solid",
    borderRadius: "50%",
    overflow: "hidden",
  },
  profileSummary: {
    // backgroundColor: 'green',
    flexDirection: "row",
    margin: "auto",
    marginLeft: "35px",
    marginRight: "5px",
    height: "90%",
    // alignContent: 'space-between',
    alignItems: "left",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  profileText: {
    fontSize: "15px",
    color: Colors.light.white,
  },

  options: {
    // backgroundColor: 'red',
    flex: 65,
  },
  optionsBox: {
    height: "80%",
    width: "90%",
    backgroundColor: "#5553",
    margin: "auto",
    border: "3px " + Colors.light.secondaryLow + " solid",
    borderRadius: "15px",
  },
  optionsRow: {
    flex: 1,
    flexDirection: "row",
  },
  optionsButton: {
    height: "100px",
    width: "90px",
    margin: "auto",
    // backgroundColor: 'green',
    border: "2px " + Colors.light.secondaryLow + " solid",
    borderRadius: "15px",
    justifyContent: "center",
    alignItems: "center",
  },
  optionsText: {
    position: "absolute",
    bottom: "-18px",
    width: "90px",
    textAlign: "center",
  },

  footer: {
    // backgroundColor: 'blue',
    flex: 10,
    flexDirection: "row",
  },
  footerCollege: {
    backgroundColor: "none",
  },
  footerCollegeText: {
    backgroundColor: "none",
  },
});

export default HomeScreen;

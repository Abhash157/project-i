import { React, useState } from "react";
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

const HomeScreen = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <SafeAreaView style={[styles.container, Elements.centered]}>
      <SafeAreaView style={styles.background}>
        <Image
          source={require("../assets/images/bg3.jpg")}
          style={styles.background}
        />
      </SafeAreaView>
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

      <View style={styles.optionContainer}>
        <View style={styles.PreOptions}>
          <View style={styles.PreOptionsBox}>
            <View style={styles.optionsRow}>
              <View style={styles.optionsButton}>
                <Image
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={[styles.btnImage, isHovered && styles.hoveredImage]}
                  source={require("../assets/images/homework.png")}
                />
                <Text style={styles.optionsText}>Statement</Text>
              </View>
              <View style={styles.optionsButton}>
                <Image
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={[styles.btnImage, isHovered && styles.hoveredImage]}
                  source={require("../assets/images/attendance.png")}
                />
                <Text style={styles.optionsText}>Attendance</Text>
              </View>
              <View style={styles.optionsButton}>
                <Image
                  style={styles.btnImage}
                  source={require("../assets/images/homework.png")}
                />
                <Text style={styles.optionsText}>News</Text>
              </View>
              <View style={styles.optionsButton}>
                <Image
                  style={styles.btnImage}
                  source={require("../assets/images/homework.png")}
                />
                <Text style={styles.optionsText}>Homework</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.options}>
          <View style={styles.optionsBox}>
            <View style={styles.optionsRow}>
              <View style={styles.optionsButton}>
                <Image
                  style={styles.btnImage}
                  source={require("../assets/images/assignments.png")}
                />
                <Text style={styles.optionsText}>Assignments</Text>
              </View>
              <View style={styles.optionsButton}>
                <Image
                  style={styles.btnImage}
                  source={require("../assets/images/library.png")}
                />
                <Text style={styles.optionsText}>Library</Text>
              </View>
              <View style={styles.optionsButton}>
                <Image
                  style={styles.btnImage}
                  source={require("../assets/images/homework.png")}
                />
                <Text style={styles.optionsText}>Routine</Text>
              </View>
              <View style={styles.optionsButton}>
                <Image
                  style={styles.btnImage}
                  source={require("../assets/images/lessons.png")}
                />
                <Text style={styles.optionsText}>Lesson Plans</Text>
              </View>
            </View>
            <View style={styles.optionsRow}>
              <View style={styles.optionsButton}>
                <Image
                  style={styles.btnImage}
                  source={require("../assets/images/homework.png")}
                />
                <Text style={styles.optionsText}>Teaching</Text>
              </View>
              <View style={styles.optionsButton}>
                <Image
                  style={styles.btnImage}
                  source={require("../assets/images/homework.png")}
                />
                <Text style={styles.optionsText}>Exam Routine</Text>
              </View>
              <View style={styles.optionsButton}>
                <Image
                  style={styles.btnImage}
                  source={require("../assets/images/homework.png")}
                />
                <Text style={styles.optionsText}>Results</Text>
              </View>
              <View style={styles.optionsButton}>
                <Image
                  style={styles.btnImage}
                  source={require("../assets/images/Calendar.png")}
                />
                <Text style={styles.optionsText}>Calender</Text>
              </View>
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

const bigCircleSize = 195;
const circleSize = 110;
const circleMinus = (bigCircleSize - circleSize) / 2;

const styles = StyleSheet.create({
  background: {
    // backgroundColor: "linear-gradient(to left, #000, #fff)",
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100vh",
    width: "100vw",
  },
  container: {
    height: "100%",
    backgroundColor: "red",
  },
  profileDetails: {
    // backgroundColor: "brown",
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
    marginLeft: "10px",
  },
  profileName: {
    marginTop: "5px",
    height: "10px",
    position: "absolute",
    bottom: "-20px",
    fontWeight: "600",
  },
  bigCircle: {
    backgroundImage: "linear-gradient(90deg, #eeea55, #e9ed50)",
    // backgroundColor: 'red',
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

  optionContainer: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "blue",
    marginTop: "40px",
    height: "60vh",
  },
  PreOptions: {
    flex: 30,
  },
  options: {
    // backgroundColor: 'red',
    flex: 60,
  },
  PreOptionsBox: {
    height: "100%",
    width: "90%",
    backgroundColor: "#5553",
    margin: "auto",
    border: "3px " + Colors.light.secondaryLow + " solid",
    borderRadius: "15px",
  },
  optionsBox: {
    height: "90%",
    width: "90%",
    backgroundColor: "#5553",
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
    margin: "auto",
    border: "1px " + Colors.light.secondaryLow + " solid",
    borderRadius: "15px",
  },
  optionsRow: {
    flex: 1,
    flexDirection: "row",
    gap: "10px",
    marginBottom: "10px",
    // backgroundColor: "brown",
    // border: "1px solid black",
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
  btnImage: {
    height: "100%",
    width: "100%",
  },
  hoveredImage: {
    height: "120%",
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

import React from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  const [state, setState] = React.useState({ email: "", password: "" });

  const login = () => {
    if (validate()) {
      alert("Success");
    }
  };

  const validate = () => {
    let { email, password } = state;
    if (!email) {
      alert("Please enter email");
      return false;
    } else if (!validateEmail(email)) {
      alert("Please enter valid email");
      return false;
    } else if (!password) {
      alert("Please enter password");
      return false;
    } else return true;
  };

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/splash.jpg")}
        style={styles.backImage}
      >
        <Text style={styles.text}>PLANTS</Text>
        <Text style={styles.base}>We help you to live</Text>

        <Text style={styles.base}>feel free life from stress</Text>
      </ImageBackground>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="white"
        translucent={false}
      />
      <View style={styles.circle}>
        <Text style={styles.innerText}>x</Text>
      </View>
      <TextInput
        placeholder="Email:"
        value={state.email}
        onChangeText={(e) => setState({ ...state, email: e })}
        type="text"
        name="email"
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Password:"
        secureTextEntry={true}
        keyboardType="numeric"
        maxLength={8}
        value={state.password}
        onChangeText={(e) => setState({ ...state, password: e })}
        blurOnSubmit={true}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <Text style={styles.bottom}>New Account?</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e0ebeb" },
  backImage: { justifyContent: "center", alignItems: "center", height: 300 },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Cochin",
    padding: 30,
  },
  base: {
    fontSize: 25,
    color: "white",
    fontFamily: "Cochin",
    fontWeight: "700",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "white",
    marginHorizontal: 170,
  },
  innerText: { fontSize: 30, textAlign: "center" },
  input: {
    fontWeight: "500",
    fontSize: 25,
    color: "black",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#eff5f5",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    margin: 10,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 18,
    paddingHorizontal: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#eff5f5",
    margin: 10,
  },
  buttonText: { fontWeight: "500", textAlign: "center", fontSize: 20 },
  bottom: {
    alignSelf: "center",
    textDecorationLine: "underline",
    fontWeight: "500",
    paddingVertical: 40,
  },
});

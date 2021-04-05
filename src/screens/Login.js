import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
export default function Login(props) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => props.navigation.navigate("HomeScreen")}
      validationSchema={yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(5).required(),
      })}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
        navigation,
      }) => (
        <Fragment>
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

            <TextInput
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              placeholder="E-mail"
              style={styles.input}
            />
            {touched.email && errors.email && (
              <Text style={{ fontSize: 10, color: "red" }}>{errors.email}</Text>
            )}
            <TextInput
              value={values.password}
              onChangeText={handleChange("password")}
              placeholder="Password"
              onBlur={() => setFieldTouched("password")}
              secureTextEntry={true}
              style={styles.input}
            />

            {touched.password && errors.password && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.password}
              </Text>
            )}
            <TouchableOpacity
              style={styles.button}
              disabled={!isValid}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            <Text style={styles.bottom}>New Account?</Text>
          </View>
        </Fragment>
      )}
    </Formik>
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

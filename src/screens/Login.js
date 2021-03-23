import React, { useRef } from "react";
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
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});
export default function Login() {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "" },
    onSubmit: (values) =>
      alert(`Email: ${values.email}, Password: ${values.password}`),
  });
  const password = useRef(null);
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
        placeholder="Enter your email"
        autoCompleteType="email"
        keyboardType="email-address"
        keyboardAppearance="dark"
        returnKeyType="next"
        returnKeyLabel="next"
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        error={errors.email}
        touched={touched.email}
        onSubmitEditing={() => password.current?.focus()}
        style={styles.input}
      ></TextInput>
      <TextInput
        ref={password}
        placeholder="Enter your password"
        secureTextEntry
        autoCompleteType="password"
        autoCapitalize="none"
        keyboardAppearance="dark"
        returnKeyType="go"
        returnKeyLabel="go"
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        error={errors.password}
        touched={touched.password}
        onSubmitEditing={() => handleSubmit()}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSubmit}>
          Signup
        </Text>
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

import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../constants/colors';
import { Button } from '../components/Button';
import { TextInput } from '../components/Form';
import { useFormik, FormikErrors } from 'formik'
import { isEmpty } from 'lodash'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
  },
  backgroundContainer: { 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface FormValues {
  email: string,
  password: string
}
const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {}
  if (isEmpty(values.email)) {
    errors.email = "Email requied"
  }
  if (isEmpty(values.password)) {
    errors.password = "Password requied"
  }

  return errors
}

export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: () => {
      console.log(formik.values);
    },
    validate: validate
  })
  return (

    <View style={styles.container}>
      <TextInput
        nativeID='email'
        label="Email Address"
        placeholder="Enter your email..."
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        errorText={formik.errors.email}
        onBlur={formik.handleBlur('email')}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        nativeID='password'
        label="Password"
        placeholder="Enter your password..."
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        errorText={formik.errors.password}
        onBlur={formik.handleBlur('password')}
        autoCapitalize="none"
      />
      <Button onPress={formik.handleSubmit}>Sign In</Button>
    </View>
  );
};

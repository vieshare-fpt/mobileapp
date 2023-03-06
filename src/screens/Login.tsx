import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import colors from '../constants/colors';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { TextInput } from '../components/Form';
import { useLogin } from '../util/auth';
import { useFormik, FormikErrors } from 'formik'
import { isEmpty } from 'lodash'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
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
  const { submit, errors, email, setEmail, password, setPassword } = useLogin();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: () => {

    },
    validate: validate
  })
  return (
    <View style={styles.container}>
      <TextInput
        label="Email Address"
        placeholder="Enter your email..."
        value={formik.values.email}
        onChangeText={formik.handleChange}
        errorText={formik.errors.email}
        onBlur={formik.handleBlur}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        placeholder="Enter your password..."
        value={formik.values.password}
        onChangeText={formik.handleChange}
        errorText={formik.errors.password}
        onBlur={formik.handleBlur}
        autoCapitalize="none"
      />
      <Button onPress={submit}>Sign In</Button>
    </View>
  );
};

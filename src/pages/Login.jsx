import React from 'react';
import { Text } from 'react-native';
import { Formik, useField } from 'formik';
import { Button, View, StyleSheet } from 'react-native';
import StyledTextInput from '../components/StyledTextInput';
import StyledText from '../components/StyledText';
import {loginSchema} from '../validationsSchemas/login.js';


const initialValues = {
    username: '',
    password: ''
};

const styles = StyleSheet.create({
        form: {
            margin: 20,
        },
        input: {
            height: 60,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 20,
            padding: 10,
            backgroundColor: 'white',
            fontSize: 20,
        },
        error: {
            color: 'red',
            fontSize: 15,
        }
    }
);




const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers ] = useField(name);
    return (
        <>
        <StyledTextInput
            error={meta.error}
            onChangeText={(value) => helpers.setValue(value)}
            value={field.value}
            {...props }
        />
        {meta.error &&  <StyledText style={styles.error}>{meta.error}</StyledText>  }
        </>
    );
};




export default function Login() {
    return (
        <Formik validationSchema ={loginSchema} initialValues={initialValues} onSubmit={values => console.log(values)}> 
            {
                ({handleSubmit}) => {
                    return (
                        <View style={styles.form}>  
                            <FormikInputValue name='username' placeholder='Username'/>
                            <FormikInputValue name='password' placeholder='PassWord' secureTextEntry/>
                            <Button onPress={handleSubmit} title="Log In" />
                        </View>
                    )
                }
            }
        </Formik>
    );
}



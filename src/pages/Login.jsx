import React from 'react';
import { Text } from 'react-native';
import { Formik, useField } from 'formik';
import { Button, View, StyleSheet } from 'react-native';
import StyledTextInput from '../components/StyledTextInput';
import StyledText from '../components/StyledText';



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
    }
);




const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers ] = useField(name);
    return (
        <StyledTextInput
            onChangeText={(value) => helpers.setValue(value)}
            value={field.value}
            {...props }
        />
    );
};

const validateFields = values =>{
    const errors = {}
    if(!values.username){
        errors.username = 'Email is required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)){
        errors.email = 'Invalid email address'
    }
    if(!values.password){
        errors.password = 'Password is required'
    }else if(values.password.length < 8){
        errors.password = 'Password must be at least 8 characters long'
    }
    console.log('errors', errors)
    return errors;
    
}


export default function Login() {
    return (
        <Formik validate={validateFields} initialValues={initialValues} onSubmit={values => console.log(values)}> 
            {
                ({handleSubmit}) => {
                    return (
                        <View style={styles.form}>  
                            <FormikInputValue name='username' placeholder='Username'/>
                            <FormikInputValue name='password' placeholder='PassWord' secureTextEntry
                            />
                            <Button onPress={handleSubmit} title="Log In" />
                        </View>
                    )
                }
            }
        </Formik>
    );
}



import React from 'react'
import { Box, Button, Input, FormControl, FormErrorMessage, Text } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Required")
});

const Signup = () => {
    const initialValues = { email: "", username: "", name: "", password: "" };
    const handleSubmit = (values, { setSubmitting }) => {
        console.log("values: ", values);
        setTimeout(() => {
            setSubmitting(false); 
        }, 2000); 
    };
    const navigate = useNavigate();
    const handleNavigate = () => navigate("/login");
    return (

        <div>
            <div className='border'>
                <Box p={8} className='space-y-6' display="flex" flexDirection="column" alignItems="center">
                    <img src="https://i.imgur.com/zqpwkLQ.png" alt='' />
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema} // Add validation schema here
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <Field name="email" >
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.email && form.touched.email} mb={5}>
                                            <Input className='w-full' {...field} id='email' placeholder="Mobile number or Email" />
                                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="password">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.password && form.touched.password} mb={5}>
                                            <Input className='w-full' {...field} id='password' type="password" placeholder="Enter your password" />
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="name">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.name && form.touched.name} mb={5}>
                                            <Input className='w-full' {...field} id='name' placeholder="Enter your full name" />
                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="Username">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.Username && form.touched.Username} mb={5}>
                                            <Input className='w-full' {...field} id='Username' placeholder="Entre your username" />
                                            <FormErrorMessage>{form.errors.Username}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Text textAlign="center" fontSize="sm" mt={4}>
                                    People who use our service may have uploaded your contact information to Instagram. Learn more
                                </Text>
                                <Text textAlign="center" fontSize="sm" mt={2}>
                                    By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy.
                                </Text>
                                <Button mt={4} className='w-full' fontSize="sm"  type="submit" colorScheme="blue" isLoading={isSubmitting}>
                                    Sign In
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </div>
            <div className='border w-full border-slate-300 mt-5'>
                <p className='text-center py-2 text-sm'>If You Already Have Account? <span onClick={handleNavigate} className='ml-2 text-blue-700 cursor-pointer'>Sign In</span></p>
            </div></div>

    )

}


export default Signup
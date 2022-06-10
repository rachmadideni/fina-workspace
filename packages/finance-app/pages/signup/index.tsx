import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { ErrorMessage, Form, Field, Formik, FormikHelpers } from 'formik'

import {
    Container,
    FormStyled,
    SectionWrapper
} from '../../components/layout/index.styled'
import Header from '../../components/common/header';
import Button from '../../components/common/button';
import TextField from '../../components/common/textfield';
import { signupValidation } from '../../validations/signup'
import { useAppSelector, useAppDispatch } from '../../hooks/useReduxHooks';

import { useGetPokemonByNameQuery } from '../../services/auth.service';

interface IFormValues {
    email: string;
    password: string;
}

const initialValues = {
    email: '',
    password:''
}

const SignupPage = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    
    const onFormSubmit = (values: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {        
        setSubmitting(true)
        router.push('/dashboard');
        // dispatch thunk
    }    

    const onSigninRedirect = () => router.push('/signin')
    console.log(data)

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <SectionWrapper>Left</SectionWrapper>
            <SectionWrapper bgColor='white'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={signupValidation}
                    onSubmit={onFormSubmit}>
                    {({ errors, touched, dirty, isValid }) => (
                        <Form style={{ width: '50%' }}>                     
                            <FormStyled spacing={2}>
                            <Header variant='h5'>Sign Up Form</Header>                            
                            <Field
                                as={TextField}                               
                                name="email"
                                label='email'
                                size='small' fullWidth
                                helperText={<ErrorMessage name="email"/>}
                                InputLabelProps={{ shrink: true }}
                                error={touched.email && errors.email ? true : false} />
                            
                            <Field
                                as={TextField}                                
                                name="password"
                                label='password'
                                type="password"
                                size='small'
                                fullWidth
                                helperText={<ErrorMessage name="password" />}
                                error={touched.password && errors.password ? true : false} 
                                InputLabelProps={{ shrink: true }} />
                            
                            <Button
                                type="submit"
                                disabled={!(dirty && isValid)}
                                variant='contained'
                                disableElevation
                                fullWidth>Sign Up</Button>
                            <Typography variant='body2' align='center'>OR</Typography>
                                <Button
                                    variant='outlined'
                                    fullWidth
                                    onClick={onSigninRedirect}>Sign In</Button>
                            </FormStyled>
                        </Form>
                    )}
                </Formik>
            </SectionWrapper>            
        </Container>
    )
}

export default SignupPage
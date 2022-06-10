import * as yup from 'yup';

export const signupValidation = yup.object().shape({
    email: yup.string().email('Format Email tidak valid').required('Email tidak boleh kosong'),
    password: yup.string().required('Password tidak boleh kosong').min(6)
})
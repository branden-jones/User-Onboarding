import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is Required')
        .min(3, 'Username must be 3 characters long'),
    email: yup
        .string()
        .email('Must provide a valid Email')
        .required('Email is Required'),
    password: yup
        .string()
        .required('A Strong Password Is Required for Security Purposes')
        .min( 6, 'Password must contain at least 6 characters' ),
        tos: yup
            .boolean()
            .oneOf([true], 'Must accept the terms and conditions')
})

export default formSchema;
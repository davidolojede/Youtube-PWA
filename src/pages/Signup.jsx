import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'


const Signup = () => {
    const navigate = useNavigate()
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        age: Yup.number().required('Please input age').min(18, 'You are too young').max(100, 'This is impossible'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Please input your password').min(8, 'Your password is weak')
    })

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm()
            navigate("/signin")
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    {formik.touched.firstName && formik.errors.firstName ? <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.firstName}</p> : null}
                    <label htmlFor="firstName">First name</label>
                    <br />
                    <input type="text" name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                <div>
                    {formik.touched.lastName && formik.errors.lastName ? <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.lastName}</p> : null}
                    <label htmlFor="lastName">Last name</label>
                    <br />
                    <input type="text" name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                <div>
                    {formik.touched.age && formik.errors.age ? <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.age}</p> : null}
                    <label htmlFor="age">age</label>
                    <br />
                    <input type="number" name='age' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                <div>
                    {formik.touched.email && formik.errors.email ? <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</p> : null}
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                <div>
                    {formik.touched.password && formik.errors.password ? <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.password}</p> : null}
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="text" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>

                <button type='submit'>Sign Up</button>
            </form>
        </>
    )
}

export default Signup
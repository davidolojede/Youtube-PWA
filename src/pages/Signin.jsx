import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required').email('Input a valid email'),
        password: Yup.string().required('Password is required')
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            resetForm()
            navigate("/home")
        }
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    {formik.touched.email && formik.errors.email ? <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.email}</p> : null}
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                <div>
                    {formik.touched.password && formik.errors.password ? <p style={{ color: 'red', fontSize: '12px' }}>{formik.errors.password}</p> : null}
                    <label htmlFor="password">Password</label>
                    <input type="text" name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>
                <button type="submit">Sign in</button>
            </form>
        </>
    )
}

export default Signin
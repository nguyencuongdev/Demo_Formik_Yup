import { useFormik } from 'formik';
import * as yup from 'yup';

import './FormSignup.scss';

export default function FormSignup() {

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            comfirmPassword: ''
        },
        validationSchema: yup.object({
            userName: yup.string().required('Not empty'),
            email: yup.string().required('Not empty').email('Invalid email'),
            password: yup.string().required('Not empty').
                min(8, 'Password must be at least 8 characters').
                max(30, 'Password must be at least 30 characters'),
            comfirmPassword: yup.string().required('Not empty').
                oneOf([yup.ref('password')], 'Password not match'),
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div className='Login'>
            <form action="" method='POST' className="login-form" onSubmit={formik.handleSubmit}>
                <h2 className='login-title'>Đăng ký</h2>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Username: </label>
                    <input type="text" name='userName' className="form-control"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                {
                    formik.errors.name && formik.touched.name &&
                    <p className='form-message'>{formik.errors.name}</p>
                }
                <div className="form-group">
                    <label htmlFor="" className="form-label">Email: </label>
                    <input type="text" name='email' className="form-control"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </div>
                {
                    formik.errors.email && formik.touched.email &&
                    <p className='form-message'>{formik.errors.email}</p>
                }
                <div className="form-group">
                    <label htmlFor="" className="form-label">Password: </label>
                    <input type="text" name='password' className="form-control"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </div>
                {
                    formik.errors.password && formik.touched.password &&
                    <p className='form-message'>{formik.errors.password}</p>
                }
                <div className="form-group">
                    <label htmlFor="" className="form-label">Repeat password: </label>
                    <input type="text" name='comfirmPassword' className="form-control"
                        value={formik.values.comfirmPassword}
                        onChange={formik.handleChange}
                    />
                </div>
                {
                    formik.errors.comfirmPassword && formik.touched.comfirmPassword &&
                    <p className='form-message'>{formik.errors.comfirmPassword}</p>
                }
                <button type='submit' role='button'
                    className="block form-control-submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

import { useContext, useState } from "react";
import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Form, Input, Button, Checkbox } from 'antd';


function Index() {
    const navigate = useNavigate()
    const { dispatch } = useContext(AuthContext)
    const [email, setEmail] = useState('test1@test.com')
    const [password, setPassword] = useState('test@test')
    const [error, setError] = useState(false)


    const handleLogin = (values) => {
        setEmail(values.email)
        setPassword(values.password)
        if (email === 'test1@test.com' && password === 'test@test') {
            const user = {
                user: email,
                password: password
            }
            dispatch({ type: "LOGIN", payload: user })
            navigate("/main/inbox")
        } else {
            setError(true)
        }
    };



    return (
        <div className="w-full bg-blue-900 min-h-screen">
            <div className="container mx-auto relative min-h-screen flex items-center justify-center">
                <div className="bg-white rounded-lg px-8 py-16 w-128">
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="w-full">
                            <img className="w-full" src={require('../../img/loginlogo.svg').default} alt='logo' />
                        </div>
                        <span className="text-xl text-gray-700 font-light">Login to check your Email!</span>
                    </div>
                    {/* <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                        <div>
                            <label className="text-xl mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                value={email}
                                className="w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md"
                                name="email"
                                type="email"
                                placeholder="Enter Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="text-xl mb-2" htmlFor="password">
                                Email
                            </label>
                            <input
                                value={password}
                                className="w-full bg-white rounded-md border border-gray-900 py-2.5 px-3 shadow-md"
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}

                            />
                        </div>
                        {error ? (<span className="text-red-500">Wrong email or password!</span>) : ''}
                        <button className="submit__button">Login</button>

                    </form> */}

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={handleLogin}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input size="large" />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password size="large" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="submit__button" size="large">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Index
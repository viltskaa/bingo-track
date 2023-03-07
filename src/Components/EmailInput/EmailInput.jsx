import React from 'react';
import "./EmailInput.css"
import {Button, Form, Input} from "antd";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from "../../firebase.js";

const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
	}
};

const EmailInput = () => {
	const [
		signInWithEmailAndPassword, ,
		loading, ,
	] = useSignInWithEmailAndPassword(auth);

	const onSubmit = async (values) => {
		const {email, password} = values;
		await signInWithEmailAndPassword(email, password);
	}

	return (
		<div className="bg-blur MuiTextField-root">
			<div className="form-wrapper">
				<Form
					name="basic"
					style={{ width : '70vmin' }}
					initialValues={{ remember: true }}
					autoComplete="off"
					onFinish={onSubmit}
					validateMessages={validateMessages}
				>
					<Form.Item name='email' label="Email" rules={[{ type: 'email' }, { required: true }]}>
						<Input />
					</Form.Item>

					<Form.Item
						name='password'
						label='Password'
						rules={[{ required: true, message : "Your password" }]}
						style={{ marginBottom : 10 }}
						hasFeedback
					>
						<Input.Password/>
					</Form.Item>

					<Form.Item
						style={{ marginBottom : 0 }}
					>
						<Button
							type="primary"
							htmlType="submit"
							className='login-form-button'
							loading={loading}
						>
							Auth
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default EmailInput;
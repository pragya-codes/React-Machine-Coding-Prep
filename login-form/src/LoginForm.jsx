import { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
	height: 100vh;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: solid 1px;
	margin: 0 auto;

	h1 {
		color: pink;
		text-align: center;
	}

	.item {
		display: flex;
		flex-direction: column;
		padding-bottom: 10px;
		margin: 0 20px;
	}

	span {
		color: red;
		font-size: 0.7rem;
	}
`;

function LoginForm() {
	const [formValues, setFormValues] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [errValues, setErrValues] = useState({
		errUser: '',
		errEmail: '',
		errPass: '',
	});
	function handleChange(e) {
		setFormValues({ ...formValues, [e.target.name]: e.target.value }); //took 70% of brain effort
	}

	function handleSubmit(e) {
		e.preventDefault();
		validation(formValues);
		setFormValues({ username: '', email: '', password: '' });
	}

	function validation(obj) {
		const { username, email, password } = obj;

		//username validation
		if (username.length == 0) {
			setErrValues({ ...errValues, errUser: 'Enter a username!' });
		} else if (username.length <= 3 || username.length >= 15) {
			setErrValues({
				...errValues,
				errUser: 'Username should be between 3 to 15 characters only',
			});
		}
	}
	console.log(formValues);
	return (
		<>
			{errValues ? (
				<StyledContainer>
					<h1>LOGIN</h1>
					<form onSubmit={handleSubmit}>
						<div className="item">
							<label>Username:</label>
							<input
								type="text"
								name="username"
								value={formValues.username}
								onChange={handleChange}
							></input>
							<span>{errValues.errUser}</span>
						</div>
						<div className="item">
							<label>Email ID:</label>
							<input
								type="text"
								name="email"
								value={formValues.email}
								onChange={handleChange}
							></input>
							<span>{errValues.errEmail}</span>
						</div>
						<div className="item">
							<label>Password:</label>
							<input
								type="password"
								name="password"
								value={formValues.password}
								onChange={handleChange}
							></input>
						</div>
						<div>
							<button>Submit</button>
						</div>
					</form>
				</StyledContainer>
			) : (
				<StyledContainer>
					<h1>LOGIN</h1>
					<form onSubmit={handleSubmit}>
						<div className="item">
							<label>Username:</label>
							<input
								type="text"
								name="username"
								value={formValues.username}
								onChange={handleChange}
							></input>
						</div>
						<div className="item">
							<label>Email ID:</label>
							<input
								type="text"
								name="email"
								value={formValues.email}
								onChange={handleChange}
							></input>
						</div>
						<div className="item">
							<label>Password:</label>
							<input
								type="password"
								name="password"
								value={formValues.password}
								onChange={handleChange}
							></input>
						</div>
						<div>
							<button>Submit</button>
						</div>
					</form>
				</StyledContainer>
			)}
		</>
	);
}

export default LoginForm;

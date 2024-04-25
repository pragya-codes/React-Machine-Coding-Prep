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
`;

function LoginForm() {
	const [formValues, setFormValues] = useState({
		username: '',
		email: '',
		password: '',
	});

	function handleChange(e) {
		setFormValues({ ...formValues, [e.target.name]: e.target.value }); //took 70% of brain effort
	}

	function handleSubmit(e) {
		e.preventDefault();
		validation(formValues);
	}

	function validation() {}
	console.log(formValues);
	return (
		<>
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
		</>
	);
}

export default LoginForm;

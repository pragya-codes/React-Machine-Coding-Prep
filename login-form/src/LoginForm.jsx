import { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
	height: 300px;
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

export default function LoginForm() {
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
		let regex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
		//username validation

		if (username.length == 0) {
			setErrValues((errValues) => ({
				...errValues,
				errUser: 'Enter a Username!',
			}));
		} else if (username.length <= 3 || username.length >= 15) {
			setErrValues((errValues) => ({
				...errValues,
				errUser: 'Username should be between 3 to 15 characters only',
			}));
		} else {
			setErrValues((errValues) => ({
				...errValues,
				errUser: '',
			}));
		}

		//email id validation
		if (email.length == 0) {
			setErrValues((errValues) => ({
				...errValues,
				errEmail: 'Enter an Email ID!',
			}));
		} else if (email.includes('@') && email.includes('.') !== true) {
			setErrValues((errValues) => ({
				...errValues,
				errEmail: 'Enter a valid email ID!',
			}));
		} else {
			setErrValues((errValues) => ({
				...errValues,
				errEmail: '',
			}));
		}

		//password validaton
		if (password.length == 0) {
			setErrValues((errValues) => ({
				...errValues,
				errPass: 'Enter an Password',
			}));
		} else if (!password.match(regex)) {
			//if(!regex.test(password))
			setErrValues((errValues) => ({
				...errValues,
				errPass: `Your Password doesn't meet the criteria!`,
			}));
		} else {
			setErrValues((errValues) => ({
				...errValues,
				errPass: '',
			}));
		}
	}
	// one issue I faced was "Handling asynchronous setErrValues method".
	// I was not using cb concept to update that method and calling it multiple times inside validation()
	//so these async functions were getting batched together and the last value was overwriting
	//so when i use Functional form and give prev stae as the the argument, React
	//keeps in mind to update the state based on prev state value only.
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
							<span>{errValues.errPass}</span>
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

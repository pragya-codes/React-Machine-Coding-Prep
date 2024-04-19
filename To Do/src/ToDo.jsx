import { useState } from 'react';
function ToDo() {
	const [list, setList] = useState([]);
	const [inputValue, setInput] = useState('');
	function handleList() {
		setList([...list, inputValue]);
		setInput('');
	}
	console.log(list);
	return (
		<div>
			ToDo
			<input
				type="text"
				placeholder="Enter.."
				value={inputValue}
				onChange={(e) => setInput(e.target.value)}
			></input>
			<button onClick={handleList}>+</button>
			<ul>
				{list.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}

				{/* if you want an implicit return use () instead of {} cuz if you
				use {} then JS thinks it as a block of code and hence in that
				case we require a "return" keyword */}
			</ul>
		</div>
	);
}

export default ToDo;

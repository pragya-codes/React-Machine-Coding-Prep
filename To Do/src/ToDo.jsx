import { useState } from 'react';
function ToDo() {
	const [list, setList] = useState([]);
	const [inputValue, setInput] = useState('');
	const [editIndex, setEditIndex] = useState(null);
	const [updateValue, setUpdate] = useState('');

	function handleList() {
		setList([...list, inputValue]);
		setInput('');
	}

	function handleDelete(index) {
		const filtered = list.filter((item, i) => i !== index);
		setList(filtered);
	}

	function handleModify(index) {
		setEditIndex(index);
	}

	function handleSave() {
		const updated = [...list];
		updated[editIndex] = updateValue;
		setList(updated);
		setEditIndex(null);
		setUpdate('');
	}

	// console.log(list);

	return (
		<div>
			<h1>TO DO</h1>
			<input
				type="text"
				placeholder="Enter.."
				value={inputValue}
				onChange={(e) => setInput(e.target.value)}
			></input>
			<button onClick={handleList}>+</button>
			<ul>
				{list.map((item, index) => {
					return (
						<li key={index}>
							{editIndex === index ? (
								<>
									<input
										type="text"
										value={updateValue}
										onChange={(e) =>
											setUpdate(e.target.value)
										}
									></input>
									<button onClick={() => handleSave(index)}>
										Save
									</button>
									<button onClick={() => handleDelete(index)}>
										❌
									</button>
								</>
							) : (
								<>
									{item}
									<button onClick={() => handleModify(index)}>
										Modify
									</button>
									<button onClick={() => handleDelete(index)}>
										❌
									</button>
								</>
							)}
						</li>
					);
				})}

				{/* if you want an implicit return use () instead of {} cuz if you
				use {} then JS thinks it as a block of code and hence in that
				case we require a "return" keyword */}
			</ul>
		</div>
	);
}

export default ToDo;

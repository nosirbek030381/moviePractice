import { useContext, useState } from 'react';
import { Context } from '../../context';
import './search.css';

const Search = props => {
	const [term, setTerm] = useState('');

	const { dispatch } = useContext(Context);

	const updateTermHandler = e => {
		const val = e.target.value.toLowerCase();
		setTerm(val);
		dispatch({ type: 'ON_TERM', payload: term });
	};

	return (
		<input
			type='text'
			className='form-control search-input'
			placeholder='Kinolarni qidirish'
			onChange={updateTermHandler}
			value={term}
		/>
	);
};

export default Search;

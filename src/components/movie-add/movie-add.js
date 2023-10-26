import { useContext, useState } from 'react';

import { Context } from '../../context';
import './movie-add.css';

const MovieAddList = () => {
	const [state, setState] = useState({ name: '', views: '' });

	const onInput = e => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const { _, dispatch } = useContext(Context);

	const addFormHandler = e => {
		e.preventDefault();
		if (state.name === '' || state.views === '') return;
		const data = { name: state.name, viewers: state.views };
		dispatch({ type: 'ADD_FORM', payload: data });
		setState({ name: '', views: '' });
	};

	return (
		<div className='movie__add'>
			<h3>Yangi kinolar qo'shish</h3>
			<form action='' className='add__form d-flex' onSubmit={addFormHandler}>
				<input
					type='text'
					onChange={onInput}
					className='form-control new-post-label'
					placeholder='Qanday kino'
					name='name'
					value={state.name}
				/>
				<input
					type='number '
					className='form-control new-post-label'
					placeholder="Necha marotaba ko'rilgan"
					onChange={onInput}
					name='views'
					value={state.views}
				/>
				<button type='submit' className='btn btn-outline-dark'>
					Qo'shish
				</button>
			</form>
		</div>
	);
};

export default MovieAddList;

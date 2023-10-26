import { useContext } from 'react';
import { Context } from '../../context';

const AppFilter = () => {
	const { state, dispatch } = useContext(Context);

	return (
		<div className='btn-group mt-4'>
			{btnArr.map(btn => (
				<button
					key={btn.name}
					className={`btn ${state.filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
					onClick={() => dispatch({ type: 'ON_FILTER', payload: btn.name })}
				>
					{btn.label}
				</button>
			))}
		</div>
	);
};

const btnArr = [
	{ name: 'all', label: 'Barcha kinolar' },
	{ name: 'popular', label: 'Mashhur kinolar' },
	{ name: 'mostViews', label: "Eng ko'p ko'rilgan kinolar" },
];

export default AppFilter;

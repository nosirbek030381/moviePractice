import { useContext } from 'react';
import { Context } from '../../context';
import './app-info.css';

const AppInfo = ({ allMovie, favouriteMovie }) => {
	const { state } = useContext(Context);

	return (
		<div className='app__info'>
			<p className='fs-3 text-uppercase'>Barcha kinolar: {state.data.length}</p>
			<p className='fs-4 text-uppercase'>
				Sevimli kinolar: {state.data.filter(c => c.favourite).length}
			</p>
		</div>
	);
};

export default AppInfo;

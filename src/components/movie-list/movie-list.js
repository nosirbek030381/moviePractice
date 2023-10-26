import { useContext } from 'react';
import { Context } from '../../context';
import { filterHandler, searchHandler } from '../../utilities/data';
import MovieListItem from '../movie-list-item/movie-list-item';
import './movie-list.css';

const MovieList = () => {
	const { state, dispatch } = useContext(Context);
	const data = filterHandler(searchHandler(state.data, state.term), state.filter);

	return (
		<ul className='movie__list'>
			{data.map(item => (
				<MovieListItem key={item.id} {...item} />
			))}
		</ul>
	);
};

export default MovieList;

import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import MovieAddList from '../movie-add/movie-add';
import MovieList from '../movie-list/movie-list';
import Search from '../search/search';
import './app.css';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);

	const { _, dispatch } = useContext(Context);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos?_start0&_limit=5')
			.then(response => response.json())
			.then(json => {
				const newArr = json.map(item => {
					return {
						name: item.title,
						viewers: item.id * 20,
						id: item.id,
						favourite: false,
						like: false,
					};
				});
				setData(newArr);
				dispatch({ type: 'GET_DATA', payload: newArr });
			})
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search__panel'>
					<Search />
					<AppFilter />
				</div>
				{isLoading && 'Loading...'}
				<MovieList />
				<MovieAddList />
			</div>
		</div>
	);
};

export default App;

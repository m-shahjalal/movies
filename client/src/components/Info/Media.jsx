import styles from './info.module.css';
import { Fragment, useEffect, useState } from 'react';
import Single from './Single';
import Spinner from './Spinner';
import axios from 'axios';

const Media = ({ url, setPagination, setTotalPage }) => {
	const [list, setList] = useState(null);

	useEffect(() => {
		setList(null);
		const baseUrl = `https://movie-1010.herokuapp.com/info?${url}`;
		axios
			.get(baseUrl)
			.then((response) => {
				setList([...response.data.movies]);
				const doc = Math.ceil(response.data.totalDocuments / 10);
				setTotalPage(doc);
			})
			.catch((error) => {
				console.error(error);
				if (error.message) {
					setPagination(false);
				}
			});
	}, [url, setPagination, setTotalPage]);

	return (
		<>
			<h1 className={styles.lead}>
				{list ? 'Movies lists' : 'Movie is loading...'}
			</h1>
			{list ? (
				<div className={styles.box}>
					{list &&
						list.map((item) => (
							<Fragment key={item._id}>
								<Single item={item} />
							</Fragment>
						))}
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
};

export default Media;

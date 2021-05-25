import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import styles from './info.module.css';
import Pagination from './Pagination';
import Single from './Single';
import Spinner from './Spinner';

const Info = () => {
	const [totalPage, setTotalPage] = useState(1);
	const [list, setList] = useState(null);
	const [loading, setLoading] = useState(false);
	const [url, setUrl] = useState(
		'https://movie-1010.herokuapp.com/info?limit=10&page=1'
	);

	const urlGenerator = (pageNumber) => {
		const base = `https://movie-1010.herokuapp.com/info?limit=10&page=${parseInt(
			pageNumber
		)}`;
		setUrl(base);
		console.log(base);
	};

	useEffect(() => {
		setLoading(true);
		setList(null);
		axios
			.get(url)
			.then((response) => {
				setList([...response.data.movies]);
				setLoading(false);
				const doc = Math.ceil(response.data.totalDocuments / 10);
				setTotalPage(doc);
			})
			.catch((error) => console.error(error));
	}, [url]);

	return (
		<div className={styles.info}>
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
			) : loading ? (
				<Spinner />
			) : null}

			{list && (
				<Pagination
					setList={setList}
					totalPage={totalPage}
					setUrl={setUrl}
					urlGenerator={urlGenerator}
				/>
			)}
		</div>
	);
};

export default Info;

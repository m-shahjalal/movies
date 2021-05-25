import { useState } from 'react';
import styles from './info.module.css';
import Media from './Media';
import Pagination from './Pagination';

const Info = () => {
	const [totalPage, setTotalPage] = useState(1);
	const [pagination, setPagination] = useState(false);
	const [url, setUrl] = useState('limit=10&page=1');

	return (
		<div className={styles.info}>
			<Media
				setTotalPage={setTotalPage}
				url={url}
				setPagination={setPagination}
			/>

			{pagination && <Pagination totalPage={totalPage} setUrl={setUrl} />}
		</div>
	);
};

export default Info;

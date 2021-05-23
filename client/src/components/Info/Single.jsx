import styles from './info.module.css';
const baseUrl = 'http://localhost:5000/';

const Single = ({ item }) => {
	return (
		<div className={styles.card}>
			<div className={styles.top}>
				<video
					controls
					className={styles.video}
					src={`${baseUrl}${item.video}`}></video>
			</div>
			<div className={styles.head}>
				<div className={styles.thumbnail}>
					<img
						className={styles.image}
						src={`${baseUrl}${item.thumb}`}
						alt='thumbnail'
					/>
				</div>
				<div className={styles.footer}>
					<h3 className={styles.name}>{item.name}</h3>
					<div className={styles.tags}>
						<div className={styles.date}>{item.release}</div>
						<div className={styles.language}>{item.language}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Single;

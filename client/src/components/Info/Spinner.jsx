import styles from './info.module.css';

const Spinner = () => {
	return (
		<div className={styles.spinnerContainer}>
			<div className={styles.spinner}>
				<img
					src='https://raw.githubusercontent.com/m-shahjalal/news/main/src/images/download.svg'
					alt='#'
				/>
			</div>
		</div>
	);
};

export default Spinner;

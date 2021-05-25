import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import styles from './form.module.css';

ReactModal.setAppElement('#root');
const Modal = ({ isOpen, progress, setIsOpen }) => {
	return (
		<div className={styles.modal}>
			<ReactModal
				isOpen={isOpen}
				style={{
					overlay: { backgroundColor: 'rgba(0, 0, 0, 0.3)' },
					content: {
						maxWidth: '800px',
						margin: 'auto',
						height: '50%',
						backgroundColor: '#e5e7eb',
						boxShadow: '0 0 30px 10px #00000050',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
					},
				}}>
				<h2 className={styles.modalLead}>
					{progress.toString() === '100'
						? 'Content upload completed'
						: 'Content is uploading...'}
				</h2>
				<div className={styles.spinnerContainer}>
					{progress.toString() === '100' ? (
						<div className={styles.redirect}>
							<Link to='/' className={styles.directionsButton}>
								Go to home page
							</Link>
							<Link
								to='/info'
								className={styles.directionsButton}>
								Go to Movie List page
							</Link>
							<button
								className={styles.directionsButton}
								onClick={() => setIsOpen(false)}>
								Stay and upload more
							</button>
						</div>
					) : (
						<div className={styles.spinner}>
							<img
								src='https://raw.githubusercontent.com/m-shahjalal/news/main/src/images/download.svg'
								alt='#'
							/>
						</div>
					)}
				</div>
				<div className={styles.progress}>
					<div
						className={styles.bar}
						style={{ width: `${progress}%` }}>
						{progress}%
					</div>
				</div>
			</ReactModal>
		</div>
	);
};

export default Modal;

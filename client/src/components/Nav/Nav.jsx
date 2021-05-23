import styles from './nav.module.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<Link to='/' className={styles.logo}>
				<span className={styles.text}>MOVIE</span>
			</Link>
			<ul className={styles.list}>
				<li className={styles.linkItem}>
					<Link className={styles.link} to='/'>
						Home
					</Link>
				</li>
				<li className={styles.linkItem}>
					<Link className={styles.link} to='/form'>
						Form
					</Link>
				</li>
				<li className={styles.linkItem}>
					<Link className={styles.link} to='/info'>
						Information
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;

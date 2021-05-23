import styles from './home.module.css';

const Home = () => {
	return (
		<div className={styles.home}>
			<h1 className={styles.lead}>
				<span className={styles.welcome}>Welcome</span> to Blockbuster
				Movies!
			</h1>
			<p className={styles.para}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
				voluptas vel ipsa! Obcaecati totam nam cumque distinctio tenetur
				dolor aliquid voluptatum voluptatibus officia expedita
				recusandae nihil, dolorem corrupti, nisi minima.
			</p>
		</div>
	);
};

export default Home;

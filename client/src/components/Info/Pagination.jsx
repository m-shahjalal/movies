import React, { useEffect, useState } from 'react';
import styles from './info.module.css';

const Pagination = ({ totalPage, urlGenerator }) => {
	const [error, setError] = useState(null);
	const [isEditable, setIsEditable] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [current, setCurrent] = useState(1);

	useEffect(() => urlGenerator(current), [current, urlGenerator]);

	const pageChangeHandler = (e) => {
		const value = e.target.value;
		if (isNaN(value)) {
			setError('Only Number acceptable');
		} else if (value > totalPage) {
			setError(`Type within 1 to ${totalPage}`);
		} else {
			setError(null);
			setInputValue(e.target.value);
		}
	};
	console.log(error);
	const pageSubmitHandler = (e) => {
		e.preventDefault();
		if (!error) {
			setCurrent(inputValue);
			setIsEditable(!isEditable);
		} else {
			console.log('please solve the error first');
		}
	};

	return (
		<div className={styles.pagination}>
			<button
				onClick={() => {
					if (current > 1) {
						return setCurrent((priv) => parseInt(priv) - 1);
					} else {
						return;
					}
				}}
				className={styles.button}>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M7 16l-4-4m0 0l4-4m-4 4h18'
					/>
				</svg>{' '}
				<span className={styles.span}> Previous</span>
			</button>
			<div
				className={styles.paginationIndicator}
				onDoubleClick={() => setIsEditable(!isEditable)}>
				{isEditable ? (
					<form onSubmit={pageSubmitHandler}>
						<input
							className={styles.paginationInput}
							type='text'
							placeholder={`Max number is ${totalPage}`}
							min='1'
							max={totalPage}
							onDoubleClick={() => setIsEditable(!isEditable)}
							value={inputValue}
							onChange={pageChangeHandler}
						/>
						{error ? (
							<div className={styles.error}>{error}</div>
						) : null}
					</form>
				) : (
					<h5 className={styles.pageHead}>
						{current} of {totalPage || 1} page
						<div className={styles.small}>
							Dabble click to enter the page number
						</div>
					</h5>
				)}
			</div>
			<button
				onClick={() => {
					if (current < totalPage) {
						return setCurrent((priv) => parseInt(priv) + 1);
					} else {
						return;
					}
				}}
				className={styles.button}>
				<span className={styles.span}>Next </span>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M17 8l4 4m0 0l-4 4m4-4H3'
					/>
				</svg>
			</button>
		</div>
	);
};

export default Pagination;

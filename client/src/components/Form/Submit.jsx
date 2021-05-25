import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import axios from 'axios';
import formImage from './form.png';
import styles from './form.module.css';
import { useState } from 'react';
import Modal from './Modal';

const Submit = () => {
	const history = useHistory();
	const [progress, setProgress] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const onSubmit = (values, action) => {
		setIsOpen(true);
		const data = new FormData();
		data.append('name', values.name);
		data.append('release', values.release);
		data.append('lan', values.lan);
		data.append('thumb', values.thumb);
		data.append('video', values.video);
		axios
			.post('https://movie-1010.herokuapp.com/form', data, {
				onUploadProgress: (ProgressEvent) => {
					action.resetForm(initialValues);
					setProgress(
						parseInt(
							Math.round(
								(ProgressEvent.loaded * 100) /
									ProgressEvent.total
							)
						)
					);
				},
			})
			.then((res) => {
				console.log('Data uploaded successfully');
			})
			.then((err) => {
				if (err?.message) {
					return history.push('/error');
				}
			});
	};
	const initialValues = {
		name: '',
		release: '',
		lan: '',
		thumb: '',
		video: '',
	};
	const validate = (value) => {
		let errors = {};

		if (!value.name) errors.name = 'name is required';
		if (!value.release) errors.release = 'release date is required';
		if (!value.lan) errors.lan = 'language is required';

		if (!value.thumb.name) {
			errors.thumb = 'thumbnail is required';
		} else if (!value.thumb.type.match(/\/(jpg|jpeg|png)$/)) {
			errors.thumb = 'select a thumbnail type of jpg or png';
		}

		if (!value.video) {
			errors.video = 'please select a video';
		} else if (!value.video.type.match(/\/(mp4|3gp|webm)$/)) {
			errors.video = 'select a mp4, 3gp or webm video file';
		}

		return errors;
	};
	return (
		<div className={styles.formContainer}>
			<div className={styles.formInner}>
				<div className={styles.left}>
					<h1 className={styles.head}>SUBMIT YOUR MOVIE</h1>
					<Formik
						initialValues={initialValues}
						enableReinitialize={true}
						onSubmit={onSubmit}
						validate={validate}>
						{(props) => (
							<form
								onSubmit={props.handleSubmit}
								className={styles.form}>
								<p className={styles.label}>Movie Name</p>
								<input
									className={styles.input}
									placeholder='Name'
									type='text'
									id='name'
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									value={props.values.name}
									name='name'
								/>
								{props.errors.name && props.touched.name && (
									<div className={styles.feedback}>
										{props.errors.name}
									</div>
								)}

								<p className={styles.label}>Released date:</p>
								<input
									className={styles.input}
									placeholder='date'
									type='date'
									id='date'
									name='release'
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									value={props.values.release}
								/>
								{props.errors.release &&
									props.touched.release && (
										<div className={styles.feedback}>
											{props.errors.release}
										</div>
									)}

								<p className={styles.label}>Language</p>
								<input
									className={styles.input}
									placeholder='Language'
									type='text'
									id='lan'
									name='lan'
									value={props.values.lan}
									onChange={props.handleChange}
									onBlur={props.handleBlur}
								/>
								{props.errors.lan && props.touched.lan && (
									<div className={styles.feedback}>
										{props.errors.lan}
									</div>
								)}

								<p className={styles.label}>Thumbnail:</p>
								<input
									className={`${styles.input} ${styles.file}`}
									type='file'
									id='thumb'
									name='thumb'
									onChange={(e) => {
										props.setFieldValue(
											'thumb',
											e.target.files[0]
										);
									}}
									onBlur={props.handleBlur}
								/>
								{props.errors.thumb && props.touched.thumb && (
									<div className={styles.feedback}>
										{props.errors.thumb}
									</div>
								)}

								<p className={styles.label}>Media file</p>
								<input
									className={styles.input}
									type='file'
									id='video'
									name='video'
									onBlur={props.handleBlur}
									onChange={(e) => {
										props.setFieldValue(
											'video',
											e.target.files[0]
										);
									}}
								/>
								{props.errors.video && props.touched.video && (
									<div className={styles.feedback}>
										{props.errors.video}
									</div>
								)}

								<input
									value='submit'
									type='submit'
									className={styles.submit}
								/>
							</form>
						)}
					</Formik>
					<Zoom>
						<Modal
							isOpen={isOpen}
							progress={progress}
							setIsOpen={setIsOpen}
						/>
					</Zoom>
				</div>
				<div className={styles.right}>
					<img
						className={styles.img}
						src={formImage}
						alt='side appearance'
					/>
				</div>
			</div>
		</div>
	);
};

export default Submit;

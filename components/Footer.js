import styles from '../styles/footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<h3>
				Made with 💜 by{' '}
				<link href="https://github.com/msaaddev">Saad Irfan</link>
			</h3>
		</div>
	);
};

export default Footer;

import styles from '../../styles/helperMsg.module.css';
import Link from 'next/link';

const HelperMsg = ({ content, option, url }) => {
	return (
		<div className={styles.container}>
			<p>
				{content}{' '}
				<span>
					<Link legacyBehavior href={`/${url}`}>
						<a id="link">{option}</a>
					</Link>
				</span>
			</p>
		</div>
	);
};

export default HelperMsg;

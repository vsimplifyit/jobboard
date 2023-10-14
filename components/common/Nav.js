import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { JobContext } from '../context/JobContext';
import fire from '../../utils/firebase';
import styles from '../../styles/nav.module.css';

const Nav = () => {
	const {
		hasSignedIn: val,
		setHasSignedIn: setVal,
		isOrg
	} = useContext(AuthContext);
	const { setUserJobs } = useContext(JobContext);
	const [hasSignedIn, setHasSignedIn] = useState(val);

	useEffect(() => {
		const signedIn = localStorage.getItem('hasSignedIn');
		setHasSignedIn(signedIn);
	}, []);

	/**
	 *
	 *
	 * log out user from the system
	 */
	const handleLogout = () => {
		fire.auth().signOut();
		setHasSignedIn(false);
		setVal(false);
		setUserJobs([]);
		localStorage.setItem('hasSignedIn', false);
		localStorage.setItem('email', null);
	};

	return (
		<div className={styles.container}>
			<div className={styles.main_container}>
				<div className={styles.img_container}>
					<Link href="/"  legacyBehavior >
						<a id="link">
							<Image
								src="/logo.png"
								alt="jobboard"
								width={200}
								height={70}
							/>
						</a>
					</Link>
				</div>
				<div className={styles.links_container}>
					{!val ? (
						<>
							<Link href="/login" legacyBehavior >
								<div className={styles.links}>
									<a id="link">Login</a>
								</div>
							</Link>
							<Link href="/signup" legacyBehavior >
								<div className={styles.links}>
									<a id="link">Sign Up</a>
								</div>
							</Link>
						</>
					) : (
						<>
							<Link href="/dashboard" legacyBehavior >
								<div className={styles.links}>
									<a id="link">Dashboard</a>
								</div>
							</Link>
							<Link href="/" legacyBehavior >
								<div
									className={styles.links}
									onClick={handleLogout}
								>
									<a id="link">Logout</a>
								</div>
							</Link>
						</>
					)}

					<div>
						{val ? (
							isOrg ? (
								<Link href="/hire" legacyBehavior >
									<a id="link">
										<button>Post a Job</button>
									</a>
								</Link>
							) : null
						) : (
							<Link href="/login" legacyBehavior >
								<a id="link">
									<button>Post a Job</button>
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;

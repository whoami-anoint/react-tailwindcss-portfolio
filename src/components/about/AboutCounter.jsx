import { useCountUp } from 'react-countup';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 12, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 20, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
			</div>
			
		</div>
	);
};

export default AboutCounter;

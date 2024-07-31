import Script from 'next/script';

const GoogleAnalyticsScript = () => {
	return (
		<>
			<Script
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-RY6C2B7RQH'
			/>
			<Script id='google-analytics'>
				{` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RY6C2B7RQH');`}
			</Script>
		</>
	);
};

export default GoogleAnalyticsScript;

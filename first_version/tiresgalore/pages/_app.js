// pages/_app.js
import '../src/app/globals.css';
import RootLayout from '../src/app/layout';

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;

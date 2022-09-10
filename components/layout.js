import Head from 'next/head';
import styles from '../styles/layout.module.css';
import Link from 'next/link';
import Navbar from './navbar';
import Footer from './footer';

const name = 'Dan';
export const siteTitle = 'Daniel Kim';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href='/favicon.ico' />
                <meta 
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta 
                    property="og.image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og-title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Navbar />
            <div className={styles.body}>
            <main>{children}</main>
            </div>
            {!home && (
                <div className={styles.backToHome} style={{margin: '3rem'}}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <Footer />
        </div>
    )
}
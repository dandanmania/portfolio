import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Link from "next/link";

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    }
}

export default function Post({ postData }) {
    return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article style={{padding: '0 3rem'}}>
            <h1 className={utilStyles.headingx1}>{postData.title}</h1>
            <div style={{textAlign: '-webkit-center'}}>
            <img src={postData.image} style={{maxHeight: '30rem'}}/> 
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <Link href={postData.gh}>
                <a target="_blank" className={`${utilStyles.greenBg} ${utilStyles.whiteText} ${utilStyles.projectButton}`}>
                    GitHub Repo
                </a>
            </Link>
            <Link href={postData.link}>
                <a target="_blank" className={`${utilStyles.greenBg} ${utilStyles.whiteText} ${utilStyles.projectButton}`} style={{ marginLeft: '10px'}}>
                    Live Site
                </a>
            </Link>
        </article>
    </Layout>
    );
}
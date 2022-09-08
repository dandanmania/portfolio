import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Contact from '../components/contact';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div style={{textAlign: "center", backgroundColor: 'white'}} className={`${utilStyles.headingMd} ${utilStyles.body}`}>
        <Image
            priority
            src="/../public/images/DK_logo_proto2.png"
            height={890/2}
            width={786/2}
            alt="Logo"
        />
      </div>
        <section className={`${utilStyles.headingMd} ${utilStyles.body}`} style={{display: 'flex', alignItems:'center', textAlign: 'center', paddingBottom: '9rem', backgroundColor: 'rgba(225,225,225,0.5)'}}>
          <div style={{paddingRight: '50px'}}>
          <h1>Hello I'm Daniel Kim and I'm an aspiring web developer!</h1>
          <p>
          My name is Daniel Kim. I graduated with a degree in Human Biology, but found out the field was not for me. At the moment, I am pursuing web development to hopefully enter a bright new career.
          </p>
          </div>
          <div>
          <Image 
            priority
            src="/../public/images/daniel_photo.jpg"
            width={700}
            height={700}
          />
          </div>
        </section>
      <section style={{backgroundColor: 'rgba(66,155,118,0.75)', color: 'white', paddingBottom:'0.5rem'}} className={utilStyles.body}>
      <h2 className={utilStyles.headingTitle} style={{translate: '0 -13.075rem', color: '#292929', position: 'relative'}}>Tools</h2>
      <div style={{ justifyContent:'center', translate: '0 -9rem'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', placeContent: 'center'}}>
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                style={{height: '125px', width: '125px', margin: '25px'}}
              />
              <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
              style={{height: '125px', width: '125px', margin: '25px'}}
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                style={{height: '125px', width: '125px', margin: '25px'}}
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                style={{height: '125px', width: '125px', margin: '25px'}}
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                style={{height: '125px', width: '125px', margin: '25px'}}
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                style={{height: '125px', width: '125px', margin: '25px'}}
              />
        </div>
      </div>
      </section>
      <div className={utilStyles.body}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} style={{textAlign: 'right'}}>
        <h1 className={utilStyles.headingTitle} style={{translate: '0 -13.15rem', color: 'white', position: 'relative'}}>Projects</h1>
        <div style={{translate: '0 -9rem'}}>
        <h4 style={{color: 'white'}}>Project but like Kind of like the cards without the card</h4>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        </div>
      </section>
      </div>
      <section className={utilStyles.body} style={{backgroundColor: 'white', height: '34rem'}}>
        <h2 className={utilStyles.headingTitle} style={{translate: '0 -13.082rem', color: '#bebebe', position: 'relative'}}>Contact</h2>
        <div style={{translate: '0 -11rem'}}>
          <Contact />
        </div>
      </section>
    </Layout>
  )
}

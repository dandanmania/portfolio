import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Contact from '../components/contact';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={`${utilStyles.headingMd} ${utilStyles.body} ${utilStyles.imageContainer}`}>
        <Image
          priority
          src="/../public/images/DK_logo_proto2.png"
          height={890/2}
          width={786/2}
          alt="Logo"
        />
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.body} ${utilStyles.introSection}`}>
        <div className={utilStyles.paddingR50}>
          <h1 className={utilStyles.h1}>Hello I'm Daniel Kim and I'm an aspiring web developer!</h1>
          <p className={utilStyles.p}>
            My name is Daniel Kim. I graduated with a degree in Human Biology, but found out the field was not for me. At the moment, I am pursuing web development to hopefully enter a bright new career.
          </p>
        </div>
        <Image 
          priority
          src="/../public/images/daniel_photo.jpg"
          width={500}
          height={500}
        />
      </section>
      <section className={`${utilStyles.body} ${utilStyles.toolsSection}`}>
        <h2 className={`${utilStyles.headingTitle} ${utilStyles.toolsTitle}`}>Tools</h2>
        <div className={utilStyles.toolsImagesDivOne}>
          <div className={utilStyles.toolsImagesDivTwo}>
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className={utilStyles.toolsImages}
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className={utilStyles.toolsImages}
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className={utilStyles.toolsImages}
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className={utilStyles.toolsImages}
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className={utilStyles.toolsImages}
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                className={utilStyles.toolsImages}
              />
          </div>
        </div>
      </section>
      <div className={`${utilStyles.body} ${utilStyles.projectContainer}`}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.projectSection}`}>
          <h1 className={`${utilStyles.headingTitle} ${utilStyles.projectTitle}`}>Projects</h1>
          <div className={utilStyles.projectShift}>
            <div className={`${utilStyles.list} ${utilStyles.projectFlexDiv}`}>
              {allPostsData.map(({ id, title, direction, image, shift, techs }) => (
                <div className={`${utilStyles.listItem} ${utilStyles.projectCard}`} key={id} style={{ alignSelf: `${direction}`, translate: `${shift}` }}>
                  <Link href={`/project/${id}`}>
                    <div className={utilStyles.projectCardDiv}>
                      <img src={image} className={utilStyles.projectImg} />
                      <div className={`${utilStyles.greenBg} ${utilStyles.projectLabel}`}>
                        <h1 className={`${utilStyles.whiteText} ${utilStyles.marginZero} ${utilStyles.paddingZero}`}>{title}</h1>
                        <small className={utilStyles.whiteText}>
                        {techs}
                        </small>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section className={`${utilStyles.body} ${utilStyles.contactSection} ${utilStyles.whiteBg}`}>
        <h2 className={`${utilStyles.headingTitle} ${utilStyles.contactTitle}`}>Contact</h2>
        <div className={utilStyles.contactCard}>
          <Contact />
        </div>
      </section>
    </Layout>
  )
}

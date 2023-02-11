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

      <section className={`${utilStyles.headingMd} ${utilStyles.body} ${utilStyles.introSection}`}>
        <div className={`${utilStyles.paddingR50} ${utilStyles.paddingB30}`}>
          <h1 className={utilStyles.h1}>Hello I'm Daniel Kim and I'm a web developer!</h1>
          <p className={utilStyles.p}>
          I previously studied human biology and was trained to apply emergency care for patients.
          I bear a innate calm attitude and carefully approach any problem.
          I am able to work well with others and bring forth my creativity and determination to get the job done and move plans forward.
          </p>
          <p className={utilStyles.p}>
          In college, I had taken a basic coding class out of curiosity and had enjoyed making simple websites.
          When I was at a crossroads, I gathered the courage to try something new and trained at CareerFoundry's Full Stack Web Development Course.
          Through trial and tribulation, my understanding of web apps and how they work and operate have evolved and will continue to do so.
          I want to put my past experiences towards building a bright career that involved my interest in computers and the internet, which led me to pursue a job in tech.
          As a developer, I'm excited to expand my skills to bring an enriching experience to users.
          </p>
          <p className={utilStyles.p}>
          I am currently looking for full-time work and am okay with both in-person and remote jobs.
          </p>
        </div>
        <div className={`${utilStyles.introImage}`}>
          <Image 
            priority
            src="/daniel_photo2.png"
            alt="Picture of the Developer"
            width={2000}
            height={2000}
          />
        </div>
      </section>
      <section className={`${utilStyles.body} ${utilStyles.toolsSection}`}>
        <h2 className={`${utilStyles.headingTitle} ${utilStyles.toolsTitle}`}>Tools</h2>
        <div className={utilStyles.toolsImagesDivOne}>
          <div className={utilStyles.toolsImagesDivTwo}>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                  className={utilStyles.toolsImages}
                />
              </div>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                  className={utilStyles.toolsImages}
                />
              </div>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  className={utilStyles.toolsImages}
                />
              </div>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  className={utilStyles.toolsImages}
                />

              </div>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                  className={utilStyles.toolsImages}
                />
              </div>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                  className={utilStyles.toolsImages}
                />

              </div>
          </div>
        </div>
      </section>


      <div className={`${utilStyles.body}`}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.paddingB50} ${utilStyles.projectSection}`}>
          <h1 className={`${utilStyles.headingTitle} ${utilStyles.projectTitle}`}>Projects</h1>
            <div className={`${utilStyles.list} ${utilStyles.flexBox}`}>
              {allPostsData.map(({ id, title, image, techs, gh, link }) => (
                <div className={`${utilStyles.listItem} ${utilStyles.projectCard}`} key={id}>
                  <section>
                    <div>
                      <img src={image} className={utilStyles.projectImg} />
                      <div className={`${utilStyles.greenBg} ${utilStyles.projectLabel}`}>
                        <h1 className={`${utilStyles.whiteText} ${utilStyles.marginZero} ${utilStyles.paddingZero}`}>{title}</h1>
                        <small className={`${utilStyles.whiteText} ${utilStyles.marginB15} ${utilStyles.displayBlock}`}>
                        {techs}
                        </small>
                        <div className={`${utilStyles.marginB5}`}>
                        <Link href={gh}>
                <a target="_blank" className={`${utilStyles.grayBg} ${utilStyles.whiteText} ${utilStyles.projectButton}`}>
                    GitHub Repo
                </a>
            </Link>
            {link ? (<Link href={link}>
                <a target="_blank" className={`${utilStyles.grayBg} ${utilStyles.whiteText} ${utilStyles.projectButton}`} style={{ marginLeft: '10px'}}>
                    Live Site
                </a>
            </Link>) : (
                <></>
            )}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              ))}
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

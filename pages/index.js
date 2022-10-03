import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Contact from '../components/contact';
import StarRatings from 'react-star-ratings';

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
          src="/DK_logo_proto2.png"
          height={890/2}
          width={786/2}
          alt="Daniel's Logo"
        />
      </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.body} ${utilStyles.introSection}`}>
        <div className={utilStyles.paddingR50} style={{width: '80vw'}}>
          <h1 className={utilStyles.h1}>Hello I'm Daniel Kim and I'm a web developer!</h1>
          <p className={utilStyles.p}>
          I previously studied human biology and was trained to apply emergency care for patients.
          I bear a innate calm attitude and carefully approach any problem.
          I am able to work well with others and bring forth my creativity and determination to get the job done and move plans forward.
          </p>
          <p>
          In college, I had taken a basic coding class out of curiosity and had enjoyed making simple websites.
          When I was at a crossroads, I gathered the courage to try something new and trained at CareerFoundry's Full Stack Web Development Course.
          Through trial and tribulation, my understanding of web apps and how they work and operate have evolved and will continue to do so.
          I want to put my past experiences towards building a bright career that involved my interest in computers and the internet, which led me to pursue a job in tech.
          As a developer, I'm excited to expand my skills to bring an enriching experience to users.
          </p>
          <p>
          I am currently looking for full-time work and am okay with both in-person and remote jobs.
          </p>
        </div>
        <Image 
          priority
          src="/daniel_photo.jpg"
          alt="Picture of the Developer"
          width={300}
          height={300}
        />
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
                <div className={utilStyles.stars}>
                  <StarRatings 
                    rating={4.0}
                    starDimension="15px"
                    starSpacing="5px"
                    starRatedColor="#292929"
                  />
                </div>
              </div>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                  className={utilStyles.toolsImages}
                />
                <div className={utilStyles.stars}>
                  <StarRatings 
                      rating={4.0}
                      starDimension="15px"
                      starSpacing="5px"
                      starRatedColor="#292929"
                    />
                </div>
              </div>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  className={utilStyles.toolsImages}
                />
                <div className={utilStyles.stars}>
                  <StarRatings 
                    rating={3.5}
                    starDimension="15px"
                    starSpacing="5px"
                    starRatedColor="#292929"
                  />
                </div>
              </div>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                  className={utilStyles.toolsImages}
                />
                <div className={utilStyles.stars}>
                  <StarRatings 
                    rating={3.5}
                    starDimension="15px"
                    starSpacing="5px"
                    starRatedColor="#292929"
                  />
                </div>
              </div>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                  className={utilStyles.toolsImages}
                />
                <div className={utilStyles.stars}>
                  <StarRatings 
                    rating={2.4}
                    starDimension="15px"
                    starSpacing="5px"
                    starRatedColor="#292929"
                  />
                </div>
              </div>
              <div className={utilStyles.toolsImagesDivThree}>
                <img
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                  className={utilStyles.toolsImages}
                />
                <div className={utilStyles.stars}>
                  <StarRatings 
                    rating={2.2}
                    starDimension="15px"
                    starSpacing="5px"
                    starRatedColor="#292929"
                  />
                </div>
              </div>
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

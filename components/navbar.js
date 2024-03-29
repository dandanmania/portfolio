import Link from "next/link";
import userData from "../constants/data";
import styles from "../styles/navbar.module.css";
import Image from 'next/image';

export default function Navbar() {
    return (
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <Image
                      priority
                      src="/DK_logo_proto2.png"
                      layout="fill"
                      objectFit="contain"
                      alt="Daniel's Logo"
                    />
                </div>
                <Link href="/">
                    <a className={`${styles.mobileHide}`}>
                        <h1 className={styles.name}>{userData.name}</h1>
                        <p className={styles.designation}>{userData.designation}</p>
                    </a>
                </Link>
                <span style={{flex: '1 1 auto'}}></span>
                <Link href="/files/Kim.Daniel.Webdeveloper.2023.pdf"><a target="_blank" style={{paddingBottom: '8px'}}><h3>RESUME</h3></a></Link>
                <span className={`${styles.svgSplitter}`}></span>
                <Link href="https://www.linkedin.com/in/daniel-sinhoo-kim/">
                    <a target="_blank" className={`${styles.mobileHide}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className={styles.svg}
                    >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    </a>
                </Link>
                <span className={styles.svgSplitter}></span>
                <Link href="https://medium.com/@dandanmania">
                      <a target="_blank" className={`${styles.mobileHide}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1633.77 1150.51"
                        height="32"
                        fill="currentColor"
                      >
                        <g id="Layer_2" data-name="Layer 2"><g id="Symbol"><path d="M883.45,576.26c0,163.67-131.78,296.35-294.33,296.35S294.78,739.93,294.78,576.26,426.56,279.9,589.12,279.9,883.45,412.59,883.45,576.26"/><path d="M1206.34,576.26c0,154.06-65.89,279-147.17,279S912,730.32,912,576.26s65.88-279,147.16-279,147.17,124.9,147.17,279"/><path d="M1338.41,576.26c0,138-23.17,249.94-51.76,249.94s-51.75-111.91-51.75-249.94,23.17-249.94,51.75-249.94,51.76,111.9,51.76,249.94"/></g></g>
                      </svg>
                      </a>
                </Link>
                <span className={styles.svgSplitter}></span>
                <Link href="https://twitter.com/kimosterferson">
                    <a target="_blank" className={`${styles.mobileHide}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    </a>
                </Link>
            </div>
    )
}
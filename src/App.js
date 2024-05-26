import styles from './App.module.scss';

export default function App() {
  return (
    <div>
      <section className={styles.section}>
        {' '}
        {/* for the header to have the background color over the full width not only for the container */}
        <div className={styles.container}>
          {' '}
          {/* wrap the header in a container and set width and height to structure the top part */}
          <header className={styles.header}>
            <div>
              <a href="http://localhost:3001/">
                <picture>
                  <img
                    src="/img/ImgFraseLogo.png"
                    alt="Frase Logo"
                    width="100"
                    // height="255"
                    // src="https://www.frase.io/wp-content/uploads/2020/11/cropped-frase-logo-white.png"
                    // alt="Frase Logo"
                    // srcSet="https://www.frase.io/wp-content/uploads/2020/11/cropped-frase-logo-white.png 901w, https://www.frase.io/wp-content/uploads/2020/11/cropped-frase-logo-white-300x85.png 300w, https://www.frase.io/wp-content/uploads/2020/11/cropped-frase-logo-white-768x217.png 768w"
                    // sizes="(max-width: 901px) 100vw, 901px"
                  />
                </picture>
              </a>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="/" id="top-link1">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/" id="top-links2">
                    Resources
                  </a>{' '}
                  {/* dropdown-list appears when you hover. in the dropdown-list more <a> with an effect on the mouse when hovering. other then that no effects*/}
                </li>
                <li>
                  <a href="/" id="top-links3">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/" className="button">
                    {' '}
                    {/* hover effect, and color change after clicking */}
                    Try for Free
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </section>
      <main className={styles.main}>
        <div>
          <hgroup>
            <h1 className={styles.h1}>How content creators do SEO</h1>
            <p>
              Frase empowers content creators to go fom keyword to
              well-researched, SEO-optimized articles faster and better
            </p>
          </hgroup>
          <a href="/" className="button">
            Get Started for Free
          </a>{' '}
          {/* hover effect and color change after clicking */}
          <p>No credit card required</p>
        </div>
        <div>
          {' '}
          {/* maybe better to put it in the <div> with h1,h2?? */}
          <img src="/img/image-screen-v.3.png" alt="" width="1024px" />
        </div>
        <div>
          <p>Trusted by 30,000+ content, SEO, and marketing teams including…</p>
        </div>
        <div>
          {' '}
          {/* Digitas, ptc, coursera, talkspace, merkle, career karma */}
          <ul>
            <li>
              <img></img>
            </li>
            <li>
              <img></img>
            </li>
            <li>
              <img></img>
            </li>
            <li>
              <img></img>
            </li>
            <li>
              <img></img>
            </li>
            <li>
              <img></img>
            </li>
          </ul>
        </div>
        <div>
          <hgroup>
            <h2 className={styles.h2}>
              Research-based AI content you can trust
            </h2>
            <p>
              Analyse search queries and generate research-driven SEO content
              with AI
            </p>
          </hgroup>
        </div>
        <div>
          {' '}
          {/* again maybe redundant to have an extra div here?? */}
          <video></video>
        </div>
        <div>
          <hgroup>
            <h2 className={styles.h2}>
              Go faster with a unified SEO content workflow
            </h2>
            <p>
              Research, outline, write and optimize content in the same place
            </p>
          </hgroup>
        </div>
        <div>
          <ul>
            {' '}
            {/* the four buttons change 2 <div> underneath. color change when hover and after clicking */}
            <li>
              <button>Research</button>
            </li>
            <li>
              <button>Outline</button>
            </li>
            <li>
              <button>Write</button>
            </li>
            <li>
              <button>Optimize</button>
            </li>
          </ul>
        </div>
        <div>
          {' '}
          {/* Textfields and img changing after clicking on 4 buttons above */}
          <div>
            <div>
              <h1 className={styles.h1}>SERP research made simple</h1>
              <p className={styles.pResearch}>
                Stop aimlessly clicking through SERP results – Frase saves you
                time by analyzing and condensing content from the top search
                results of any query.
              </p>
              <ul>
                <li className={styles.pResearch}>
                  Analyze SEO competitors’ content easily via an intuitive
                  research panel.
                </li>
                <li className={styles.pResearch}>
                  Visualize key SERP metrics like word count, domain rating, and
                  heading count.
                </li>
                <li className={styles.pResearch}>
                  Use AI to generate full-length, optimized content briefs in 6
                  seconds.
                </li>
              </ul>
            </div>
            <div>
              <picture>
                <img
                  src="/img/image-screen-v.2-02.png"
                  alt=""
                  width="580"
                  height="auto"
                />
              </picture>
            </div>
          </div>
        </div>
        <dic>
          <hgroup>
            <h2 className={styles.h2}>Build a content engine that works</h2>
            <p>
              Develop a repeatable content creation process that you can manage
              at scale.
            </p>
          </hgroup>
        </dic>
        <div>
          {' '}
          {/* Three div's in a top div with three tiny img and text underneath */}
          <div>
            <div>
              <img></img>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <div>
            <img></img>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <img></img>
          </div>
          <div>
            <p></p>
          </div>
        </div>
        <div>
          {/* Three div's in a bottom div with three tiny img and text underneath */}
          <div>
            <div>
              <img></img>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <div>
            <img></img>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <img></img>
          </div>
          <div>
            <p></p>
          </div>
        </div>
        <div>
          {' '}
          {/* two textfields designed as speech-bubbles in rectangle form with pictures and names of person speaking underneath anda little triangle at the border line */}
          <div>
            <p></p>
          </div>
          <div>
            <img></img>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <img></img>
            <p></p>
          </div>
        </div>
        <div>
          <div>
            <hgroup>
              <h2 className={styles.h2}>
                For content creators that put research first
              </h2>
              <p>
                Breakthe "commodity cage" through content that stands out from
                the crowd.
              </p>
            </hgroup>
          </div>
          <a href="/" className="button">
            Get Started for Free
          </a>{' '}
          {/* hover effect and color change after clicking */}
        </div>
      </main>
      <footer>
        <div>
          <h3 className={styles.h3}>Frase</h3>
          <p></p>
        </div>
        <div></div> {/* white space */}
        <div>
          <h3 className={styles.h3}>Company</h3>
          <ul>
            <li>
              <a href="/">About</a>{' '}
              {/* underline when hovering. no effect after clicking*/}
            </li>
            <li>
              <a href="/">Pricing</a>{' '}
              {/* underline when hovering. no effect after clicking*/}
            </li>
            <li>
              <a href="/">Affiliates</a>{' '}
              {/* underline when hovering. no effect after clicking*/}
            </li>
            <li>
              <a href="/">Contact Us</a>{' '}
              {/* underline when hovering. no effect after clicking*/}
            </li>
            <li>
              <a href="/">Status</a>{' '}
              {/* underline when hovering. no effect after clicking*/}
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.h3}>Resources</h3>
          <ul>
            <li>
              <a href="/">Attend Weekly Webinar</a>{' '}
              {/* underline when hovering. no effect after clicking*/}
            </li>
            <li>
              <a href="/">Blog</a>{' '}
              {/* underline when hovering. no effect after clicking*/}
            </li>
            <li>
              <a href="/">Help Center</a>{' '}
              {/* underline when hovering. no effect after clicking*/}
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.h3}>Follow us</h3>
          <ul>
            <li>
              <a href="/">
                {' '}
                {/* no effects */}
                <span>
                  <svg></svg>
                </span>
                Facebook
              </a>
            </li>
            <li>
              <a href="/">
                {' '}
                {/* no effects */}
                <span>
                  <svg></svg>
                </span>
                Twitter
              </a>
            </li>
            <li>
              <a href="/">
                {' '}
                {/* no effects */}
                <span>
                  <svg></svg>
                </span>
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <p>© 2024 Frase, Inc</p>
        </div>
        <div>
          <a href="/">Privacy Policy</a> {/* no effects */}
          <a href="/">Terms of Use</a>
        </div>
      </footer>
    </div>
  );
}

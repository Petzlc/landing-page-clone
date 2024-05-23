import styles from './App.module.scss';

export default function App() {
  return (
    <div className={styles.app}>
      <header>
        <div>
          <img></img>
          <a>frase</a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Resources</a>{' '}
              {/* another list appears when you hover*/}
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
        <a href="/" class="button">
          Try for Free
        </a>{' '}
        {/* hover effect, and color change after clicking */}
      </header>
      <div>
        <h1>How content creators do SEO</h1>
        <p>
          Frase empowers content creators to go fom keyword to well-researched,
          SEO-optimized articles faster and better
        </p>
        <a href="/" class="button">
          Get Started for Free
        </a>{' '}
        {/* hover effect and color change after clicking */}
        <p></p>
      </div>
      <div>
        {' '}
        {/* maybe better to put it in the <div> with h1,h2?? */}
        <img></img>
      </div>
      <div>
        <p></p>
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
        <h2>Research-based AI content you can trust</h2>
        <p>
          Analyse search queries and generate research-driven SEO content with
          AI
        </p>
      </div>
      <div>
        {' '}
        {/* again maybe redundant to have an extra div here?? */}
        <video></video>
      </div>
      <div>
        <h2>Go faster with a unified SEO content workflow</h2>
        <p>Research, outline, write and optimize content in the same place</p>
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
          <h1></h1>
          <p></p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <img></img>
        </div>
      </div>
      <dic>
        <h2>Build a content engine that works</h2>
        <p>
          Develop a repeatable content creation process that you can manage at
          scale.
        </p>
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
          <h2>For content creators that put research first</h2>
          <p>
            Breakthe "commodity cage" through content that stands out from the
            crowd.
          </p>
        </div>
        <a href="/" class="button">
          Get Started for Free
        </a>{' '}
        {/* hover effect and color change after clicking */}
      </div>
      <footer></footer>
    </div>
  );
}

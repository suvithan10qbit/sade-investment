import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Purpose & Approach",
  description:
    "Discover SADE's vision, mission and objectives: disciplined research, trusted partnerships and long-term value creation.",
};

const objectives = [
  [
    "Thoughtful diversification",
    "Build a portfolio across selected sectors and markets, guided by careful evaluation.",
  ],
  [
    "Sustainable growth",
    "Prioritise lasting business value over short-term gains.",
  ],
  [
    "Disciplined decisions",
    "Assess risk through rigorous analysis and clear governance.",
  ],
  [
    "Strong partnerships",
    "Build relationships with co-investors, operators and institutions around shared objectives.",
  ],
  [
    "Transparent conduct",
    "Act ethically, communicate clearly and take responsibility for our decisions.",
  ],
  [
    "Entrepreneurial talent",
    "Attract and develop skilled people who bring initiative and sound judgement.",
  ],
];
const goals = [
  [
    "Grow with discipline",
    "Seek steady growth in assets under ownership, with decisions grounded in long-term value.",
  ],
  [
    "Expand selectively",
    "Explore new sectors and regions at a measured pace, with research guiding each step.",
  ],
  [
    "Strengthen accountability",
    "Develop clear reporting and strong corporate governance as the business evolves.",
  ],
  [
    "Invest responsibly",
    "Work towards incorporating responsible and sustainable investment practices.",
  ],
];
const values = [
  "Integrity",
  "Transparency",
  "Discipline",
  "Partnership",
  "Long-term vision",
  "Accountability",
];

export default function AboutPage() {
  return (
    <div className="sade-editorial">
      <section className="purpose-hero">
        <Image
          src="/Golden Hour Curves by the Water.png"
          alt="Sculptural waterfront architecture in warm evening light"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="purpose-hero-shade" />
        <div className="editorial-container relative">
          <p className="editorial-eyebrow">About SADE</p>
          <h1>
            Investing with vision.
            <br />
            <span>Growing with integrity.</span>
          </h1>
          <p className="purpose-intro">
            We aspire to build lasting value through disciplined research,
            trusted partnerships and a long-term view.
          </p>
          <div className="editorial-actions">
            <a href="#purpose" className="editorial-button">
              Discover our purpose <span aria-hidden="true">&#8599;</span>
            </a>
            <Link href="/governance" className="editorial-text-link">
              Our governance <span aria-hidden="true">&#8599;</span>
            </Link>
          </div>
          <div className="purpose-identity">
            <span>ADGM registered</span>
            <span>Company no. 34392</span>
            <span>Abu Dhabi, UAE</span>
          </div>
        </div>
      </section>

      <nav className="editorial-jump" aria-label="About page sections">
        <div className="editorial-container">
          <a href="#purpose">Our purpose</a>
          <a href="#objectives">Our objectives</a>
          <a href="#goals">Looking ahead</a>
          <a href="#values">Our values</a>
          <a href="#approach">Our approach</a>
        </div>
      </nav>

      <section id="purpose" className="editorial-section editorial-container">
        <div className="editorial-heading">
          <p className="editorial-eyebrow">01 / Our purpose</p>
          <h2>
            A clear direction.
            <br />A lasting commitment.
          </h2>
          <p>
            SADE INVESTMENTS HOLDING LIMITED is a private company limited by
            shares, registered in the Abu Dhabi Global Market. Our purpose
            connects commercial ambition with integrity and a considered
            approach to ownership.
          </p>
        </div>
        <div className="purpose-grid">
          <article className="purpose-card purpose-card-dark">
            <span className="editorial-eyebrow">Our vision</span>
            <h3>
              Lasting value.
              <br />
              Trusted relationships.
            </h3>
            <p>
              To become a globally respected investment company, known for
              creating lasting value, building trusted partnerships and
              upholding integrity in investing.
            </p>
            <span className="purpose-orbit" aria-hidden="true" />
          </article>
          <article className="purpose-card">
            <span className="editorial-eyebrow">Our mission</span>
            <h3>
              Research deeply.
              <br />
              Think long term.
            </h3>
            <p>
              To identify and grow high-quality opportunities through rigorous
              research, disciplined risk management and long-term thinking,
              seeking sustainable value for our shareholders, partners and
              communities.
            </p>
            <div className="purpose-card-foot">
              Research <span>&#8594;</span> Judgement <span>&#8594;</span>{" "}
              Partnership
            </div>
          </article>
        </div>
      </section>

      <section id="objectives" className="editorial-section editorial-soft">
        <div className="editorial-container">
          <div className="editorial-heading">
            <p className="editorial-eyebrow">02 / Our objectives</p>
            <h2>What we work towards.</h2>
            <p>
              Six priorities shape how we aim to build the business and the
              relationships around it.
            </p>
          </div>
          <div className="objectives-grid">
            {objectives.map(([title, text], i) => (
              <article key={title} className="objective-card">
                <span className="editorial-number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="goals" className="editorial-section editorial-container">
        <div className="goals-layout">
          <div className="editorial-heading">
            <p className="editorial-eyebrow">03 / Looking ahead</p>
            <h2>
              Measured progress.
              <br />
              Meaningful ambition.
            </h2>
            <p>
              Our goals express the direction we intend to take as we build a
              reputation for reliability, transparency and professionalism.
            </p>
            <p className="editorial-note">
              These are forward-looking ambitions, not forecasts or guarantees
              of performance.
            </p>
          </div>
          <ol className="goals-list">
            {goals.map(([title, text], i) => (
              <li key={title}>
                <span className="goal-marker">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="values" className="values-band">
        <div className="editorial-container">
          <p className="editorial-eyebrow">04 / Our values</p>
          <h2>The principles behind every decision.</h2>
          <div className="values-list">
            {values.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="editorial-section editorial-container">
        <div className="editorial-heading">
          <p className="editorial-eyebrow">05 / Our approach</p>
          <h2>Conviction starts with understanding.</h2>
          <p>
            Our intended approach brings research, risk awareness and
            partnership into the same conversation.
          </p>
        </div>
        <div className="objectives-grid approach-grid">
          {[
            [
              "Understand",
              "Study the business, its market and the people behind it before making a commitment.",
            ],
            [
              "Evaluate",
              "Consider opportunity alongside risk, with disciplined analysis and clear decision-making.",
            ],
            [
              "Build together",
              "Seek alignment with partners and take a long-term view of how value can develop.",
            ],
          ].map(([title, text], i) => (
            <article className="objective-card" key={title}>
              <span className="editorial-number">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="editorial-callout">
          <div>
            <p className="editorial-eyebrow">Built on accountability</p>
            <h3>Explore the structure behind our approach.</h3>
          </div>
          <Link href="/governance" className="editorial-button">
            Governance &amp; company information{" "}
            <span aria-hidden="true">&#8599;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Governance & Company Information",
  description:
    "SADE INVESTMENTS HOLDING LIMITED: company registration, ownership structure and governance in the Abu Dhabi Global Market.",
};
const principles = [
  {
    title: "Managing conflicts",
    text: "Under the Articles of Association, a director with a conflict of interest is normally excluded from voting on the relevant decision.",
    source: "Article 14",
  },
  {
    title: "Recording decisions",
    text: "Directors' decisions must be recorded in writing and retained for at least ten years, supporting a clear record of corporate decision-making.",
    source: "Article 15",
  },
  {
    title: "Shareholder oversight",
    text: "Shareholders may direct the directors by special resolution, as provided in the Articles of Association.",
    source: "Article 4",
  },
  {
    title: "Distribution decisions",
    text: "Dividends may be declared by ordinary resolution on the directors' recommendation. The Articles permit non-cash distributions and the capitalisation of profits into shares.",
    source: "Articles 30, 34 & 36",
  },
];
export default function GovernancePage() {
  return (
    <div className="sade-editorial">
      <section className="editorial-page-hero">
        <div className="editorial-container">
          <p className="editorial-eyebrow">
            Governance &amp; company information
          </p>
          <h1>
            Clear structure.
            <br />
            <span>Accountable decisions.</span>
          </h1>
          <p>
            Our corporate framework defines how the company is governed, how
            decisions are recorded and how shareholders exercise oversight.
          </p>
          <div className="editorial-actions">
            <a href="#company" className="editorial-button">
              Company information <span aria-hidden="true">&#8595;</span>
            </a>
            <Link href="/legal/terms" className="editorial-text-link">
              Website terms &#8599;
            </Link>
          </div>
        </div>
      </section>
      <section id="company" className="editorial-section editorial-container">
        <div className="goals-layout">
          <div className="editorial-heading">
            <p className="editorial-eyebrow">Our corporate identity</p>
            <h2>
              Registered in ADGM.
              <br />
              Built for ownership.
            </h2>
            <p>
              SADE INVESTMENTS HOLDING LIMITED is a special purpose vehicle for
              holding ownership of equity and non-equity assets.
            </p>
            <p>
              The company may incorporate subsidiaries outside ADGM. Its licence
              does not permit the registration of branches.
            </p>
          </div>
          <dl className="company-record">
            {[
              ["Legal name", "SADE INVESTMENTS HOLDING LIMITED"],
              ["Company type", "Private company limited by shares"],
              ["Registration authority", "ADGM Registration Authority"],
              ["Registration number", "34392"],
              [
                "Registered office",
                "2409C, 24, Tamouh Tower, Al Reem Island, Abu Dhabi, UAE",
              ],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="editorial-section editorial-soft">
        <div className="editorial-container">
          <div className="editorial-heading">
            <p className="editorial-eyebrow">Governance in practice</p>
            <h2>A framework for responsibility.</h2>
            <p>
              The company's Articles of Association set out the following
              provisions. They describe the corporate framework, rather than an
              investment performance commitment.
            </p>
          </div>
          <div className="governance-grid">
            {principles.map((item) => (
              <article className="objective-card" key={item.title}>
                <span className="editorial-eyebrow">{item.source}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="editorial-section editorial-container">
        <div className="goals-layout">
          <div className="editorial-heading">
            <p className="editorial-eyebrow">Risk &amp; financial discipline</p>
            <h2>
              Opportunity considered
              <br />
              alongside responsibility.
            </h2>
            <p>
              Disciplined analysis, clear governance and transparent conduct are
              central to our stated objectives. Our goals include developing
              reporting and incorporating responsible investment practices as
              the business evolves.
            </p>
          </div>
          <div className="risk-panel">
            <h3>Understanding the scope</h3>
            <p>
              The commercial licence records the company as an asset-holding
              special purpose vehicle under &ldquo;Other Economic
              Activities&rdquo;; it does not list regulated financial
              activities.
            </p>
            <p>
              Investments involve risk, including loss of capital. Values can
              fall as well as rise, and past performance is not a reliable
              indicator of future results.
            </p>
            <p>
              This website is for general information. It is not investment
              advice or an offer, invitation or solicitation to invest.
            </p>
            <Link href="/legal/terms" className="editorial-text-link">
              Read the full website terms &#8599;
            </Link>
          </div>
        </div>
        <div className="editorial-callout">
          <div>
            <p className="editorial-eyebrow">Corporate enquiries</p>
            <h3>Questions about SADE?</h3>
            <p>Contact us for further company information.</p>
          </div>
          <Link href="/contact" className="editorial-button">
            Get in touch &#8599;
          </Link>
        </div>
      </section>
    </div>
  );
}

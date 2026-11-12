import Link from "next/link";

export const metadata = {
  title: "Website Terms & Conditions",
  description:
    "Terms for using the SADE INVESTMENTS HOLDING LIMITED website, including information use, investment risk, intellectual property and ADGM jurisdiction.",
};
const sections = [
  {
    id: "operator",
    title: "Website operator & purpose",
    paragraphs: [
      "This website is operated by SADE INVESTMENTS HOLDING LIMITED, a private company limited by shares registered with the ADGM Registration Authority under number 34392. Its registered office is at 2409C, 24, Tamouh Tower, Al Reem Island, Abu Dhabi, UAE.",
      "By accessing or using this website, you agree to these terms. The website provides general information only. It is not an offer, invitation or solicitation to buy, sell or subscribe for any investment, and is not directed at anyone in a jurisdiction where such an offer would be unlawful.",
    ],
  },
  {
    id: "advice",
    title: "No advice or reliance",
    paragraphs: [
      "Nothing on this website constitutes investment, legal, tax or financial advice. You should not rely on its content to make a decision. Obtain independent professional advice before acting on any information provided here.",
    ],
  },
  {
    id: "risk",
    title: "Investment risk",
    paragraphs: [
      "Investments involve risk, including the loss of capital. The value of investments can go down as well as up. Past performance is not a reliable indicator of future results.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "The content on this website, including text, logos, design and graphics, is owned by or licensed to SADE INVESTMENTS HOLDING LIMITED.",
      "You may view and print pages for personal, non-commercial use. You may not otherwise copy, modify, distribute or reuse content without our prior written consent.",
    ],
  },
  {
    id: "liability",
    title: "Accuracy & limitation of liability",
    paragraphs: [
      "We aim to keep information accurate and up to date, but give no warranty that it is complete, accurate or current.",
      "To the fullest extent permitted by law, we are not liable for any loss arising from the use of, or reliance on, this website or its content. Nothing in these terms excludes liability that cannot be excluded by law.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party websites",
    paragraphs: [
      "This website may link to third-party websites. We do not control or endorse them and are not responsible for their content or privacy practices. Access to them is at your own risk.",
    ],
  },
  {
    id: "jurisdiction",
    title: "Governing law & jurisdiction",
    paragraphs: [
      "These terms are governed by the laws applicable in the Abu Dhabi Global Market. Any dispute arising from them is subject to the exclusive jurisdiction of the ADGM Courts.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy & cookies",
    paragraphs: [
      "Our use of personal data is described in our Privacy Policy, and our use of cookies in our Cookie Policy. By using this website, you acknowledge those policies. We process personal data in line with the ADGM Data Protection Regulations 2021.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    paragraphs: [
      "We may update these terms at any time. Continued use of this website after a change means acceptance of the updated terms. The date shown on this page identifies the latest revision.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    paragraphs: [
      "For questions about these terms, use our contact page or write to SADE INVESTMENTS HOLDING LIMITED, 2409C, 24, Tamouh Tower, Al Reem Island, Abu Dhabi, UAE.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="sade-editorial">
      <section className="editorial-page-hero legal-hero">
        <div className="editorial-container">
          <nav aria-label="Breadcrumb" className="legal-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Website terms</span>
          </nav>
          <p className="editorial-eyebrow">Legal information</p>
          <h1>
            Website terms
            <br />
            <span>&amp; conditions.</span>
          </h1>
          <p>The terms that apply when you access and use the SADE website.</p>
          <p className="legal-date">
            Effective and last updated: 12 November 2026
          </p>
        </div>
      </section>
      <div className="editorial-container legal-layout">
        <aside className="legal-index">
          <p className="editorial-eyebrow">On this page</p>
          <nav aria-label="Terms sections">
            {sections.map((section, i) => (
              <a key={section.id} href={`#${section.id}`}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {section.title}
              </a>
            ))}
          </nav>
          <Link href="/governance" className="editorial-text-link">
            Company information &#8599;
          </Link>
        </aside>
        <div className="legal-body">
          <div className="legal-summary">
            <p className="editorial-eyebrow">
              Please read before using this website
            </p>
            <h2>Information, not investment advice.</h2>
            <p>
              This website does not offer investments or provide advice.
              Investments carry risk, including the loss of capital. The full
              terms below apply.
            </p>
          </div>
          {sections.map((section, i) => (
            <section id={section.id} key={section.id} className="legal-section">
              <span className="editorial-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2>{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {section.id === "privacy" && (
                <div className="legal-related">
                  <Link href="/legal/privacy">Privacy Policy &#8599;</Link>
                  <Link href="/legal/cookies">Cookie Policy &#8599;</Link>
                </div>
              )}
              {section.id === "contact" && (
                <Link href="/contact" className="editorial-text-link">
                  Contact SADE &#8599;
                </Link>
              )}
            </section>
          ))}
          <a className="editorial-text-link" href="#main-content">
            Back to top &#8593;
          </a>
        </div>
      </div>
    </div>
  );
}

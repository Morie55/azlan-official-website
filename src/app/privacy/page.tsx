import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | AZLAN (SL) LIMITED",
  description:
    "How AZLAN (SL) LIMITED collects, uses, and protects personal data on the official Azlan marketing website.",
};

const LAST_UPDATED = "16 August 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <section className="bg-primary py-unit-xl relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay pointer-events-none" />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex items-center gap-2 mb-unit-sm">
            <span className="h-[2px] w-8 bg-gold-accent" />
            <span className="font-display text-label-caps text-gold-accent uppercase tracking-widest font-semibold text-[12px]">
              Legal
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-sans text-base md:text-lg text-white/70 mt-unit-sm max-w-2xl">
            How we collect, use, and protect your personal information on this website.
          </p>
          <p className="font-sans text-sm text-white/50 mt-unit-md">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-grow bg-background py-unit-xl">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">

          {/* Scope notice */}
          <div className="bg-surface-container-low border-l-4 border-gold-accent rounded-r-lg p-unit-md mb-unit-xl">
            <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
              <strong className="text-on-background">Scope of this policy.</strong>{" "}
              This Privacy Policy applies solely to the AZLAN marketing website at{" "}
              <a
                href="https://azlan-official-website.com"
                className="text-primary underline underline-offset-2 hover:text-gold-accent transition-colors"
              >
                azlan-official-website.vercel.app
              </a>{" "}
              (the <strong>&ldquo;Site&rdquo;</strong>). AZLAN&apos;s individual products &mdash; JULA POS,
              Tardem Eats, Jagaban Mobility, and StartUp SL &mdash; may operate their own platforms
              and collect additional data governed by product-specific privacy notices. This policy
              does not cover those platforms unless explicitly stated.
            </p>
          </div>

          <PolicySection number="1" title="Who We Are">
            <p>
              This Site is operated by <strong>AZLAN (SL) LIMITED</strong>, a private company
              limited by shares incorporated in the Republic of Sierra Leone.
            </p>
            <ul className="mt-unit-sm space-y-1 list-disc list-inside">
              <li><span className="font-semibold">Trading name:</span> Azlan</li>
              <li><span className="font-semibold">Registration No.:</span> SL230626AZLAN30773 (National Investment Board)</li>
              <li><span className="font-semibold">Registered office:</span> 7 Haja Nabie Street, Hill Station, Freetown, Sierra Leone</li>
              <li><span className="font-semibold">TIN:</span> 1001812026</li>
              <li>
                <span className="font-semibold">Privacy contact:</span>{" "}
                <a href="mailto:privacy@azlan.sl" className="text-primary hover:text-gold-accent transition-colors underline underline-offset-2">
                  privacy@azlan.sl
                </a>
                {" "}<em className="text-sm text-on-surface-variant">[update if different]</em>
              </li>
            </ul>
          </PolicySection>

          <PolicySection number="2" title="What Data We Collect and How">
            <Subsection title="2.1  Contact form submissions">
              <p>
                When you submit the contact form on the{" "}
                <Link href="/contact" className="text-primary underline underline-offset-2 hover:text-gold-accent transition-colors">
                  /contact
                </Link>{" "}
                page, we collect the information you voluntarily provide:
              </p>
              <ul className="mt-unit-sm space-y-1 list-disc list-inside">
                <li>Your <strong>name</strong></li>
                <li>Your <strong>email address</strong></li>
                <li>The <strong>message</strong> you write to us</li>
              </ul>
              <p className="mt-unit-sm">
                We do not collect payment details, identification documents, or sensitive personal
                information through this form.
              </p>
            </Subsection>

            <Subsection title="2.2  Hosting and server logs">
              <p>
                The Site is hosted on <strong>Vercel Inc.</strong> Vercel automatically records
                standard web-server log data when your browser requests a page, which may include:
              </p>
              <ul className="mt-unit-sm space-y-1 list-disc list-inside">
                <li>IP address (may be truncated or anonymised by Vercel)</li>
                <li>Browser type and version</li>
                <li>Device and operating system</li>
                <li>Pages visited and time of visit</li>
                <li>Referring URL</li>
              </ul>
            </Subsection>

            <Subsection title="2.3  Analytics">
              <p>
                We may use Vercel Analytics or a comparable privacy-respecting analytics tool to
                understand aggregate traffic patterns. Where analytics are active we collect only
                anonymised, aggregated data (page views, geographic region, device category) and
                do not build individual user profiles.
              </p>
              <p className="mt-unit-sm text-sm italic text-on-surface-variant">
                [PLACEHOLDER &mdash; confirm the exact analytics tool in use and update this
                section before publishing.]
              </p>
            </Subsection>

            <Subsection title="2.4  Cookies">
              <p>
                The Site currently uses only cookies that are strictly necessary for it to
                function. We do not use advertising or third-party tracking cookies. If this
                changes we will update this policy and, where required, obtain your consent before
                setting any non-essential cookies.
              </p>
            </Subsection>
          </PolicySection>

          <PolicySection number="3" title="Why We Collect It (Purpose Limitation)">
            <p>We process personal data only for the specific purposes listed below:</p>
            <div className="mt-unit-md overflow-x-auto rounded-lg border border-outline/10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="text-left p-3 font-display font-semibold text-on-background border-b border-outline/10 w-1/2">Data</th>
                    <th className="text-left p-3 font-display font-semibold text-on-background border-b border-outline/10 w-1/2">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Name, email, message", "To read, assess, and respond to your enquiry"],
                    ["Server logs / IP address", "Security, fraud prevention, and diagnosing technical issues"],
                    ["Aggregated analytics", "Understanding Site usage to improve it"],
                  ].map(([data, purpose], i) => (
                    <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="p-3 text-on-surface-variant border-b border-outline/10">{data}</td>
                      <td className="p-3 text-on-surface-variant border-b border-outline/10">{purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-unit-md text-sm">
              We will not use your data for any purpose incompatible with those listed above
              without telling you first and, where required, obtaining your consent.
            </p>
          </PolicySection>

          <PolicySection number="4" title="Legal Basis for Processing">
            <p>
              Sierra Leone does not yet have a dedicated Data Protection Act in force. The
              current applicable framework includes the{" "}
              <strong>Cyber Security and Crime Act, 2021</strong> and general consumer-protection
              principles. A National Data Protection Policy was approved in April 2026 and
              dedicated legislation is being drafted. <strong>This policy will be updated as that
                legislation comes into force.</strong>
            </p>
            <p className="mt-unit-sm">
              In the interim, and in line with internationally recognised best practice, we
              process your data on the following bases:
            </p>
            <ul className="mt-unit-sm space-y-2 list-disc list-inside">
              <li>
                <strong>Legitimate interests</strong> &mdash; server logs and anonymised analytics
                to keep the Site secure and improve user experience.
              </li>
              <li>
                <strong>Pre-contractual steps</strong> &mdash; processing contact-form submissions
                to respond to enquiries you initiate.
              </li>
              <li>
                <strong>Consent</strong> &mdash; for any non-essential cookies or tracking we may
                introduce in future.
              </li>
            </ul>
          </PolicySection>

          <PolicySection number="5" title="Data Storage, Protection, and Retention">
            <p>
              Contact-form data is transmitted to and stored by our form/email provider (see
              Section 6). We apply reasonable technical and organisational measures to protect
              your data, including encrypted transmission (HTTPS) and access controls.
            </p>
            <p className="mt-unit-sm">
              We retain contact-form data only as long as necessary to handle your enquiry, and
              in any case for no longer than <strong>24 months</strong> from submission, unless a
              longer period is required by law or an ongoing business relationship.
            </p>
            <p className="mt-unit-sm">
              Server-log data is retained for the period determined by Vercel&apos;s standard
              data-retention policy. Anonymised analytics data may be retained indefinitely in
              aggregated form.
            </p>
          </PolicySection>

          <PolicySection number="6" title="Third Parties We Share Data With">
            <p>
              We do not sell your personal data. We share it only with the following service
              providers, under appropriate agreements, solely to operate the Site:
            </p>
            <div className="mt-unit-md overflow-x-auto rounded-lg border border-outline/10">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="text-left p-3 font-display font-semibold text-on-background border-b border-outline/10">Provider</th>
                    <th className="text-left p-3 font-display font-semibold text-on-background border-b border-outline/10">Purpose</th>
                    <th className="text-left p-3 font-display font-semibold text-on-background border-b border-outline/10">Data Shared</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Vercel Inc. (hosting)", "Serving pages and recording access logs", "IP address, browser info, pages visited"],
                    ["[INSERT FORM / EMAIL PROVIDER]", "Delivering and storing contact-form submissions", "Name, email, message"],
                    ["[INSERT ANALYTICS PROVIDER — if applicable]", "Aggregated site analytics", "Anonymised usage data only"],
                  ].map(([provider, purpose, data], i) => (
                    <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                      <td className="p-3 text-on-surface-variant border-b border-outline/10">{provider}</td>
                      <td className="p-3 text-on-surface-variant border-b border-outline/10">{purpose}</td>
                      <td className="p-3 text-on-surface-variant border-b border-outline/10">{data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-unit-md text-sm">
              We may also disclose data where required by law, court order, or a competent
              authority in Sierra Leone or another jurisdiction.
            </p>
          </PolicySection>

          <PolicySection number="7" title="Your Rights">
            <p>
              Regardless of the state of local legislation, we are committed to honouring the
              following rights in relation to your personal data:
            </p>
            <ul className="mt-unit-sm space-y-2 list-disc list-inside">
              <li><strong>Access</strong> &mdash; request a copy of the personal data we hold about you.</li>
              <li><strong>Correction</strong> &mdash; ask us to correct inaccurate or incomplete data.</li>
              <li><strong>Deletion</strong> &mdash; ask us to erase your data where there is no legitimate reason to retain it.</li>
              <li><strong>Objection</strong> &mdash; object to processing based on our legitimate interests.</li>
              <li><strong>Restriction</strong> &mdash; ask us to pause processing while a dispute is resolved.</li>
            </ul>
            <p className="mt-unit-sm">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:privacy@azlan.sl" className="text-primary underline underline-offset-2 hover:text-gold-accent transition-colors">
                privacy@azlan.sl
              </a>. We will respond within <strong>30 days</strong>.
            </p>
          </PolicySection>

          <PolicySection number="8" title="Children&rsquo;s Privacy">
            <p>
              This Site is not directed at children under the age of 18. We do not knowingly
              collect personal data from anyone under 18. If you believe a child has submitted
              data to us, please contact us immediately at{" "}
              <a href="mailto:privacy@azlan.sl" className="text-primary underline underline-offset-2 hover:text-gold-accent transition-colors">
                privacy@azlan.sl
              </a>{" "}
              and we will delete it promptly.
            </p>
          </PolicySection>

          <PolicySection number="9" title="International Users and Cross-Border Transfers">
            <p>
              The Site may be accessed from countries outside Sierra Leone. If you access it from
              outside Sierra Leone, your data may be transferred to and processed in Sierra Leone
              or wherever our service providers (including Vercel, headquartered in the United
              States) are located. By using the Site, you acknowledge this transfer.
            </p>
            <p className="mt-unit-sm">
              Where data is transferred outside Sierra Leone we take reasonable steps to ensure
              it receives an equivalent level of protection to that described in this policy.
            </p>
          </PolicySection>

          <PolicySection number="10" title="Data Breach Notification">
            <p>
              In the event of a personal data breach that is likely to result in risk to your
              rights or interests, we will notify you and any competent authority without undue
              delay, and in any case within <strong>72 hours</strong> of becoming aware of it,
              consistent with internationally recognised standards.
            </p>
          </PolicySection>

          <PolicySection number="11" title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time, including as Sierra Leone&apos;s
              data protection legislation develops. The &ldquo;Last updated&rdquo; date at the
              top of this page will reflect any revisions. Where changes are material we will
              make reasonable efforts to bring them to your attention (for example, via a notice
              on the Site). Your continued use of the Site after any update constitutes acceptance
              of the revised policy.
            </p>
          </PolicySection>

          <PolicySection number="12" title="Contact Us">
            <p>
              If you have questions, concerns, or requests relating to this Privacy Policy or
              your personal data, please contact:
            </p>
            <div className="mt-unit-sm bg-surface-container-low rounded-lg p-unit-md space-y-1 text-sm border border-outline/10">
              <p className="font-semibold text-on-background">AZLAN (SL) LIMITED</p>
              <p>7 Haja Nabie Street, Hill Station, Freetown, Sierra Leone</p>
              <p>
                Email:{" "}
                <a href="mailto:privacy@azlan.sl" className="text-primary underline underline-offset-2 hover:text-gold-accent transition-colors">
                  privacy@azlan.sl
                </a>
              </p>
            </div>
          </PolicySection>

          {/* Bottom nav */}
          <div className="mt-unit-xl pt-unit-lg border-t border-outline/10 flex flex-col sm:flex-row gap-unit-sm justify-between items-start sm:items-center">
            <p className="font-sans text-sm text-on-surface-variant">Last updated: {LAST_UPDATED}</p>
            <Link
              href="/terms"
              className="font-display text-sm font-semibold text-primary hover:text-gold-accent transition-colors flex items-center gap-1"
            >
              Read our Terms of Service
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-unit-xl">
      <h2 className="font-display text-xl md:text-2xl font-bold text-on-background mb-unit-md flex items-baseline gap-2">
        <span className="text-gold-accent font-extrabold shrink-0">{number}.</span>
        {title}
      </h2>
      <div className="font-sans text-body-md text-on-surface-variant leading-relaxed space-y-unit-sm">
        {children}
      </div>
    </div>
  );
}

function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-unit-md pl-unit-sm border-l-2 border-outline/20">
      <h3 className="font-display text-base font-semibold text-on-background mb-unit-xs">{title}</h3>
      <div className="space-y-unit-sm">{children}</div>
    </div>
  );
}

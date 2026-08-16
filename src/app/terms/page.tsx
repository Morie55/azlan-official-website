import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | AZLAN (SL) LIMITED",
  description:
    "Terms governing your access to and use of the official Azlan website.",
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="font-sans text-sm text-white/50 mt-unit-md">
            AZLAN (SL) LIMITED &mdash; Last updated: 15th August 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-grow bg-background py-unit-xl">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">

          {/* Section 1 */}
          <TermsSection number="1" title="Acceptance of Terms">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the
              website located at{" "}
              <a
                href="https://azlan-official-website.com"
                className="text-primary underline underline-offset-2 hover:text-gold-accent transition-colors"
              >
                https://azlan-official-website.com
              </a>
              (the &ldquo;Site&rdquo;), operated by AZLAN (SL) LIMITED, a private company limited
              by shares incorporated in the Republic of Sierra Leone under Registration No.
              SL230626AZLAN30773, with its registered office at 7 Haja Nabie Street, Hill Station,
              Freetown, Sierra Leone (&ldquo;Azlan,&rdquo; &ldquo;the Company,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            </p>
            <p>
              By accessing or using the Site, you agree to be bound by these Terms. If you do not
              agree to these Terms, please do not use the Site.
            </p>
          </TermsSection>

          {/* Section 2 */}
          <TermsSection number="2" title="About This Site">
            <p>
              The Site is an informational and marketing website that describes Azlan and its
              ecosystem of products and services, currently including:
            </p>
            <ul className="mt-unit-sm space-y-2 list-disc list-inside">
              <li><strong>JULA POS</strong> &mdash; smart inventory and point-of-sale management for shops</li>
              <li><strong>Tardem Eats</strong> &mdash; food ordering and delivery</li>
              <li><strong>Jagaban Mobility</strong> &mdash; multi-modal public transit network</li>
              <li><strong>StartUp SL</strong> &mdash; startup incubation program</li>
            </ul>
            <p>
              These Terms govern your use of this Site only. Each individual product listed above
              may operate under its own separate terms of service and privacy policy, which will
              apply when you use that product directly. Where a conflict exists between these Terms
              and a product-specific agreement, the product-specific agreement governs your use of
              that product.
            </p>
          </TermsSection>

          {/* Section 3 */}
          <TermsSection number="3" title="Eligibility">
            <p>
              The Site is intended for general audiences. If you are under the age of 18, you may
              use the Site only with the involvement and consent of a parent or legal guardian.
            </p>
          </TermsSection>

          {/* Section 4 */}
          <TermsSection number="4" title="Intellectual Property">
            <p>
              All content on the Site &mdash; including but not limited to text, graphics, logos,
              the Azlan name and logo, product names (JULA POS, Tardem Eats, Jagaban Mobility,
              StartUp SL), images, layout, and underlying code &mdash; is the property of AZLAN
              (SL) LIMITED or its licensors and is protected by applicable intellectual property
              laws, including the laws of the Republic of Sierra Leone.
            </p>
            <p>
              You may view and print pages from the Site for your own personal, non-commercial
              use. You may not, without our prior written consent:
            </p>
            <ul className="mt-unit-sm space-y-2 list-disc list-inside">
              <li>Reproduce, republish, or redistribute any part of the Site for commercial purposes;</li>
              <li>Modify, adapt, or create derivative works based on the Site or its content;</li>
              <li>
                Use the Azlan name, logo, or any product name in a way that suggests endorsement,
                affiliation, or partnership without authorization;
              </li>
              <li>Remove or alter any copyright, trademark, or other proprietary notice on the Site.</li>
            </ul>
          </TermsSection>

          {/* Section 5 */}
          <TermsSection number="5" title="Acceptable Use">
            <p>When using the Site, you agree that you will not:</p>
            <ul className="mt-unit-sm space-y-2 list-disc list-inside">
              <li>
                Use the Site for any unlawful purpose or in violation of any applicable law,
                including the Cyber Security and Crime Act, 2021 of Sierra Leone;
              </li>
              <li>
                Attempt to gain unauthorized access to the Site, its servers, or any systems or
                networks connected to the Site;
              </li>
              <li>
                Use any automated system, bot, scraper, or data-mining tool to access or collect
                data from the Site without our prior written permission;
              </li>
              <li>
                Submit false, misleading, abusive, or fraudulent information through any contact
                or inquiry form on the Site;
              </li>
              <li>
                Interfere with or disrupt the operation of the Site or the servers or networks
                used to make the Site available;
              </li>
              <li>Introduce any virus, malware, or other harmful code to the Site.</li>
            </ul>
            <p>
              We reserve the right to restrict or terminate your access to the Site if we
              reasonably believe you have violated these Terms.
            </p>
          </TermsSection>

          {/* Section 6 */}
          <TermsSection number="6" title="Contact Forms and Communications">
            <p>
              The Site may allow you to submit inquiries through a contact form. By submitting a
              contact form, you confirm that the information you provide is accurate and that you
              have the right to provide it. Our use of any information you submit is governed by
              our{" "}
              <Link
                href="/privacy"
                className="text-primary underline underline-offset-2 hover:text-gold-accent transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              We aim to respond to genuine inquiries in a timely manner but do not guarantee a
              response time or outcome for any inquiry submitted through the Site.
            </p>
          </TermsSection>

          {/* Section 7 */}
          <TermsSection number="7" title="Third-Party Links and Testimonials">
            <p>
              The Site may contain links to third-party websites, as well as testimonials from
              clients and business partners. These are provided for informational purposes only.
            </p>
            <ul className="mt-unit-sm space-y-2 list-disc list-inside">
              <li>
                Links to third-party sites do not constitute an endorsement by Azlan of the
                content, products, or services found there, and we are not responsible for the
                content or practices of any linked third-party site.
              </li>
              <li>
                Testimonials reflect the individual experiences of the persons quoted and are
                shared with their permission. Testimonials are not a guarantee that you will
                achieve similar results from using any Azlan product.
              </li>
            </ul>
          </TermsSection>

          {/* Section 8 */}
          <TermsSection number="8" title="No Warranty">
            <p>
              The Site and all content on it are provided on an &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; basis, without warranties of any kind, whether express
              or implied, including but not limited to implied warranties of merchantability,
              fitness for a particular purpose, non-infringement, or accuracy of content.
            </p>
            <p>
              We do not warrant that the Site will be uninterrupted, error-free, or free of
              viruses or other harmful components, or that any defects will be corrected.
            </p>
          </TermsSection>

          {/* Section 9 */}
          <TermsSection number="9" title="Limitation of Liability">
            <p>
              To the fullest extent permitted by applicable law, AZLAN (SL) LIMITED, its
              directors, officers, employees, and agents shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits,
              revenue, data, or business opportunity, arising out of or in connection with your
              access to or use of, or inability to access or use, the Site, even if we have been
              advised of the possibility of such damages.
            </p>
            <p>
              Nothing in these Terms shall exclude or limit liability that cannot be excluded or
              limited under the laws of the Republic of Sierra Leone.
            </p>
          </TermsSection>

          {/* Section 10 */}
          <TermsSection number="10" title="Indemnification">
            <p>
              You agree to indemnify and hold harmless AZLAN (SL) LIMITED and its directors,
              officers, employees, and agents from and against any claims, liabilities, damages,
              losses, and expenses, including reasonable legal fees, arising out of or in any way
              connected with your violation of these Terms or your misuse of the Site.
            </p>
          </TermsSection>

          {/* Section 11 */}
          <TermsSection number="11" title="Changes to These Terms">
            <p>
              We may update these Terms from time to time to reflect changes in our practices,
              the Site, or applicable law. The &ldquo;Last updated&rdquo; date at the top of this
              page will indicate when these Terms were last revised. Your continued use of the
              Site after any changes take effect constitutes your acceptance of the revised Terms.
            </p>
          </TermsSection>

          {/* Section 12 */}
          <TermsSection number="12" title="Governing Law and Jurisdiction">
            <p>
              These Terms are governed by and construed in accordance with the laws of the
              Republic of Sierra Leone, without regard to conflict-of-law principles. Any dispute
              arising out of or relating to these Terms or your use of the Site shall be subject
              to the exclusive jurisdiction of the courts of Freetown, Sierra Leone.
            </p>
          </TermsSection>

          {/* Section 13 */}
          <TermsSection number="13" title="Severability">
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, that
              provision shall be limited or eliminated to the minimum extent necessary, and the
              remaining provisions shall remain in full force and effect.
            </p>
          </TermsSection>

          {/* Section 14 */}
          <TermsSection number="14" title="Contact Us">
            <p>If you have any questions about these Terms, please contact us at:</p>
            <div className="mt-unit-sm bg-surface-container-low rounded-lg p-unit-md space-y-1 text-sm border border-outline/10">
              <p className="font-semibold text-on-background">AZLAN (SL) LIMITED</p>
              <p>7 Haja Nabie Street, Hill Station, Freetown, Sierra Leone</p>
              <p>
                Email:{" "}
                <span className="text-on-surface-variant">azlanslltd@gmail.com</span>
              </p>
              <p>
                Phone:{" "}
                <span className="text-on-surface-variant">+232-79-331413</span>
              </p>
            </div>
          </TermsSection>

          {/* Bottom nav */}
          <div className="mt-unit-xl pt-unit-lg border-t border-outline/10 flex flex-col sm:flex-row gap-unit-sm justify-between items-start sm:items-center">
            <p className="font-sans text-sm text-on-surface-variant">
              Last updated: 15th August 2026
            </p>
            <Link
              href="/privacy"
              className="font-display text-sm font-semibold text-primary hover:text-gold-accent transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Read our Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Sub-component ──────────────────────────────────────────────────────── */

function TermsSection({
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
        <span className="text-primary font-extrabold shrink-0">{number}.</span>
        {title}
      </h2>
      <div className="font-sans text-body-md text-on-surface-variant leading-relaxed space-y-unit-sm">
        {children}
      </div>
    </div>
  );
}

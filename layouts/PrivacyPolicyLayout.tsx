import React, { ReactElement } from 'react';
import useTranslation from 'next-translate/useTranslation';
import PageGrid from 'components/PageGrid';
import PageSectionTitle from 'components/PageSectionTitle';

function PrivacyPolicyLayout(): ReactElement {
  const { t } = useTranslation();

  return (
    <section>
      <PageGrid>
        <PageSectionTitle>{t('common:privacyPolicy')}</PageSectionTitle>
        <h2>Introduction</h2>
        <p>
          This Privacy Policy sets out how iDisclosure Artificial Intelligence
          (HK) Limited and our parent company LegalX Artificial Intelligence
          Limited (together the LegalX Group or we) protect the privacy of
          personal information that is collected through the website available
          at www.legalx.ai (Site), or directly from you. We are committed to
          ensuring that your privacy is protected. Please read this Privacy
          Policy carefully.
        </p>

        <p>
          Should we ask you to provide any information by which you can be
          identified when using this Site, we assure you that it will only be
          used in accordance with this Privacy Policy and the Data Protection
          Principles under the Personal Data (Privacy) Ordinance (Cap. 486 of
          the Laws of Hong Kong) (Data Protection Principles).
        </p>

        <p>
          You are not required to provide any personal information to us. If you
          do not do so, but it may affect your use of this Site or the products
          and services offered on the Site.
        </p>

        <p>
          This Privacy Policy may be amended from time to time with changes,
          additions and deletions, at our sole discretion. You should check this
          page regularly to ensure that you are aware of any changes. Your
          continued use of the Site following any amendments indicates that you
          accept the amendments.
        </p>

        <h4>Collection of personal information</h4>

        <p>The information that we collect may include:</p>

        <ul className="list">
          <li>names;</li>
          <li>job titles;</li>
          <li>contact information, including email address;</li>
          <li>
            other information relevant to the customisation of a document on the
            Site;
          </li>
          <li>information about your business needs;</li>
          <li>
            other information relevant to client surveys and/or promotions; and
          </li>
          <li>
            any other information requested on this Site or otherwise required
            by us or provided by you.
          </li>
        </ul>

        <p>
          As with most online businesses, we may log information about your
          access and use of our Site, including through the use of Internet
          cookies, your communications with our Site, the type of browser you
          are using, the type of operating system you are using and the domain
          name of your Internet service provider.
        </p>

        <p>
          We may contact you to voluntarily respond to questionnaires, surveys
          or market research to seek your opinion and feedback. Providing this
          information is optional to you.
        </p>

        <p>
          We may receive personal information from third parties. If we do, we
          will protect it as set out in this Privacy Policy.
        </p>

        <h4>Use of personal information</h4>

        <p>
          We collect and use personal information for the following purposes:
        </p>

        <ul className="list">
          <li>to provide information, products and services to you;</li>
          <li>
            to provide information to our network of solicitors, barristers and
            other specialists (each a LegalX Consultant) for the purposes of
            assisting you and managing your matter;
          </li>
          <li>
            to better understand your needs, enabling us to improve our products
            and services;
          </li>
          <li>for internal record keeping;</li>
          <li>
            to circulate promotional emails about new products and services,
            special offers or other information which we think you may find
            interesting;
          </li>
          <li>to contact you for market research purposes;</li>
          <li>direct marketing;</li>
          <li>to customise the Site according to your interests; and</li>
          <li>to customise documents according to your business needs.</li>
        </ul>

        <p>
          We may contact you by a variety of measures including by telephone,
          email, sms or mail.
        </p>

        <h4>Disclosure of personal information</h4>

        <p>We may disclose personal information:</p>

        <ul className="list">
          <li>
            for the purpose of providing information, products and services to
            clients;
          </li>
          <li>
            to credit reporting agencies and courts, tribunals, regulatory
            authorities where clients fail to pay for goods or services provided
            by us to them;
          </li>
          <li>
            to courts, tribunals, regulatory authorities, and law enforcement
            officers as required by law, in connection with any actual or
            prospective legal proceedings, or in order to establish, exercise or
            defend our legal rights;
          </li>
          <li>
            to one or more LegalX Consultants, for the purpose of providing
            information and services to you;
          </li>
          <li>
            to the relevant third party or parties, with our client's consent,
            if the matter involves third parties; and
          </li>
          <li>
            to third parties, including agents, referral partners, contractors
            and sub-contractors for the purposes of providing information,
            products and services to you. This may include parties located, or
            that store data, outside of Hong Kong.
          </li>
        </ul>

        <p>
          By providing us with personal information, you consent to this
          disclosure. Where we disclose your personal information to third
          parties, we will request or otherwise seek to get comfortable that the
          third party follows the Data Protection Principles regarding handling
          your personal information.
        </p>

        <p>
          If there is a change of control of our business or a sale or transfer
          of business assets, we reserve the right to transfer to the extent
          permissible at law our user databases, together with any personal
          information and non-personal information contained in those databases.
          This information may be disclosed to a potential purchaser. We would
          seek to only disclose information in good faith and where we have
          sought to maintain confidentiality.
        </p>

        <h4>Security</h4>

        <p>
          We are committed to ensuring that the information you provide to us is
          secure. In order to prevent unauthorised access or disclosure, we have
          put in place suitable physical, electronic and managerial procedures
          to safeguard and secure that information and protect it from misuse,
          interference, loss and unauthorised access, modification and
          disclosure.
        </p>

        <p>
          No information transmitted over the Internet can be guaranteed to be
          secure. We cannot guarantee the security of any information that you
          transmit to us, or receive from us. The transmission and exchange of
          information is carried out at your own risk. Although we take measures
          to safeguard against unauthorised disclosures of information, we
          cannot assure you that personal information that we collect will not
          be disclosed in a manner that is inconsistent with this Privacy
          Policy.
        </p>

        <h4>How we use cookies</h4>

        <p>
          We may use cookies on our Site from time to time. A cookie is a small
          file which asks permission to be placed on your computer's hard drive.
          Once you agree, the file is added and the cookie helps analyse web
          traffic or lets you know when you visit a particular site. Cookies
          allow web applications to respond to you as an individual. The web
          application can tailor its operations to your needs and preferences by
          collecting and remembering information about you.
        </p>

        <p>
          We use traffic log cookies to identify which pages are being used.
          This helps us analyse information about web page traffic and improve
          our Site by tailoring it to your needs. We use this information for
          statistical analysis purposes only, following which the data is
          removed from the system.
        </p>

        <p>
          Overall, cookies help us provide you with a better Site, by enabling
          us to monitor which pages you find useful and which you do not. A
          cookie does not give us access to your computer or any information
          about you, other than the data you provide to us.
        </p>

        <p>
          You can choose to accept or decline cookies. Most web browsers
          automatically accept cookies but you can usually modify your browser
          settings to decline cookies if you prefer. This may, however, prevent
          you from taking full advantage of the Site.
        </p>

        <h4>Links to other websites</h4>

        <p>
          Our Site may contain links to other websites of interest. Please note
          that we do not have any control over those websites. We are not
          responsible for the protection and privacy of any information which
          you provide whilst visiting such websites and such websites are not
          governed by this privacy policy. You should exercise caution when
          accessing such websites and look at the privacy policy applicable to
          the website in question.
        </p>

        <h4>Controlling your personal information</h4>

        <p>
          Choice and Consent: Providing us with your personal information is
          optional to you. You can choose not to provide personal information.
          When you provide us with your personal information, you consent to the
          terms in this Privacy Policy, and to us disclosing or receiving your
          personal information for these purposes. We will not sell, distribute
          or lease your personal information to third parties unless we have
          your permission or are legally required to do so.
        </p>

        <p>
          Restrict: You may choose to restrict the collection or use of your
          personal information. If you have previously agreed to us using your
          personal information for direct marketing purposes, you may change
          your mind at any time by contacting us, details below.
        </p>

        <p>
          Access: You may request details of personal information that we hold
          about you in accordance with the provisions of the the Personal Data
          (Privacy) Ordinance (Cap. 486 of the Laws of Hong Kong) (Data
          Protection Ordinance). A small administrative fee may be payable for
          the provision of information. If you would like a copy of the
          information which we hold about you, please email us. We reserve the
          right to refuse to provide you with information that we hold about
          you, in certain circumstances set out in the Data Protection
          Ordinance.
        </p>

        <p>
          Correction: If you believe that any information we hold on you is
          inaccurate, out of date, incomplete, irrelevant or misleading, please
          contact us, details below. We rely in part upon clients advising us
          when their personal information changes. We will respond to any
          request within a reasonable time and will endeavour to promptly
          correct any information found to be incorrect so that the information
          is accurate, up to date, complete, relevant and not misleading.
        </p>

        <p>
          Unsubscribe: To unsubscribe from our e-mail database, or opt out of
          communications, please contact us at the details below.
        </p>

        <h4>Complaints</h4>

        <p>
          If you believe that we have breached the Data Protection Principles
          and wish to make a complaint about that breach then please email us
          setting out details of the breach. We will promptly investigate your
          complaint and will endeavour to respond to you in writing within 28
          days setting out the outcome of our investigation, what steps we
          propose to take to remedy the breach and any other action we will take
          to deal with your complaint.
        </p>

        <p>To contact our Privacy Officer, please contact us at:</p>

        <p>LegalX Artificial Intelligence Limited</p>

        <p>
          1/F-2/F Light & Salt House, 14-16 Gilman's Bazaar, Central, Hong Kong
        </p>

        <p>General support: info@legalx.ai</p>

        <p>Last update: 16 April 2019</p>
      </PageGrid>
    </section>
  );
}

export default PrivacyPolicyLayout;

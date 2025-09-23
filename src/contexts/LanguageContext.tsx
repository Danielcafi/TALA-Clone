import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ph' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ph: {
    // Header
    'nav.howItWorks': 'Paano Gumagana',
    'nav.features': 'Mga Tampok',
    'nav.faq': 'Mga Tanong',
    'nav.contact': 'Makipag-ugnayan',
    'nav.signIn': 'Mag-sign In',
    'nav.getStarted': 'Magsimula',

    // Hero
    'hero.trustedBy': 'Pinagkakatiwalaan ng 50,000+ users',
    'hero.title': 'Kunin ang loan na kailangan mo,',
    'hero.titleHighlight': ' kapag kailangan mo',
    'hero.subtitle': 'Mabilis na approval, competitive rates, at flexible na repayment terms. Makakuha ng hanggang ₱500,000 sa aming simple online application process.',
    'hero.getStartedNow': 'Magsimula Ngayon',
    'hero.learnMore': 'Matuto Pa',
    'hero.noHiddenFees': 'Walang nakatagong bayad',
    'hero.quickApproval': 'Mabilis na approval',
    'hero.secureEncrypted': 'Secure at encrypted',
    'hero.averageLoan': 'Average na loan amount',

    // How It Works
    'howItWorks.title': 'Paano Gumagana',
    'howItWorks.subtitle': 'Mas madali na ngayon ang pagkuha ng loan. Sundin ang mga simpleng hakbang na ito para makuha ang pondo na kailangan mo.',
    'howItWorks.step1.title': '1. Mag-apply Online',
    'howItWorks.step1.description': 'Kumpletuhin ang aming simpleng 3-minutong application form na may basic information tungkol sa iyo at sa inyong pangangailangan.',
    'howItWorks.step2.title': '2. Makakuha ng Approval',
    'howItWorks.step2.description': 'Ang aming advanced AI ay nagsusuri ng inyong application kaagad. Makakuha ng approval decisions sa loob ng 60 segundo.',
    'howItWorks.step3.title': '3. Tanggapin ang Pondo',
    'howItWorks.step3.description': 'Kapag na-approve na, ang mga pondo ay direktang ililipat sa inyong bank account sa loob ng 24 oras.',
    'howItWorks.startApplication': 'Simulan ang Inyong Application',

    // Features
    'features.title': 'Bakit Piliin ang LendTrust?',
    'features.subtitle': 'Nakatuon kami sa pagbibigay sa inyo ng pinakamahusay na lending experience sa pamamagitan ng innovative technology at exceptional service.',
    'features.fastApproval.title': 'Mabilis na Approval',
    'features.fastApproval.description': 'Makakuha ng approval sa loob ng 60 segundo gamit ang aming AI-powered decision engine. Ang aming advanced technology ay nagsusuri ng inyong application kaagad, nagbibigay sa inyo ng immediate results para ma-access ninyo ang funds kapag kailangan ninyo.',
    'features.security.title': 'Bank-Level Security',
    'features.security.description': 'Ang inyong data ay protektado ng 256-bit SSL encryption at secure banking protocols. Ginagamit namin ang parehong security standards ng mga major banks para masiguro na ang inyong personal at financial information ay nananatiling ligtas at confidential.',
    'features.rates.title': 'Competitive Rates',
    'features.rates.description': 'Mag-enjoy ng mababang interest rates simula sa 5.99% APR na may flexible repayment terms. Nag-aalok kami ng transparent pricing na walang nakatagong bayad, nagsisiguro na makakakuha kayo ng pinakamahusay na deal para sa inyong financial situation.',
    'features.support.title': 'Personal Support',
    'features.support.description': 'Makakuha ng tulong mula sa aming friendly customer support team na available 24/7 sa chat o phone. Ang aming dedicated specialists ay nandito para gabayan kayo sa bawat hakbang ng proseso at sagutin ang anumang tanong na mayroon kayo.',
    'features.noFees.title': 'Walang Nakatagong Bayad',
    'features.noFees.description': 'Transparent pricing na walang origination fees, prepayment penalties, o nakatagong charges. Ang nakikita ninyo ay ang makukuha ninyo - naniniwala kami sa honest, straightforward lending na may complete transparency sa lahat ng aming terms.',
    'features.mobile.title': 'Mobile First',
    'features.mobile.description': 'I-manage ang inyong loan nang buo mula sa inyong smartphone gamit ang aming intuitive mobile app. I-track ang payments, tingnan ang statements, at makakuha ng support - lahat mula sa convenience ng inyong mobile device, kahit saan, kahit kailan.',

    // Testimonials
    'testimonials.title': 'Ano ang Sinasabi ng Aming mga Customer',
    'testimonials.subtitle': 'Huwag lang magtiwala sa aming salita. Narito ang sinasabi ng mga tunay na customer tungkol sa kanilang LendTrust experience.',
    'testimonials.sarah.role': 'Small Business Owner',
    'testimonials.sarah.content': 'Tinulungan ako ng LendTrust na palawakin ang aking bakery noong kailangan ko ito. Ang application process ay napakadali at ang mga pondo ay nasa aking account kinabukasan.',
    'testimonials.michael.role': 'Freelance Designer',
    'testimonials.michael.content': 'Nag-doubt ako sa online lending, pero lampas sa inaasahan ko ang LendTrust. Magagandang rates, walang nakatagong bayad, at excellent customer service.',
    'testimonials.emily.role': 'Graduate Student',
    'testimonials.emily.content': 'Noong nasira ang aking kotse, kailangan ko ng pera agad. Na-approve ng LendTrust ang aking loan sa loob ng ilang minuto at nakabalik ako sa track kaagad.',

    // FAQ
    'faq.title': 'Mga Madalas na Tanong',
    'faq.subtitle': 'May mga tanong? May mga sagot kami. Hanapin ang lahat ng kailangan ninyong malaman tungkol sa aming lending process.',
    'faq.q1': 'Gaano kabilis ako makakakuha ng approval?',
    'faq.a1': 'Ang aming AI-powered system ay maaaring mag-approve ng karamihan sa mga application sa loob ng 60 segundo. Makatanggap kayo ng instant decision kapag naisumite ninyo ang inyong complete application.',
    'faq.q2': 'Ano ang inyong interest rates?',
    'faq.a2': 'Ang aming interest rates ay nagsisimula sa 5.99% APR at nag-iiba base sa inyong creditworthiness at loan terms. Palagi kaming nagbibigay ng transparent pricing na walang nakatagong bayad.',
    'faq.q3': 'Magkano ang pwede kong mahiram?',
    'faq.a3': 'Pwede kayong manghiram mula ₱50,000 hanggang ₱500,000, depende sa inyong financial profile at repayment capacity. Karamihan sa mga customer ay qualified para sa ₱125,000-₱250,000.',
    'faq.q4': 'Ano ang kailangan ko para mag-apply?',
    'faq.a4': 'Kailangan ninyo ng valid ID, proof of income, at bank account. Ang buong application process ay tumatagal lang ng 3 minuto para makumpleto online.',
    'faq.q5': 'May mga bayad ba?',
    'faq.a5': 'Hindi, hindi kami nangsingil ng origination fees, prepayment penalties, o anumang nakatagong charges. Alam ninyo nang eksakto kung magkano ang babayaran ninyo upfront.',
    'faq.q6': 'Paano ko matatanggap ang pera?',
    'faq.a6': 'Kapag na-approve na, ang mga pondo ay direktang ililipat sa inyong bank account sa loob ng 24 oras. Karamihan sa mga customer ay nakatanggap ng kanilang pera sa parehong business day.',

    // CTA
    'cta.title': 'Handa na Bang Kunin ang Inyong Loan?',
    'cta.subtitle': 'Sumali sa libu-libong satisfied customers na nagtitiwala sa LendTrust para sa kanilang financial needs. Magsimula ngayon at magkaroon ng funds sa inyong account bukas.',
    'cta.getStartedNow': 'Magsimula Ngayon',
    'cta.learnMore': 'Matuto Pa',
    'cta.approval': '60-segundo approval',
    'cta.security': 'Bank-level security',
    'cta.funding': 'Next-day funding',

    // Footer
    'footer.description': 'Ang LendTrust ay nakatuon sa pagbibigay ng mabilis, secure, at affordable lending solutions para matulungan kayong makamit ang inyong financial goals. Licensed at regulated para sa inyong proteksyon.',
    'footer.quickLinks': 'Mga Mabilis na Link',
    'footer.contactInfo': 'Contact Info',
    'footer.address': '123 Financial District\nMaynila, Philippines 1004',
    'footer.copyright': '© 2025 LendTrust. Lahat ng karapatan ay nakalaan. Licensed ng Department of Financial Services.',
  },
  en: {
    // Header
    'nav.howItWorks': 'How it works',
    'nav.features': 'Features',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.signIn': 'Sign In',
    'nav.getStarted': 'Get Started',

    // Hero
    'hero.trustedBy': 'Trusted by 50,000+ users',
    'hero.title': 'Get the loan you need,',
    'hero.titleHighlight': ' when you need it',
    'hero.subtitle': 'Quick approval, competitive rates, and flexible repayment terms. Access up to ₱500,000 with our simple online application process.',
    'hero.getStartedNow': 'Get Started Now',
    'hero.learnMore': 'Learn More',
    'hero.noHiddenFees': 'No hidden fees',
    'hero.quickApproval': 'Quick approval',
    'hero.secureEncrypted': 'Secure & encrypted',
    'hero.averageLoan': 'Average loan amount',

    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Getting your loan is easier than ever. Follow these simple steps to access the funds you need.',
    'howItWorks.step1.title': '1. Apply Online',
    'howItWorks.step1.description': 'Complete our simple 3-minute application form with basic information about yourself and your needs.',
    'howItWorks.step2.title': '2. Get Approved',
    'howItWorks.step2.description': 'Our advanced AI reviews your application instantly. Get approval decisions in under 60 seconds.',
    'howItWorks.step3.title': '3. Receive Funds',
    'howItWorks.step3.description': 'Once approved, funds are transferred directly to your bank account within 24 hours.',
    'howItWorks.startApplication': 'Start Your Application',

    // Features
    'features.title': 'Why Choose LendTrust?',
    'features.subtitle': 'We\'re committed to providing you with the best lending experience through innovative technology and exceptional service.',
    'features.fastApproval.title': 'Fast Approval',
    'features.fastApproval.description': 'Get approved in under 60 seconds with our AI-powered decision engine. Our advanced technology analyzes your application instantly, providing you with immediate results so you can access funds when you need them most.',
    'features.security.title': 'Bank-Level Security',
    'features.security.description': 'Your data is protected with 256-bit SSL encryption and secure banking protocols. We use the same security standards as major banks to ensure your personal and financial information remains completely safe and confidential.',
    'features.rates.title': 'Competitive Rates',
    'features.rates.description': 'Enjoy low interest rates starting from 5.99% APR with flexible repayment terms. We offer transparent pricing with no hidden fees, ensuring you get the best possible deal for your financial situation.',
    'features.support.title': 'Personal Support',
    'features.support.description': 'Get help from our friendly customer support team available 24/7 via chat or phone. Our dedicated specialists are here to guide you through every step of the process and answer any questions you may have.',
    'features.noFees.title': 'No Hidden Fees',
    'features.noFees.description': 'Transparent pricing with no origination fees, prepayment penalties, or hidden charges. What you see is what you get - we believe in honest, straightforward lending with complete transparency in all our terms.',
    'features.mobile.title': 'Mobile First',
    'features.mobile.description': 'Manage your loan entirely from your smartphone with our intuitive mobile app. Track payments, view statements, and get support - all from the convenience of your mobile device, anywhere, anytime.',

    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.subtitle': 'Don\'t just take our word for it. Here\'s what real customers have to say about their LendTrust experience.',
    'testimonials.sarah.role': 'Small Business Owner',
    'testimonials.sarah.content': 'LendTrust helped me expand my bakery when I needed it most. The application process was incredibly smooth and the funds were in my account the next day.',
    'testimonials.michael.role': 'Freelance Designer',
    'testimonials.michael.content': 'I was skeptical about online lending, but LendTrust exceeded my expectations. Great rates, no hidden fees, and excellent customer service.',
    'testimonials.emily.role': 'Graduate Student',
    'testimonials.emily.content': 'When my car broke down, I needed money fast. LendTrust approved my loan in minutes and I was able to get back on track immediately.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Got questions? We\'ve got answers. Find everything you need to know about our lending process.',
    'faq.q1': 'How quickly can I get approved?',
    'faq.a1': 'Our AI-powered system can approve most applications in under 60 seconds. You\'ll receive an instant decision once you submit your complete application.',
    'faq.q2': 'What are your interest rates?',
    'faq.a2': 'Our interest rates start from 5.99% APR and vary based on your creditworthiness and loan terms. We always provide transparent pricing with no hidden fees.',
    'faq.q3': 'How much can I borrow?',
    'faq.a3': 'You can borrow anywhere from ₱50,000 to ₱500,000, depending on your financial profile and repayment capacity. Most customers qualify for ₱125,000-₱250,000.',
    'faq.q4': 'What do I need to apply?',
    'faq.a4': 'You\'ll need a valid ID, proof of income, and a bank account. The entire application process takes just 3 minutes to complete online.',
    'faq.q5': 'Are there any fees?',
    'faq.a5': 'No, we don\'t charge origination fees, prepayment penalties, or any hidden charges. You\'ll know exactly what you\'re paying upfront.',
    'faq.q6': 'How do I receive the money?',
    'faq.a6': 'Once approved, funds are transferred directly to your bank account within 24 hours. Most customers receive their money the same business day.',

    // CTA
    'cta.title': 'Ready to Get Your Loan?',
    'cta.subtitle': 'Join thousands of satisfied customers who trust LendTrust for their financial needs. Get started today and have funds in your account by tomorrow.',
    'cta.getStartedNow': 'Get Started Now',
    'cta.learnMore': 'Learn More',
    'cta.approval': '60-second approval',
    'cta.security': 'Bank-level security',
    'cta.funding': 'Next-day funding',

    // Footer
    'footer.description': 'LendTrust is committed to providing fast, secure, and affordable lending solutions to help you achieve your financial goals. Licensed and regulated for your protection.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Info',
    'footer.address': '123 Financial District\nManila, Philippines 1004',
    'footer.copyright': '© 2025 LendTrust. All rights reserved. Licensed by the Department of Financial Services.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ph');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
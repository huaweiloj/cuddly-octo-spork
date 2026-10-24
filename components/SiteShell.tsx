import Link from 'next/link';
import type { Locale } from '@/lib/i18n';
import { copy } from '@/lib/i18n';
export default function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
 const t = copy[locale]; const other = locale === 'en' ? 'zh' : 'en';
 return <><header className="shell site-header"><Link className="brand" href={`/${locale}`}><span className="brand-mark">B</span>{t.brand}</Link><nav className="nav"><Link href={`/${locale}`} className="nav-extra">{t.navHome}</Link><Link href={`/${locale}/survey`}>{t.navSurvey}</Link><Link href={`/${locale}/admin`} className="nav-extra">{t.navAdmin}</Link><Link className="lang-link" href={`/${other}`}>{t.language}</Link></nav></header>{children}<footer className="shell site-footer"><span>© {new Date().getFullYear()} BrightForm</span><span>{t.footer}</span></footer></>;
}

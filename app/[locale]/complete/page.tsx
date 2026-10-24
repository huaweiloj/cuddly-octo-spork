import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import { copy, isLocale } from '@/lib/i18n';
import SiteShell from '@/components/SiteShell';
import AdSlot from '@/components/AdSlot';
export default async function CompletePage({params}:{params:Promise<{locale:string}>}){const {locale:raw}=await params;if(!isLocale(raw))notFound();const t=copy[raw];return <SiteShell locale={raw}><main className="page-wrap"><div className="survey-card" style={{textAlign:'center'}}><div className="success-mark" style={{margin:'0 auto 20px'}}><Check size={28}/></div><h1 className="admin-title">{t.thanks}</h1><p className="muted">{t.thanksText}</p><AdSlot label={t.adLabel}/><Link href={`/${raw}`} className="primary-btn" style={{marginTop:14}}>{t.returnHome}</Link></div></main></SiteShell>}

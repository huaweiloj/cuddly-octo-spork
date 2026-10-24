import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import SiteShell from '@/components/SiteShell';
import SurveyForm from '@/components/SurveyForm';
export default async function SurveyPage({ params }: { params: Promise<{ locale: string }> }) { const { locale: raw } = await params; if (!isLocale(raw)) notFound(); return <SiteShell locale={raw}><main className="page-wrap"><SurveyForm locale={raw}/></main></SiteShell>; }

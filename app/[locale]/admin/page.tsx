import { notFound } from 'next/navigation';
import { isLocale } from '@/lib/i18n';
import SiteShell from '@/components/SiteShell';
import AdminDashboard from '@/components/AdminDashboard';
export default async function AdminPage({params}:{params:Promise<{locale:string}>}){const {locale:raw}=await params;if(!isLocale(raw))notFound();return <SiteShell locale={raw}><main className="page-wrap"><AdminDashboard locale={raw}/></main></SiteShell>}

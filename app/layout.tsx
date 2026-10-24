import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'BrightForm — Survey', description: 'A short bilingual survey experience.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }

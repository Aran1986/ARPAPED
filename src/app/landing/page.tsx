import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export default function LandingPage() {
  const landingHtml = fs.readFileSync(
    path.join(process.cwd(), 'public/landing/index.html'),
    'utf-8'
  );
  
  return <div dangerouslySetInnerHTML={{ __html: landingHtml }} />;
}

// Location: src/app/landing/page.tsx

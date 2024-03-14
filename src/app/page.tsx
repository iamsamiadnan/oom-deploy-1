'use client'

import useTranslation from '@/lib/i18n/useTranslation'
import { useEffect, useState } from 'react';


export default function Home() {
  const [foo, setFoo] = useState(false);

  const t: any = useTranslation();


  return (
    <>
    <button onClick={() => setFoo(!foo)}>Click Me</button>
    <h1>{t?.settings.project_information.project_name} {foo ? 'true' : 'false'}</h1>
    </>
  );

}

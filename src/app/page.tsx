'use client'

import useTranslation from '@/lib/i18n/useTranslation'
import { Dispatch, SetStateAction, useState } from 'react';

export default function Home() {
  const [foo, setFoo] = useState(false);
  const {t, toggle, setToggle} = useTranslation();




  return (
    <>
    <button onClick={() => setToggle(!toggle)}>Click Me</button>
    <h1>{t.settings.project_information.project_name} {foo ? 'true' : 'false'}</h1>
    </>
  );

}

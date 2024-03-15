
import { getDictionary } from '@/lib/i18n/i18n.config'
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import Cookies from "js-cookie";

//type Translation = {t: any, toggle: boolean, setToggle: Dispatch<SetStateAction<boolean>>};

export interface TranslationType {
    t: any; 
    toggle: boolean;
    setToggle: Dispatch<SetStateAction<boolean>>;
  }

const useTranslation = (): TranslationType => {
    const [toggle, setToggle] = useState(false); 
    const [t, setT] = useState(null);

    useEffect(() => {
        let lang = Cookies.get('lang');

        const resp = async () => {
           return await getDictionary(lang);
        }

        resp().then(res => setT(res))

    }, [toggle]);

    return {t, toggle, setToggle};
}


export default useTranslation;
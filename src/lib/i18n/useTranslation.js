
import { getDictionary } from '@/lib/i18n/i18n.config'
import { useState, useEffect } from 'react';
import Cookies from "js-cookie";

const useTranslation = () => {
    const [t, setT] = useState(null);

    useEffect(() => {
        let lang = Cookies.get('lang');

        const resp = async () => {
           return await getDictionary(lang);
        }

        resp().then(res => setT(res))

    }, []);

    return t;
}


export default useTranslation;
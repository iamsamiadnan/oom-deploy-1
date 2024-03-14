const dictionaries = {
    en: () => import("../../i18n/en.json").then(res => res.default),
    sv: () => import("../../i18n/sv.json").then(res => res.default)
}

export const getDictionary = (lang) => {
    return dictionaries[lang]();
}
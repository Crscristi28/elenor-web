import { useLanguage } from '@/contexts/LanguageContext'
import { mainPageTranslations } from '@/translations/main-page'
import { helpPagesTranslations } from '@/translations/help-pages'
import { cookieConsentTranslations } from '@/translations/cookie-consent'

export function useTranslations() {
  const { language } = useLanguage()

  return {
    mainPage: mainPageTranslations[language],
    help: helpPagesTranslations[language].help,
    gettingStarted: helpPagesTranslations[language].gettingStarted,
    models: helpPagesTranslations[language].models,
    features: helpPagesTranslations[language].features,
    support: helpPagesTranslations[language].support,
    cookies: cookieConsentTranslations[language],
  }
}

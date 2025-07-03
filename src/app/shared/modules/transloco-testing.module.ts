import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';
import enCommon from '../../../../public/i18n/en/common.json';
import deCommon from '../../../../public/i18n/de/common.json';
import deError from '../../../../public/i18n/de/error.json';
import enError from '../../../../public/i18n/en/error.json';
import { translocoConfiguration } from '../constants/translocoConfig';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  const en = {...enCommon, ...enError}
  const de = {...deCommon, ...deError}

  return TranslocoTestingModule.forRoot({
    langs: {en, de},
    translocoConfig: translocoConfiguration,
    preloadLangs: true,
    ...options,
  })
}

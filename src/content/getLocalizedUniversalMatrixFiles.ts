import type { Locale } from '../i18n/locales';
import { workbookResolve } from '../i18n/workbookStrings';
import { universalMatrixFiles, type MatrixFile } from './universalMatrixSeries';

export function getLocalizedUniversalMatrixFiles(locale: Locale): MatrixFile[] {
  if (locale !== 'zh') return [...universalMatrixFiles];
  const w = (k: string) => workbookResolve(locale, k);
  return universalMatrixFiles.map((file, fi) => ({
    ...file,
    fileNumber: w(`universalMatrixFiles[${fi}].fileNumber`) ?? file.fileNumber,
    title: w(`universalMatrixFiles[${fi}].title`) ?? file.title,
    subChapters: file.subChapters?.map((sub, si) => ({
      ...sub,
      id: w(`universalMatrixFiles[${fi}].subChapters[${si}].id`) ?? sub.id,
      title: w(`universalMatrixFiles[${fi}].subChapters[${si}].title`) ?? sub.title,
    })),
  }));
}

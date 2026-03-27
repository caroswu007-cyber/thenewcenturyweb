import type { Locale } from '../i18n/locales';
import { workbookResolve } from '../i18n/workbookStrings';
import { spiritMedicineFileGroups, type SpiritMedicineFileGroup } from './spiritMedicineData';
import { spiritMedicineOfficialOutline, type SpiritMedicineOutlineFile } from './spiritMedicineOfficialOutline';

export function getLocalizedSpiritMedicineFileGroups(locale: Locale): SpiritMedicineFileGroup[] {
  const w = (k: string) => workbookResolve(locale, k);
  return spiritMedicineFileGroups.map((g, gi) => ({
    ...g,
    fileNumber: w(`spiritMedicineFileGroups[${gi}].fileNumber`) ?? g.fileNumber,
    sectionTitle: w(`spiritMedicineFileGroups[${gi}].sectionTitle`) ?? g.sectionTitle,
    episodes: g.episodes.map((ep, ei) => ({
      ...ep,
      code: w(`spiritMedicineFileGroups[${gi}].episodes[${ei}].code`) ?? ep.code,
      title: w(`spiritMedicineFileGroups[${gi}].episodes[${ei}].title`) ?? ep.title,
    })),
  }));
}

export function getLocalizedSpiritMedicineOutline(locale: Locale): SpiritMedicineOutlineFile[] {
  const w = (k: string) => workbookResolve(locale, k);
  return spiritMedicineOfficialOutline.map((file, fi) => ({
    ...file,
    fileLabel: w(`spiritMedicineOfficialOutline[${fi}].fileLabel`) ?? file.fileLabel,
    heading: w(`spiritMedicineOfficialOutline[${fi}].heading`) ?? file.heading,
    subsections: file.subsections?.map((sub, si) => ({
      ...sub,
      code: w(`spiritMedicineOfficialOutline[${fi}].subsections[${si}].code`) ?? sub.code,
      title: w(`spiritMedicineOfficialOutline[${fi}].subsections[${si}].title`) ?? sub.title,
    })),
  }));
}

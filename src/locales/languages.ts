export type Language = "en" | "ptbr";
export interface Messages {
  presentationTitle: string;
  presentationTitleDesc: string;
  langs: { ptbr: string; en: string; es: string };
  alerts: { tipBox: string };
  header: { about: string; skills: string; projects: string; contact: string };
  buttons: {
    resumeBtnDownload: string;
    switchModeToLight: string;
    switchModeToDark: string;
    lastUpdates: string;
    new: string;
    soon: string;
  };
  buttonTitles: { resumeBtn: string };
}

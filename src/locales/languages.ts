export type Language = "en" | "ptbr";

export interface Messages {
  titles: {
    sections: {
      presentation: {
        title: string;
        desc: string;
      };
      skills: string;
      projects: {
        title: string;
        desc: string;
      };
    };
  };
  menu: {
    switchModeToLight: string;
    switchModeToDark: string;
    lastUpdates: string;
    language: string;
    tips: {
      new: string;
      soon: string;
    };
    langs: {
      ptbr: string;
      en: string;
      es: string;
    };
  };
  buttons: {
    sections: {
      presentation: {
        resumeBtnDownload: string;
      };
      header: {
        about: string;
        skills: string;
        projects: string;
        contact: string;
      };
      projects: {
        filter: {
          title: string;
          dropDownLabel: string;
          tags: {};
        };
      };
    };
  };
  alerts: {
    alert: string;
  };
  elements: {
    buttonTitles: {
      resumeBtn: string;
    };
  };
}

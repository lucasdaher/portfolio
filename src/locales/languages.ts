export type Language = "en" | "ptbr" | "es";

export interface Messages {
  titles: {
    sections: {
      presentation: {
        title: string;
        desc: string;
      };
      aboutme: {
        title: string;
        desc: string;
      };
      skills: {
        title: string;
        desc: string;
        focus: string;
        data: {
          advanced: string;
          intermediary: string;
          basic: string;
        };
      };
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
      aboutme: {
        moreAboutMe: string;
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

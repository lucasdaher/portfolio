export type Language = "en" | "ptbr";

export interface Messages {
  errorPage: {
    title: string;
    desc: string;
    buttons: {
      returnToHome: string;
      projects: string;
      skills: string;
      contact: string;
      aboutme: string;
    };
  };
  titles: {
    sections: {
      experiences: {
        title: string;
      };
      presentation: {
        hello: string;
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
        backToHome: string;
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
          resetFilters: string;
        };
      };
    };
  };
  alerts: {
    alert: string;
    alertHeader: string;
  };
  elements: {
    buttonTitles: {
      resumeBtn: string;
    };
  };
}

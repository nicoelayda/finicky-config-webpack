import { Apps, Browsers, Handlers, Profiles } from "./common.js"

const defaultBrowser = Browsers.Chrome

export var FinickyConfiguration = {
  defaultBrowser: {
    name: defaultBrowser,
    profile: Profiles.Default,
  },
  handlers: [
    Handlers.AppleMusic,
    Handlers.AppleWebsites,
    Handlers.Spotify,
    Handlers.Zoom,

    // Open Figma document links in Figma app
    {
      match: "https://www.figma.com/file/*",
      browser: Apps.Figma,
    },
    
    // Open work-related sites in "Work" Profile
    {
      match: [
        "https://www.figma.com/*",
        finicky.matchHostnames([
          "proceq.com",
          "screeningeagle.com",
          "safelinks.protection.outlook.com",
          "tectusdreamlab.com",
        ]),
      ],
      browser: {
        name: defaultBrowser,
        profile: Profiles.Work,
      }
    },
  ]
};

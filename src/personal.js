import { Browsers, Handlers, Profiles } from "./common.js"

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

    // Open shopping sites in Shopping profile
    {
      match: finicky.matchHostnames([
        /aliexpress\.com/,
        /amazon\.(com|sg)/,
        /banggood\.com/,
        /lazada\.(com\.ph|sg)/,
        /shopee\.(com\.ph|sg)/,
      ]),
      browser: { 
        name: defaultBrowser,
        profile: Profiles.Shopping, 
      },
    },
  ]
};

export const Apps = {
  AppleMusic: "com.apple.Music",
  Figma: "com.figma.Desktop",
  Spotify: "com.spotify.client",
  Zoom: "us.zoom.xos",
};

export const Browsers = {
  Chrome: "com.google.Chrome",
  Edge: "com.microsoft.edgemac",
  Safari: "com.apple.Safari",
};

export const Profiles = {
  Default: "Default",
  Personal: "Personal",
  Shopping: "Shopping",
  Work: "Work",
};

export const Handlers = {
  // Open Apple Music links directly in Music app
  AppleMusic: {
    match: finicky.matchHostnames(/(geo\.)?music\.apple\.com/),
    url: {
        protocol: "itmss"
    },
    browser: Apps.AppleMusic,
  },

  // Open Apple URLs in Safari
  AppleWebsites: {
    match: finicky.matchHostnames(/.*\.?(apple|icloud|appleid)\.com/),
    browser: Browsers.Safari,
  },

  // Open Spotify links in Spotify app
  Spotify: {
    match: /^https?:\/\/open.spotify.com/,
    browser: Apps.Spotify,
  },
  
  // Open Zoom links in Zoom app
  Zoom: {
    match: /zoom\.us\/j\//,
    browser: Apps.Zoom,
  },
};
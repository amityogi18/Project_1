const PROXY_CONFIG = [
{
  context: [
    "/typeAheadNames",
    "/getTotalRecords",
    "/addParty",
    "/addAlias",
    "/getAccentedChars"
  ],
  "target": "http://dev.concept2alize.com/tal/dev1/talent",
  "secure": false
  }
]

module.exports = PROXY_CONFIG;

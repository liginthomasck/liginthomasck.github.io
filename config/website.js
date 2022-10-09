const meta = {
    // Metadata
    siteTitle: 'Ligin Thomas CK',
    siteDescription: 'Ligin Thomas CK - Creator',
    siteTitleAlt: 'Ligin Thomas CK',
    siteShortName: 'Ligin Thomas CK',
    siteUrl: 'https://www.liginthomasck.tk', // No trailing slash!
};

const social = {
    siteLogo: `src/static/logo.svg`,
    siteBanner: `${meta.siteUrl}/images/social-banner.png`,
    twitter: '@liginthomasck',
};

const website = {
    ...meta,
    ...social,
    disqusShortName: 'liginthomasck',
    googleAnalyticsID: 'G-454HWPKYFC',
    // Manifest
    themeColor: '#6D83F2',
    backgroundColor: '#6D83F2',
};

module.exports = website;
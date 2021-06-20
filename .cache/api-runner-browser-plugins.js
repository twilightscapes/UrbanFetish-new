module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-modal-routing-3/gatsby-browser.js'),
      options: {"plugins":[],"appElement":"#___gatsby","modalProps":{}},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Urban Fetish","short_name":"urbanfetish","start_url":"/?user_mode=app","background_color":"#222","theme_color":"#FA02B7","display":"standalone","icons":[{"src":"/icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/icons/icon-512x512.png","sizes":"512x512","type":"image/png","purpose":"any maskable"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-49869143-1","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]

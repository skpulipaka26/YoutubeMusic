import { SET_SEARCH_VIDEOS, SET_RELATED_VIDEOS, SET_SELECTED_SONG, UPDATE_SELECTED_SONG } from '../actions/youtube';


let initialState = {
    relatedSearches: [
        {
            "videoId": "LjxulQ1bEWg",
            "title": "\n    Tyga - Taste (Official Music Video) ft. Offset\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/LjxulQ1bEWg/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCVV5rzBa8unCXeWfoKWQHYqFU1MQ",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "EfHNIPXTxy0",
            "title": "\n    Kodak Black - ZEZE feat. Travis Scott & Offset [Official Music Video]\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/EfHNIPXTxy0/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBurl9aIg9OdtjxJ_4j3Q9B5k7VVQ",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "9_k_goMr5ZI",
            "title": "\n    French Montana - No Stylist ft. Drake (Official Music Video)\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/9_k_goMr5ZI/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDEb7v9dGeipv_5KOOy4ycWJpsGzg",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "smqhSl0u_sI",
            "title": "\n    Kendrick Lamar - Money Trees (Feat. Jay Rock)\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/smqhSl0u_sI/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBYKAL6WJTKJw_OEjg1c2aYSmAD2w",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "WrsFXgQk5UI",
            "title": "\n    Lil Uzi Vert - XO Tour Llif3 (Official Music Video)\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/WrsFXgQk5UI/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCTzxcXqDW7woyi4cicK7znvkyShg",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "VWoIpDVkOH0",
            "title": "\n    Sheck Wes - Mo Bamba (Official Music Video)\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/VWoIpDVkOH0/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBary_g6JH1ynZkYoSCQ5DtxngxUg",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "xpVfcZ0ZcFM",
            "title": "\n    Drake - God's Plan\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/xpVfcZ0ZcFM/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLA4_Zg2yFEknqIqL5q9_u2ua3SDrw",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "mzB1VGEGcSU",
            "title": "\n    Juice WRLD - Lucid Dreams (Dir. by @_ColeBennett_)\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/mzB1VGEGcSU/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLAhlFRVb8uKanJygTnGdFuPgFJzaQ",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "DmWWqogr_r8",
            "title": "\n    21 Savage - a lot ft. J. Cole\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/DmWWqogr_r8/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDR7DE-LT4HbE-Jr-Eg3y6RHrmmOg",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "Kbj2Zss-5GY",
            "title": "\n    A$AP Rocky - Praise The Lord (Da Shine) (Official Video) ft. Skepta\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/Kbj2Zss-5GY/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLD1nV7sL0791_7w2CNuDSz2wvNOgg",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "SLsTskih7_I",
            "title": "\n    Post Malone - White Iverson\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/SLsTskih7_I/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLA_xwmlGXuapcjwEg1ej13IYXgBEg",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "tvTRZJ-4EyI",
            "title": "\n    Kendrick Lamar - HUMBLE.\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/tvTRZJ-4EyI/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBaHn_MzKLKD8i5mGvzuxKLZhAddA",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "AmFlE4dqkDw",
            "title": "\n    Try Not To Rap (2018 hardest yet)\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/AmFlE4dqkDw/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLD_89TFX3Co-PFmAFePtjSgDZ87EQ",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "l_lblj8Cq0o",
            "title": "\n    G-Eazy - No Limit (Remix) ft. A$AP Rocky, Cardi B, French Montana, Juicy J, Belly\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/l_lblj8Cq0o/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBeBhvFnold9-TAzQI7yVmni7WQcw",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "PJWHAiDARMQ",
            "title": "\n    Travis Scott - YOSEMITE\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/PJWHAiDARMQ/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLC9HS0lb-0dc5FTPB92hRwksqgJag",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "LPTlvQ1Zet0",
            "title": "\n    21 Savage, Offset, Metro Boomin - Ric Flair Drip (Official Music Video)\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/LPTlvQ1Zet0/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLD13pRiSZc9CAtxOBF0iqIzaLqXQw",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "Dst9gZkq1a8",
            "title": "\n    Travis Scott - goosebumps (Official Music Video) ft. Kendrick Lamar\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/Dst9gZkq1a8/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLBBni5oak0UC_KbrPxUKZCFWg5jBg",
                "width": "168",
                "height": "94"
            }
        },
        {
            "videoId": "SC4xMk98Pdc",
            "title": "\n    Post Malone - Congratulations ft. Quavo\n  ",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/SC4xMk98Pdc/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLDNDbIfI8xDkZiKK6tGAy7TknUmKQ",
                "width": "168",
                "height": "94"
            }
        }
    ],
    searches: [
        {
            "url": "https://www.youtube.com/watch?v=6ONRf7h3Mdk",
            "type": "video",
            "title": "Travis Scott - SICKO MODE ft. Drake",
            "duration": 323,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/6ONRf7h3Mdk/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBgJ5jicA86a4k0-bFTJhnig7oa1w",
                "width": "246",
                "height": "138"
            },
            "videoId": "6ONRf7h3Mdk"
        },
        {
            "url": "https://www.youtube.com/watch?v=d-JBBNg8YKs",
            "type": "video",
            "title": "Travis Scott - SICKO MODE (Official Audio)",
            "duration": 315,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/d-JBBNg8YKs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCacKzNiXa9nLJD4HBzeH33H5_-3g",
                "width": "246",
                "height": "138"
            },
            "videoId": "d-JBBNg8YKs"
        },
        {
            "url": "https://www.youtube.com/watch?v=ZwyiZLgiP6w",
            "type": "video",
            "title": "Travis Scott - SICKO MODE (Lyrics) ft. Drake",
            "duration": 314,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/ZwyiZLgiP6w/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBw_VVXxgse7GMpVdEo_35BB6uliA",
                "width": "246",
                "height": "138"
            },
            "videoId": "ZwyiZLgiP6w"
        },
        {
            "url": "https://www.youtube.com/watch?v=BHy2XymUkvs",
            "type": "video",
            "title": "Travis Scott - SICKO MODE | 8D AUDIO",
            "duration": 315,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/BHy2XymUkvs/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDOO32sTelQ4GmVlIu4-pEdvsMTKg",
                "width": "246",
                "height": "138"
            },
            "videoId": "BHy2XymUkvs"
        },
        {
            "url": "https://www.youtube.com/watch?v=NQbkGDoD7B0",
            "type": "video",
            "title": "SICKO MODE",
            "duration": 313,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/NQbkGDoD7B0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDqsfp9hUa5qSeAd5TUk9HCe5pqYw",
                "width": "246",
                "height": "138"
            },
            "videoId": "NQbkGDoD7B0"
        },
        {
            "url": "https://www.youtube.com/watch?v=S_tBc20Ivuo",
            "type": "video",
            "title": "Travis Scott - SICKO MODE [LYRICS]",
            "duration": 315,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/S_tBc20Ivuo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDtRpmWwjyPH-0YyL1FkQNYpyVXpA",
                "width": "246",
                "height": "138"
            },
            "videoId": "S_tBc20Ivuo"
        },
        {
            "url": "https://www.youtube.com/watch?v=Nhsb4MXunMo",
            "type": "video",
            "title": "Travis Scott - SICKO MODE (Clean) Ft. Drake (ASTROWORLD)",
            "duration": 314,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/Nhsb4MXunMo/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBJqyA3mHq4XIlN1hqUWdHdmWEt_A",
                "width": "246",
                "height": "138"
            },
            "videoId": "Nhsb4MXunMo"
        },
        {
            "url": "https://www.youtube.com/watch?v=Zj2cK8wymIA",
            "type": "video",
            "title": "Cardi B - Money (Official Audio)",
            "duration": 184,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/Zj2cK8wymIA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA_L52GMbkRoX4wHz2XnHIcNvyPjQ",
                "width": "246",
                "height": "138"
            },
            "videoId": "Zj2cK8wymIA"
        },
        {
            "url": "https://www.youtube.com/watch?v=XNpGNykVZ6U",
            "type": "video",
            "title": "Nonstop",
            "duration": 239,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/XNpGNykVZ6U/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCpkNpf7tOEkj3O87bCi3nLaGLy9g",
                "width": "246",
                "height": "138"
            },
            "videoId": "XNpGNykVZ6U"
        },
        {
            "url": "https://www.youtube.com/watch?v=lJTRVX9R5EA",
            "type": "video",
            "title": "Drake - Nonstop",
            "duration": 316,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/lJTRVX9R5EA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCnJy5KwgwFFfrVyCxi9-P1-3SLWg",
                "width": "246",
                "height": "138"
            },
            "videoId": "lJTRVX9R5EA"
        },
        {
            "url": "https://www.youtube.com/watch?v=lHPDP-q3EIY",
            "type": "video",
            "title": "SICKO MODE but I don't think I got the right version",
            "duration": 332,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/lHPDP-q3EIY/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBTq39wn4ot8JUT2BCfYZdAQ6hnSQ",
                "width": "246",
                "height": "138"
            },
            "videoId": "lHPDP-q3EIY"
        },
        {
            "url": "https://www.youtube.com/watch?v=nL3F_LJ5Eh0",
            "type": "video",
            "title": "James Harden ‘SICKO MODE’ Mix ᴴᴰ",
            "duration": 361,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/nL3F_LJ5Eh0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCkaiJYhyX9394VXZstDEsVBHe9GQ",
                "width": "246",
                "height": "138"
            },
            "videoId": "nL3F_LJ5Eh0"
        },
        {
            "url": "https://www.youtube.com/watch?v=m3mZfCywxO8",
            "type": "video",
            "title": "Travis Scott, Drake - Sicko Mode (8D AUDIO) 🎧",
            "duration": 316,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/m3mZfCywxO8/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAzYqYLYh5JFWtJjRMJN6_98hNEDQ",
                "width": "246",
                "height": "138"
            },
            "videoId": "m3mZfCywxO8"
        },
        {
            "url": "https://www.youtube.com/watch?v=doLVt9Y7_84",
            "type": "video",
            "title": "TRAVIS SCOTT GOES SICKO MODE AT SUPER BOWL 53 HALFTIME SHOW!!",
            "duration": 128,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/doLVt9Y7_84/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDLcZF6iRVbutsh3x3WrJJwumQSTA",
                "width": "246",
                "height": "138"
            },
            "videoId": "doLVt9Y7_84"
        },
        {
            "url": "https://www.youtube.com/watch?v=9oRAbFwxLsA",
            "type": "video",
            "title": "Sucko Mode 2 (Official Video)",
            "duration": 132,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/9oRAbFwxLsA/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAY5z2yIVp9a-jBINbJ7dp90cWJ2w",
                "width": "246",
                "height": "138"
            },
            "videoId": "9oRAbFwxLsA"
        },
        {
            "url": "https://www.youtube.com/watch?v=RFyC6nZF5DI",
            "type": "video",
            "title": "Travis Scott, Skrillex - SICKO MODE (Skrillex Remix) (Audio)",
            "duration": 307,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/RFyC6nZF5DI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCUA7mM_55KBSMrBpy-6laQqprypg",
                "width": "246",
                "height": "138"
            },
            "videoId": "RFyC6nZF5DI"
        },
        {
            "url": "https://www.youtube.com/watch?v=oRa_c9zfZh0",
            "type": "video",
            "title": "SICKO BAMBA",
            "duration": 320,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/oRa_c9zfZh0/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAQarK2HOm8kQmO4SNG9mHsKvemXA",
                "width": "246",
                "height": "138"
            },
            "videoId": "oRa_c9zfZh0"
        },
        {
            "url": "https://www.youtube.com/watch?v=FzjBKzfbhjU",
            "type": "video",
            "title": "Travis Scott - SICKO MODE (MINECRAFT PARODY) ft. Lil Cheek & Slim Natey",
            "duration": 276,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/FzjBKzfbhjU/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCz-5zNSWtovB_nZpC-EkO2ftPRsg",
                "width": "246",
                "height": "138"
            },
            "videoId": "FzjBKzfbhjU"
        },
        {
            "url": "https://www.youtube.com/watch?v=Vw52nhF5J1c",
            "type": "video",
            "title": "Mama Mode (Sicko Mode Parody)",
            "duration": 261,
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/Vw52nhF5J1c/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAS0PrpmdgByDYF3h_STl6NdYkY3g",
                "width": "246",
                "height": "138"
            },
            "videoId": "Vw52nhF5J1c"
        }
    ],
    selectedSong: null
}

initialState = {
    relatedSearches: [],
    searches: [],
    selectedSong: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VIDEOS:
            return {
                ...state,
                searches: action.payload
            };
        case SET_RELATED_VIDEOS:
            return {
                ...state,
                relatedSearches: action.payload
            };
        case SET_SELECTED_SONG:
            return {
                ...state,
                selectedSong: action.payload
            }
        case UPDATE_SELECTED_SONG:
            return {
                ...state,
                selectedSong: {
                    ...state.selectedSong,
                    ...action.payload
                }
            };
        default:
            return state;
    }

};

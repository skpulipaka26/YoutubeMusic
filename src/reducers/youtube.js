import { SET_SEARCH_VIDEOS, SET_RELATED_VIDEOS } from '../actions/youtube';

const initialState = {
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
    searches: []
}

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
            }
        default:
            return state;
    }

};

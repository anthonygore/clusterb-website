import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

const pageData = {
    '/demon.html': {
        pageTitle: 'Demon - Cluster B',
        metaDescription: 'New single out 13th March 2026.',
        ogUrl: 'https://clusterb.com/demon',
        ogImage: 'https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F11993936--8604CF64-F7C8-42CD-9719787A5FD82750--0--5651845--GeminiGeneratedImageydf67tydf67tydf6.png?fm=jpg&q=75&w=800&s=704b8fd184753249ee6ca665ab8b1caa',
        songTitle: 'Demon',
        artistName: 'Cluster B',
        releaseText: 'New single out 13th March 2026.',
        callToAction: 'Be the first to hear the song when it drops!',
        buttondownUser: 'clusterb',
    },
    '/demon_launch.html': {
        pageTitle: 'Demon - Cluster B',
        metaDescription: 'New single out now.',
        ogUrl: 'https://clusterb.com/demon_launch',
        ogImage: 'https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F11993936--8604CF64-F7C8-42CD-9719787A5FD82750--0--5651845--GeminiGeneratedImageydf67tydf67tydf6.png?fm=jpg&q=75&w=800&s=704b8fd184753249ee6ca665ab8b1caa',
        songTitle: 'Demon',
        artistName: 'Cluster B',
        releaseText: 'Out now. Listen on your favourite platform.',
        streamingLinks: [
            { url: '#', title: 'Spotify', icon: 'https://distrokid.com/images/icons/spotify.png' },
            { url: 'https://music.apple.com/us/album/demon-single/1881917940?uo=4&app=music&at=1001lry3&ct=dashboard', title: 'Apple Music', icon: 'https://distrokid.com/images/icons/applemusic.png' },
            { url: 'https://music.apple.com/us/album/demon-single/1881917940?uo=4&app=itunes&at=1001lry3&ct=dashboard', title: 'iTunes', icon: 'https://distrokid.com/images/icons/itunes.png' },
            { url: '#', title: 'YouTube Music', icon: 'https://distrokid.com/images/icons/youtubemusic.png' },
            { url: '#', title: 'Amazon Music', icon: 'https://distrokid.com/images/icons/amazon.png' },
            { url: '#', title: 'Tidal', icon: 'https://distrokid.com/images/icons/tidal.png' },
            { url: '#', title: 'Deezer', icon: 'https://distrokid.com/images/icons/deezer.png' },
            { url: '#', title: 'Pandora', icon: 'https://distrokid.com/images/icons/rdio.png' },
            { url: '#', title: 'iHeartRadio', icon: 'https://distrokid.com/images/icons/iheart.png' },
            { url: '#', title: 'Tencent', icon: 'https://distrokid.com/images/icons/tencent.png' },
            { url: '#', title: 'NetEase', icon: 'https://distrokid.com/images/icons/netease.png' },
            { url: '#', title: 'Qobuz', icon: 'https://distrokid.com/images/icons/qobuz.png' },
            { url: '#', title: 'Boomplay', icon: 'https://distrokid.com/images/icons/boomplay.png' },
            { url: '#', title: 'Anghami', icon: 'https://distrokid.com/images/icons/anghami.png' },
            { url: '#', title: 'Saavn', icon: 'https://distrokid.com/images/icons/saavn.png' },
            { url: '#', title: 'Claro Música', icon: 'https://distrokid.com/images/icons/imusica.png' },
            { url: '#', title: 'Joox', icon: 'https://distrokid.com/images/icons/joox.png' },
            { url: '#', title: 'Kuack Media', icon: 'https://distrokid.com/images/icons/kuackmedia.png' },
            { url: '#', title: 'Adaptr', icon: 'https://distrokid.com/images/icons/feedfm.png' },
            { url: '#', title: 'Flo', icon: 'https://distrokid.com/images/icons/flo.png' },
            { url: '#', title: 'MediaNet', icon: 'https://distrokid.com/images/icons/beats.png' },
        ],
    },
}

export default defineConfig({
    server: {
        port: 4242,
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
            context(pagePath) {
                return pageData[pagePath]
            },
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                demon: resolve(__dirname, 'demon.html'),
                demon_launch: resolve(__dirname, 'demon_launch.html'),
            },
        },
    },
})

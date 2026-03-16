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
        releaseText: 'Listen on your favourite platform:',
        streamingLinks: [
            { url: 'https://open.spotify.com/track/4U9Ze2hejIJlCRJ3kwamo1', title: 'Spotify', icon: 'https://distrokid.com/images/icons/spotify.png' },
            { url: 'https://www.youtube.com/watch?v=bmze0QRzLpI', title: 'Youtube (Video)', icon: 'https://distrokid.com/images/icons/youtube.png' },
            { url: 'https://music.youtube.com/watch?v=YYKOpSZm7GY&si=27R-lh4p7S0W3E52', title: 'Youtube (Music)', icon: 'https://distrokid.com/images/icons/youtubemusic.png' },
            { url: 'https://music.apple.com/us/album/demon-single/1881917940?uo=4&app=music&at=1001lry3&ct=dashboard', title: 'Apple Music', icon: 'https://distrokid.com/images/icons/applemusic.png' },
            { url: 'https://music.apple.com/us/album/demon-single/1881917940?uo=4&app=itunes&at=1001lry3&ct=dashboard', title: 'iTunes', icon: 'https://distrokid.com/images/icons/itunes.png' },
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

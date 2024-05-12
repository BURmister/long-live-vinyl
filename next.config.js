/** @type {import('next').NextConfig} */
module.exports = {
   images: {
      // domains: [
      //    // 'i0.wp.com',
      //    // 'lh3.googleusercontent.com',
      //    // 'pngimg.com',
      //    // 'flowbite.s3.amazonaws.com',
      //    // 'i1.sndcdn.com',
      //    // 'i.ytimg.com',
      //    // 'www.rollingstone.com',
      //    // 'www.wecb.fm',
      //    // 'boymominjeansblog.com',
      //    // 'www.piumamusic.com',
      //    // 'i.pinimg.com',
      //    // 'ospioresdiscosdomundo.files.wordpress.com',
      //    // 'static.wikia.nocookie.net',
      //    // 'lostmediawiki.com',
      //    // 'm.media-amazon.com',
      //    // 'music-ark.ru',
      //    // 'www.pult.ru',
      //    // 'i.discogs.com',
      //    // 'media.pitchfork.com',
      //    // 'is1-ssl.mzstatic.com',
      //    // 'upload.wikimedia.org',
      // ],
      remotePatterns: [
         {
            protocol: 'http',
            hostname: '87.242.117.166*',
            pathname: '**',
         },
         {
            protocol: 'http',
            hostname: 'localhost*',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'i0.wp.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'pngimg.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'flowbite.s3.amazonaws.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'i1.sndcdn.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'i.ytimg.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'www.rollingstone.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'www.wecb.fm',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'boymominjeansblog.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'www.piumamusic.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'i.pinimg.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'ospioresdiscosdomundo.files.wordpress.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'static.wikia.nocookie.net',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'lostmediawiki.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'music-ark.ru',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'www.pult.ru',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'i.discogs.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'media.pitchfork.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'is1-ssl.mzstatic.com',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            pathname: '**',
         },
      ],
   },
};

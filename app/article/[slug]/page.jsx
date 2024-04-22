import Image from 'next/image';
import parse from 'html-react-parser';

import { BackButton } from '@/app/_components/ui/BackButton/BackButton';
import { StickyLine } from '@/app/_components/ui/StickyLine/StickyLine';
import { SearchBar } from '@/app/_components/ui/SearchBar/SearchBar';
import { ShareButton } from '@/app/_components/ui/ShareButton/ShareButton';

import styles from './styles.module.scss';

const ARTICLE = {
   id: '_1405892',
   title: 'Самый ценный винил в мире – часть 3',
   image: 'https://i0.wp.com/longlivevinyl.net/wp-content/uploads/2017/04/maxresdefault.jpg?w=1920&ssl=1',
   previewText:
      'История, окружающая «самый дорогой соул 45 в мире», интригует, и, поскольку известно, что существуют только две оригинальные копии, это золотая пыль для поклонников Motown.',
   article: [
      {
         type: 'article-preview',
         content: [
            {
               type: 'text',
               value: 'We’re back for <span>part 3</span> of The Most Valuable Vinyl In The World and this time around we look at the likes of Bob Dylan and Aphex Twin. If you’re joining us now make sure to go back and read <a>Part 1</a> and <a>Part 2</a>.',
            },
         ],
      },
      {
         type: 'article-block',
         caption: `9. Frank Wilson – Do I Love You (Indeed I Do)/Sweeter As The Days Go By`,
         postCaption: 'Soul 35019, ‘Quality Control’ copy, 1965<br/>SOLD <b>£25,742</b>',
         content: [
            {
               type: 'text',
               value: `The story that surrounds ‘the most expensive soul 45 in the world’ is an intriguing one and with only two original copies known to exist, it’s gold dust for Motown aficionados.`,
            },
            {
               type: 'text',
               value: `Wilson penned many top tunes for the label, including platters by Mary Love, Jeanie King and The Ikettes, while for his own releases, he chose to hide behind various monikers – ‘Sonny Daye’, ‘Eddie Wilson’ and ‘Chester St. Anthony’. This lost gem was cut – alongside its flip – at Armin Steiner’s Sound Recorders studio, in LA and was intended to bolster Wilson’s solo career, but instead, he struck a deal with Motown boss Berry Gordy to remain as a producer and the record was archived. It resurfaced in the 70s around the Northern Soul scene in slightly furtive circumstances. When scenester Simon Soussan ‘borrowed’ the original, he pressed a run of acetates with the track sneakily attributed to another soul singer, Eddie Foster. It took off straight away, but rumours spread that something fishy was afoot and when Simon sold his collection, the truth was finally out. This Motown ‘Quality Control’ copy was then passed from one collector to another with the value rising each time. When Fife collector Kenny Burrell bought it for £15,000 in 1997, he had Frank autograph it and auctioned it off two years later for £25,742. The anonymous buyer was rumoured to be Wilson himself.`,
            },
         ],
      },
      {
         type: 'article-block',
         caption: `8. Bob Dylan – The Freewheelin’ Bob Dylan`,
         postCaption: 'US album, stereo 1963, featuring four tracks deleted from subsequent releases<br/>SOLD <b>$35,000 (approx. £27,000)</b>',
         content: [
            {
               type: 'text',
               value: `Certainly one of the rarest records on the planet, this withdrawn version of Dylan’s US album was quickly deleted upon release. Released in May 1963 to critical acclaim, The Freewheelin’ Bob Dylan became an immediate fixture on the Beatles’ stereo, all of whom waxed lyrical about it. He’d moved on from his debut and unlike that record, 11 of the 13 tracks on Freewheelin’… were self-penned. But here’s the rub.`,
            },
            {
               type: 'text',
               value: `Just before the album was released, four songs were removed, replaced by four entirely new tracks. While forums will forever debate the reason for the swap, it is thought that CBS/Columbia censors played their part, having prevented Dylan from singing one of the removed tracks (Talkin’ John Birch Blues) on The Ed Sullivan Show – the incident saw a disgruntled Dylan refuse to substitute the song and leave the studios. A more straightforward reason may be that the new cuts were simply deemed to be better songs.<br/> New masters were quickly manufactured with a new sleeve design, but a few copies were pressed in error with the old tracklisting – only two stereo copies are known, and fewer than 20 mono copies (stereo copies list the withdrawn tracks on the labels, while mono copies list the new tracks). A stereo copy sold at auction for $35,000, while a mint mono copy should easily score around $15,000.`,
            },
         ],
      },
      {
         type: 'article-block',
         caption: `7. Aphex Twin – Caustic Window`,
         postCaption: `Test pressing, 1994</br>SOLD <b>$46,300 (approx. £35,700)</b>`,
         content: [
            {
               type: 'text',
               value: `It’s a given that this list would contain the likes of The Beatles, Elvis and The Stones, but what about elusive purveyor of groundbreaking wonky electronica, Aphex Twin?`,
            },
            {
               type: 'text',
               value: `Bet you didn’t expect to see him here… But then, Richard James, aka Aphex Twin, has always been a law unto himself and when, 20 years ago, he planned to unleash his new album, Caustic Window, he surprisingly abandoned it at the last minute. So when one of only four test pressings showed up on Discogs in 2014, the decision was made by a few superfans to raise funds via a Kickstarter campaign to buy the record and release it via a deal with Aphex Twin’s label, Rephlex Records.</br>
                  The campaign raised over $67,000 and the mysterious LP was bought, reproduced in digital form for the pledgers and then put up for auction. This ultra-rare test pressing was bought on eBay that year for $46,300 by Markus ‘Notch’ Persson, the creator of the Minecraft video game – “So I kinda paid a lot for a double LP from the 90s,” he tweeted at the time. A third of the proceeds went to Rephlex, a third went to the 4,124 Kickstarter backers and the rest went to charity.</br>
                  The record itself was reappraised favourably by critics on its re-release, some noting its avant-garde capturing of future dance-music trends – and we suspect that this is far from the last we’ll hear from Aphex Twin (and his various aliases) in the record-collecting world…`,
            },
         ],
      },
      {
         type: 'article-block',
         caption: `The Beatles – Love Me Do`,
         postCaption: `EMI/Parlophone, one-sided acetate, 1962</br>Estimate <b>$50,000 to $100,000</b>`,
         content: [
            {
               type: 'text',
               value: `There’s a huge number of Beatles acetates in circulation and many of them are worth some serious cash, but this one-sided rarity is another of the biggest earners. That is if it ever resurfaces from wherever it now resides.`,
            },
            {
               type: 'image',
               value: `https://i.pinimg.com/736x/c8/fb/ed/c8fbedf708dcb9c3855d45cd9509155b.jpg`,
            },
            {
               type: 'text',
               value: `Its eyewatering price tag is down to the fact it’s said to be the only unedited version of The Beatles’ first single that’s come to light and with the inclusion of a ‘1-2-3-4’ count-in, possibly from Pete Best who was still the band’s drummer at the time (George Martin reportedly told Brian Epstein post-recording that Best wasn’t up to scratch, which led to Best being sacked).`,
            },
            {
               type: 'text',
               value: 'The song is supposedly written about Lennon’s first girlfriend Iris Caldwell and was recorded using a harmonica that he apparently shoplifted in Hamburg. The estimate is likely close, when one considers an eBay auction in 2011 of a (slightly) less-rare advance DJ copy of the single (with P.S. I Love You on the flipside) and with another misspelling (the writing credits read ‘Lennon/ McArtney’) sold for nearly $20,000. There were a mere 250 of these sent out as promo for the band.',
            },
         ],
      },
      {
         type: 'article-end',
         caption: 'Stay tuned for the penultimate instalment!',
      },
   ],
};

export default function ArticleDetail({ params }) {
   return (
      <>
         <div className={`page-wrapper flex flex-col ${styles.wrapper}`}>
            <StickyLine>
               <BackButton />
               <SearchBar
                  icon={
                     <svg className="nn-svg" width="64px" height="64px" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 750">
                        <path d="M593.99,360.97c-2.48-10.26-2.87-26.72-6.74-40.05,6.16-7.83-1.12-16.44-5.28-23.41-9.95-17.48-20.79-34.65-33.99-49.86-12.63-14.88-29.97-24.42-45.51-35.87-13.07-10.7-25.18-22.57-38.65-32.8-20.51-19.67-53.74,.22-46.64,27.47,6.26,30.59,33.43,23.73,23.35-4.47,12.29-3.72,37.1,24.82,48.44,31.88,32.25,21.9,54.48,37.62,74.42,66.58-12.82-.3-25.79,.41-38.61-.62-29.82-.91-61.43-4.55-90.07,5.41-17.18,5.97-13.25,21.92-14.25,36.05-13.19,.21-26.97,.86-39.82-2.5-2.68-20.94-11.5-23.71-30.66-19.93-13.43,.95-26.88,1.61-40.34,1.79-25.08,.42-50.15-1.09-75.22-1.13,12.2-13.72,25.05-26.89,37.87-40,16.22-15.06,35.5-26.42,51.1-42.14,8.02-7.98,14.21-17.52,21.64-26.01,5.73-1.04,10.43,5.76,12.5,10.47,1.93,4.76,3.49,9.68,4.98,14.59,5.43,13.31,18.82,1.69,14.42-8.81-4.48-17.08-15.29-41.79-36.7-38.41-6.92,2-10.93,8.55-15.67,13.49-6.95,8.3-15.19,15.29-23.89,21.67-15.99,11.23-81.54,63.24-101.88,98.69-12.98,4.08-21.75,12.25-11.16,27.61,11.11,27.68,15.21,90.95,45.87,101.67,30.97,1.55,61.66-5.76,92.57-6.92,43.01-1.6,60.12,4.2,50.51-47.51,18.66-.38,37.37-1.63,55.97,.48,3.41,12.78,6.15,28.84,17.91,36.62,8.82,3.4,18.69-.61,27.84-.85,18.04-1.91,36.28-1.87,54.4-1.64,77.33,7.06,73.19,.62,61.3-71.51Zm-91.79,51.52c-7.05,.53-46.19,9.51-47.59,3.9-9.44-30.97,0-45.76-40.99-48.06-43.29-4-69.17-10.5-61.83,45.2-32.1,3.91-62.47,15.3-94.21,20.65-8.92-.29-22.74,5.7-27.5-4.71-10.22-24.97-7.55-53.32-15.4-79.07,49.17-3,98.96,1.67,147.78-5.76,4.14,23.24,31.99,16.12,49.15,17.71,19.72,3.76,27.33-11.68,27.54-28.97,42.38,1.04,84.75,.33,127.01-3.8,2.28,23.51,1.46,47.24,4.56,70.7-22.91,3.75-45.83,7.19-68.52,12.2Z" />
                        <path d="M177.03,459.36c-5.95,.63-11.9,1.25-17.86,1.88-11.4,2.82-12.75,20.57-4.55,27.59,7.48,5.18,17.37,.2,25.8,.39,12-.52,29.26-2.86,26.84-18.9-1.23-15.92-19.1-12.29-30.23-10.95Z" />
                        <path d="M249.03,541.66c-2.38-10.03-1.13-30.25-15.64-29.61-14.5,4.92-7.91,24.19-6.89,35.49,2.39,9.52,.46,21.52,7.88,28.91,9.62,8.1,19.75-5.37,17.62-14.92-.99-6.62-1.98-13.25-2.98-19.87Z" />
                        <path d="M342.91,492.05c-13.13-4.86-26.25-9.73-39.38-14.58-9.6-3.63-22.43-7.52-25.19,6.18-6.73,23.3,42.25,28.85,57.9,37.49,15.9,4.62,20.35-23.97,6.67-29.09Z" />
                     </svg>
                  }
                  placeholder={'Найди ту самую...'}
                  action={'/magazine/search'}
               />
               <ShareButton
                  icon={
                     <svg width="48px" height="48px" viewBox="0 0 64 64">
                        <g>
                           <path
                              d="M36.914 14.545a21.849 21.849 0 0 0-6.803 1.085v-2.98a.804.804 0 1 0-1.607 0v3.574a21.937 21.937 0 1 0 8.41-1.679zm0 42.28a20.323 20.323 0 0 1-8.41-38.83v4.672a3.543 3.543 0 1 0 1.607 2.963v-8.282a20.327 20.327 0 1 1 6.803 39.478zm-8.41-31.195a1.94 1.94 0 1 1-1.94-1.94 1.942 1.942 0 0 1 1.94 1.94zm8.41 4.402a6.457 6.457 0 1 0 6.456 6.458 6.464 6.464 0 0 0-6.456-6.457zm0 11.307a4.85 4.85 0 1 1 4.848-4.85 4.855 4.855 0 0 1-4.848 4.85zm0-5.921a1.071 1.071 0 1 0 1.07 1.072 1.071 1.071 0 0 0-1.07-1.072zm15.762-7.178a17.752 17.752 0 0 0-15.762-9.538.804.804 0 0 0 0 1.607 16.145 16.145 0 0 1 14.338 8.677.804.804 0 1 0 1.424-.746zm-15.762-6.38a.804.804 0 0 0 0 1.607 12.99 12.99 0 0 1 11.563 7.027.803.803 0 0 0 1.426-.74 14.59 14.59 0 0 0-12.989-7.894zm0 3.157a.804.804 0 0 0 0 1.608 9.832 9.832 0 0 1 8.79 5.38.802.802 0 0 0 .715.438.787.787 0 0 0 .364-.089.802.802 0 0 0 .35-1.08 11.428 11.428 0 0 0-10.219-6.257zm0 27.653a16.258 16.258 0 0 1-13.947-7.973.804.804 0 0 0-1.385.816 17.876 17.876 0 0 0 15.332 8.764.804.804 0 1 0 0-1.607zm0-6.316a9.813 9.813 0 0 1-8.405-4.695.803.803 0 0 0-1.367.844 11.408 11.408 0 0 0 9.772 5.458.804.804 0 0 0 0-1.607zm0 3.158a12.935 12.935 0 0 1-11.177-6.332.803.803 0 1 0-1.377.826 14.717 14.717 0 0 0 12.554 7.114.804.804 0 1 0 0-1.607zM17.79 14.492a3.024 3.024 0 1 0 3.025 3.025V7.481a1.913 1.913 0 0 0-2.31-1.872l-7.402 1.565a1.922 1.922 0 0 0-1.519 1.872v7.852a2.984 2.984 0 0 0-1.417-.37 3.024 3.024 0 1 0 3.024 3.025v-7.305l8.016-1.696v4.31a2.984 2.984 0 0 0-1.417-.37zm0 4.442a1.417 1.417 0 1 1 1.417-1.417 1.419 1.419 0 0 1-1.417 1.417zM8.167 20.97a1.417 1.417 0 1 1 1.417-1.417 1.419 1.419 0 0 1-1.417 1.417zm3.024-10.364v-1.56a.307.307 0 0 1 .244-.3l7.403-1.565a.302.302 0 0 1 .256.062.299.299 0 0 1 .113.238V8.91z"
                              fill="var(--black)"></path>
                        </g>
                     </svg>
                  }
                  title={ARTICLE.title}
                  text={'Проект, основанный на музыке, эмоциях и приятных моментах | Long Live Vinyl'}
               />
            </StickyLine>
            <section className={`content-wrapper section-banner ${styles.preview}`}>
               <Image src={ARTICLE.image} width="1500" height="1500" alt="" className={styles.authorImage} />
            </section>
            <section className={`article-wrapper flex flex-col article-section`}>
               <h1 className={`caption-48 article-caption`}>{ARTICLE.title}</h1>
               {ARTICLE.article?.map((block, index) => {
                  let captionStyle = 'caption-32 article-caption';

                  if (block.type === 'article-end') captionStyle = 'caption-24 text-center';

                  return (
                     <div key={index} className={`flex flex-col article-block`}>
                        {block.caption && <h2 className={captionStyle}>{parse(block.caption)}</h2>}
                        {block.postCaption && <h2 className={`text-24 article-text`}>{parse(block.postCaption)}</h2>}
                        {block.content?.map((content, index) => {
                           if (content.type === 'text')
                              return (
                                 <p key={index} className={`text-24 article-text`}>
                                    {parse(content.value)}
                                 </p>
                              );

                           if (content.type === 'image')
                              return <Image key={index} className={`article-image`} src={content.value} width="1500" height="1500" alt="" />;
                        })}
                     </div>
                  );
               })}
            </section>
         </div>
      </>
   );
}

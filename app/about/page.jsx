import Image from 'next/image';
import parse from 'html-react-parser';

import { SeoBlock } from '@/app/_components/layout/SeoBlock/SeoBlock';
import { fetchGetQuery } from '../_hooks/useAxios';

import styles from './styles.module.scss';

export const metadata = {
   title: 'О проекте Long Live Vinyl',
   description: 'О проекте, основанном на виниловых пластинках, Long Live Vinyl',
};

const ABOUT = [
   {
      slug: 'update',
      name: 'Обновление',
      content: [
         {
            type: 'text',
            value: `Добро пожаловать снова в мир музыкальной магии! Каждый день мы углубляемся в мысли о возвращении винила и сегодня рады представить
                  вам обновленный сайт Long Live Vinyl - новое воплощение нашего проекта, полное энергии и вдохновения.`,
         },
         {
            type: 'text',
            value: `Что же нового? Прежде всего, мы упростили навигацию на сайте - основное меню теперь расположено вверху главной страницы и доступно
                  на каждой странице, содержащее пять основных разделов: обзоры винила, эксклюзивные интервью, магазины пластинок, лейблы и
                  проигрыватели. Но не волнуйтесь, весь наш остальной контент все еще доступен, и теперь мы уверены, что он стал более удобным и
                  логичным. У нас есть разделы, посвященные всем аспектам Дня магазинов пластинок, архивы обзоров музыки и аппаратуры, а также
                  детальное освещение Discogs - все, что вам нужно знать о наших печатных и цифровых изданиях журнала и многое другое. Однако наша
                  работа не остановлена. Мы продолжаем тегировать каждый материал на сайте по жанру - ведь каждый из наших читателей, слушателей и
                  музыкальных друзей заслуживает найти что-то по-настоящему уникальное и именно по своему вкусу. Прошу вас ознакомиться с обновлениями
                  и поделиться вашими мыслями.`,
         },
      ],
   },
   {
      slug: 'info',
      name: 'Растём',
      content: [
         {
            type: 'text',
            value: `Согласно отчету Technavio, мировой рынок виниловых пластинок ожидает увеличение на $337,21 миллиона в период с 2020 по 2024 годы
                  благодаря стабильному год к году росту. Наша награжденная журналистика, фотографии, контент и дизайн из печатных и цифровых изданий
                  Long Live Vinyl доступны для лицензирования и синдикации по всему миру.`,
         },
         {
            type: 'text',
            value: `Мы помогаем любителям открыть для себя мир музыки. Наши проекты доступны всем и везде. Мы всегда рядом со своими читателями. Контент
                  доступен для синдикации на всех территориях и предлагается в рамках лицензии, которая включает контент, шаблон и бренд. Свяжитесь с
                  нами для получения каталога и цен.`,
         },
      ],
   },
];

const HISTORY = [
   {
      name: 'Сентябрь 2020',
      content: [
         {
            type: 'text',
            value: `Мы превысили отметку в 3 000 подписчиков на Twitter, и были ретвитнуты дважды официальным аккаунтом Джона Леннона. Facebook по-прежнему остается нашей крупнейшей платформой, с более чем 15 000 подписчиками.`,
         },
      ],
   },
   {
      name: 'Август 2020',
      content: [
         {
            type: 'text',
            value: `После более чем 40 печатных выпусков Long Live Vinyl приостанавливает ежемесячную печать, а его веб-сайт становится самым большим и лучшим ресурсом для поклонников винила, коллекционеров, покупателей и слушателей, не оставляя равнодушным ни одного обладателя вертушки.`,
         },
      ],
   },
   {
      name: 'Октябрь 2019',
      content: [
         {
            type: 'text',
            value: `Мы вошли в список номинантов на награды PPA Independent Publisher Awards в категории Коммерческого партнерства года, благодаря нашему роскошному и подробному одноразовому изданию, посвященному всем особым выпускам для Record Store Day. Первый в мире официальный долгий список Record Store Day - еще одно новшество от Long Live Vinyl, и с тех пор было опубликовано еще два издания.`,
         },
      ],
   },
   {
      name: 'Январь 2018',
      content: [
         {
            type: 'text',
            value: `FAC это. Журнал захватывает киоски снова с очередной очень коллекционной обложкой (снова четыре варианта) для специального выпуска Issue 10 о Factory Records.`,
         },
      ],
   },
   {
      name: 'Ноябрь 2017',
      content: [
         {
            type: 'text',
            value: `Мы очень гордимся тем, что выиграли нашу первую премию PPA от Independent Publishers Association - благодаря Гарету Мерфи, который взял премию за Лучшего писателя года.`,
         },
      ],
   },
   {
      name: 'Июль 2017',
      content: [
         {
            type: 'text',
            value: `История повторяется: так же, как обложку альбома John & Yoko "Two Virgins" пришлось цензурировать коричневым бумажным пакетом, Issue 5 печатной версии Long Live Vinyl также пришлось накрыть коричневым бумажным пакетом, когда он поступил в продажу в магазинах WH Smith, благодаря статье Иэна Пила о 40 самых скандальных обложках в истории музыки.`,
         },
      ],
   },
   {
      name: 'Июнь 2017',
      content: [
         {
            type: 'text',
            value: `Мы отмечаем 50-летие альбома Sgt. Pepper с четырьмя разными обложками одного и того же выпуска Long Live Vinyl. Номер четыре представлял четырех Битлов - Джона, Пола, Джорджа и Ринго - каждого в костюмах из альбома Sgt. Pepper, полный набор которых сейчас стал предметом массового собирательства.`,
         },
      ],
   },
   {
      name: 'Май 2017',
      content: [
         {
            type: 'text',
            value: `Гэри Уокер присоединяется в качестве главного редактора печатной версии Long Live Vinyl (Иэн Пил переходит в редакторов-корреспондентов) и ведет журнал от успеха к успеху. Он приглашает лучших писателей, в том числе Гарета Мерфи и Пита Пафида. Он поднимает дизайн и представление на новый уровень и коренным образом меняет политику A&R журнала, которая заставляет большинство независимых лейблов трястись в своих сапогах.`,
         },
      ],
   },
   {
      name: 'Апрель 2017',
      content: [
         {
            type: 'text',
            value: `Long Live Vinyl выпускает свой первый винил - и становится одним из первых журналов на киоске, в которых включаются гибкие пластинки с момента золотых дней журнала Flexipop! Гибкий винил "Pioneers of Electronica" (можно найти на Discogs) содержит классический трек от Томаса Лира на стороне А и совершенно новый трек от The Residents на стороне Б. Он квадратный, желтый, с золотыми буквами, и мы не могли быть гордее.`,
         },
      ],
   },
   {
      name: 'Январь 2017',
      content: [
         {
            type: 'text',
            value: `Long Live Vinyl становится спонсором премии Art Vinyl Awards за отличие в дизайне обложек. Первый приз в этот вечер достается Мэтью Куперу за альбом The Last Shadow Puppets "Everything You've Come to Expect".`,
         },
      ],
   },
   {
      name: 'Ноябрь 2016',
      content: [
         {
            type: 'text',
            value: `Выходит первый номер печатного издания журнала Long Live Vinyl на киосках по всему миру. И вызывает мгновенное волнение: это журнал, выполненный в форме виниловой пластинки. Страницы 12" x 12" с интервью с легендами виниловой сцены от Роджера Дина до Стива Дэвиса. Интересно.`,
         },
      ],
   },
   {
      name: 'Июль 2014',
      content: [
         {
            type: 'text',
            value: `Два мировых музыкальных журнала, Vintage Rock и Classic Pop, последний также основанный и редактируемый Иэном Пилом, публикуют двухстраничные обзоры новых релизов и переизданий под брендом Long Live Vinyl.`,
         },
      ],
   },
   {
      name: 'Март 2014',
      marker: 'Начало',
      content: [
         {
            type: 'text',
            value: `Журнал Long Live Vinyl был основан Иэном Пилом с издательством Anthem Publishing. Опытный журналист по винилу, он много писал на эту тему для Spiral Scratch и Record Collector в 80-х, Music Collector и DJ magazine (более 250 последовательных выпусков) в 90-х, а также для The Times и The Guardian в 00-х и 10-х годах. Long Live Vinyl начинает свою деятельность на Facebook с эксклюзивных видео "первого прослушивания" белых лейбловых промо-версий выпусков Record Store Day 2014.`,
         },
      ],
   },
];

export default async function About() {
   const data = await fetchGetQuery(
      'https://api.longlivevinyl.ru/api/company-histories/?sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=264',
   );
   const HISTORY_DATA = data.data;

   return (
      <div className={`page-wrapper flex flex-col ${styles.magazine}`}>
         <div className="content-wrapper section-banner">
            <h1 className="content-wrapper caption-88 title section-title text-white text-center">
               Long Live
               <br />
               Vinyl
            </h1>
            <p className="text-24 text-white text-center">Не просто журнал</p>
            <Image
               src="https://i.pinimg.com/564x/ce/56/b5/ce56b5caf8e1e5e98bf9962bd675d922.jpg"
               width="1500"
               height="1500"
               alt=""
               className={styles.bannerImage}
            />
         </div>
         <section className={`article-wrapper flex flex-col article-section-nn`}>
            {ABOUT?.map((item, index) => (
               <div key={index} className={`flex flex-col article-block-nn`}>
                  <span className={`flex article-caption margin-unset ${styles.captionContent}`}>
                     <h2 className={`caption-32 text-red`}>{item.name}</h2>
                  </span>
                  {item.content?.map((content, index) => {
                     if (content.type === 'text')
                        return (
                           <p key={index} className={`text-24 text-pretty`}>
                              {parse(content.value)}
                           </p>
                        );

                     if (content.type === 'image')
                        return <Image key={index} className={`article-image margin-unset`} src={content.value} width="1500" height="1500" alt="" />;
                  })}
               </div>
            ))}
         </section>
         <section className={`article-wrapper flex flex-col article-section-nn`}>
            <h2 className={`caption-32 text-red`}>История</h2>
            {HISTORY_DATA?.map((item, index) => (
               <div key={index} className={`flex flex-col article-block-nn`}>
                  <span className={`flex items-center article-caption margin-unset ${styles.captionContent}`}>
                     <h3 className={`caption-24`}>{item.attributes.title}</h3>
                     {item.attributes.specialStep && (
                        <p className={`flex items-center text-24 text-red ${styles.marker}`}>
                           <svg
                              stroke="var(--red)"
                              fill="var(--red)"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="24px"
                              width="24px"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                 fill="none"
                                 strokeLinecap="square"
                                 strokeMiterlimit="10"
                                 strokeWidth="24"
                                 d="m268 112 144 144-144 144m124-144H100"></path>
                           </svg>
                           {item.attributes.specialStep}
                        </p>
                     )}
                  </span>
                  {item.attributes.description && (
                     <p key={index} className={`text-24 article-text margin-unset`}>
                        {item.attributes.description}
                     </p>
                  )}
                  {item.attributes.content?.map((content, index) => {
                     if (content.type === 'text')
                        return (
                           <p key={index} className={`text-24 article-text margin-unset`}>
                              {content.value}
                           </p>
                        );

                     if (content.type === 'image')
                        return <Image key={index} className={`article-image margin-unset`} src={content.value} width="1500" height="1500" alt="" />;
                  })}
               </div>
            ))}
         </section>
         <SeoBlock
            text={[
               `Мы - не просто журнал. Мы - сообщество музыкальных энтузиастов, где каждый может найти что-то особенное. Наш проект посвящен всему, что связано с виниловыми пластинками - от их коллекционирования и обзоров до самых ярких моментов истории винила.`,
               `Мы уважаем наших читателей и слушателей, стремясь предоставить им только лучший контент. Наши статьи и обзоры наполнены страстью к музыке и заботой о качестве. Мы гордимся тем, что наш журнал стал источником вдохновения для многих меломанов по всему миру.`,
               `Long Live Vinyl всегда рядом с вами - мы стремимся быть вашим надежным проводником в мире винила. Мы создаем контент, который доступен каждому, в любое время и в любом месте. Наша цель - поддерживать вас в вашем увлечении музыкой и делать ваше путешествие по миру винила незабываемым.`,
               `Присоединяйтесь к нам, и давайте вместе откроем для себя всю магию винила!`,
            ]}
            caption={'Да здравствует Vinyl!'}
         />
      </div>
   );
}

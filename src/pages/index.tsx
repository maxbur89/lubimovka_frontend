import { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import Head from 'next/head';
import cn from 'classnames/bind';

import { Main, Partner } from 'api-typings';
import { fetcher } from 'shared/fetcher';
import { MainTitle } from 'components/main-page/title';
import { MainEvents } from 'components/main-page/events';
import { MainAside } from 'components/main-page/aside';
import { MainBanners } from 'components/main-page/banners';
import { MainPlatforms } from 'components/main-page/platforms';
import { MainShortList } from 'components/main-page/shortList';
import { MainArchive } from 'components/main-page/archive';
import { MainPartners } from 'components/main-page/partners';
import AppLayout from 'components/app-layout';

import data from 'components/main-page/assets/mock-data.json';
import mainEventsData from 'components/main-page/assets/main-events.json';
import mainPlatformsData from 'components/main-page/assets/main-platforms-data.json';
import mainShortListData from 'components/main-page/assets/main-short-list-data.json';
import mainArchiveData from 'components/main-page/assets/main-archive-data.json';
import styles from './index.module.css';

const cx = cn.bind(styles);

const MainPage: NextPage = ({ data, partners }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data, partners);

  const { title, events, aside, banners, platforms, /* partners, */ archive, shortList, metaTitle } = data;
  return (
    <AppLayout hiddenPartners>
      <>
        <Head>
          <title>{metaTitle}</title>
        </Head>
        <main className={cx('main')}>
          {title && (
            <MainTitle
              title={title.title}
              view={title.view}
              buttonLink={title.buttonLink}
              buttonText={title.buttonText}
              text={title.text}
            />
          )}
          {events && <MainEvents data={mainEventsData}/>}
          {aside && <MainAside/>}
          {banners && <MainBanners/>}
          {platforms && <MainPlatforms data={mainPlatformsData[0]}/>}
          {shortList && <MainShortList data={mainShortListData}/>}
          {archive && mainArchiveData.map((el) => (
            <MainArchive key={el.id} data={el}/>
          ))}
          {partners && <MainPartners/>}
        </main>
      </>
    </AppLayout>
  );
};

const fetchMain = async () => {
  let data;

  try {
    data = await fetcher<Main>('/main');
  } catch (error) {
    // TODO: обработать ошибку, добавим после реализации страницы ошибки

    return;
  }

  return data;
};

const fetchPartners = async () => {
  let partners;

  try {
    partners = await fetcher<Partner>('/info/partners');
  } catch (error) {
    // TODO: обработать ошибку, добавим после реализации страницы ошибки

    return;
  }

  return partners;
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchMain();
  const partners = await fetchPartners();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      partners,
    },
  };
};

export default MainPage;

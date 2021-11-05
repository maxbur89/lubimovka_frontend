import React, { FC } from 'react';
import cn from 'classnames/bind';
import { Button } from '../button';
import { InfoLink } from '../info-link';

import { Url } from 'shared/types';

import styles from './basic-play-card.module.css';
const cx  = cn.bind(styles);

export interface IBasicPlayCardProps {
  play: {
    title: string;
    city: string;
    year: string;
    linkView: Url;
    linkDownload: Url;
  };
  author: Array <{
    id: number;
    name: string;
  }>;
  buttonVisibility?: boolean;
}

export const BasicPlayCard: FC<IBasicPlayCardProps> = (props) => {
  const {
    play,
    author,
    buttonVisibility,
  } = props;

  const authorsHiddenLabel = (
    <React.Fragment>
      {
        author.length > 1 ?
          (<dt className={cx('hiddenText')}>
          Авторы:
          </dt>)
          :
          (<dt className={cx('hiddenText')}>
          Автор:
          </dt>)
      }
    </React.Fragment>
  );

  return (
    <article
      className={cx('card')}
    >
      <div className={cx('container')}>
        <h6 className={cx('title')}>{play.title}</h6>
        <div>
          <Button
            className={cx('buttonCustom', buttonVisibility && 'buttonVisible')}
            width='100%'
            size='l'
            view='primary'
            iconPlace='right'
            icon='arrow-45'
            label='Смотреть читку'
            border='top'
            isLink
            href={play.linkView}
          />
          <Button
            className={cx('buttonCustom', buttonVisibility && 'buttonVisible')}
            width='100%'
            size='l'
            view='primary'
            iconPlace='right'
            icon='arrow-down'
            label='Скачать пьесу'
            border='top'
            isLink
            href={play.linkDownload}
          />
        </div>
      </div>
      <dl className={cx('info')}>
        {authorsHiddenLabel}
        {author.map((i) => (
          <dd className={cx('author', author.length > 1 && 'authorMultiple')} key={i.id}>
            <InfoLink
              isOutsideLink={false}
              href={`/authors/${i.id}`}
              label={i.name}
              size='l'
              className={cx('author', author.length > 1 && 'authorMultiple')}
            />
          </dd>
        )
        )}
        <dt className={cx('hiddenText')}>
          Город:
        </dt>
        <dd className={cx('city')}>
          {play.city}
        </dd>
        <dt className={cx('hiddenText')}>
          Год:
        </dt>
        <dd className={cx('year')}>
          {play.year}
        </dd>
      </dl>
    </article>
  );
};

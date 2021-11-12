import React, { FC, useState, ChangeEvent, useCallback } from 'react';

import { Button } from 'components/ui/button';

import style from './library-form.module.css';

const LibraryForm: FC = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  }, []);

  return (
    <form
      noValidate
      name='searchForm'
      className={style.searchForm}
    >
      <input
        name='search'
        type='text'
        spellCheck={false}
        className={style.searchInput}
        value={searchInput}
        onChange={handleChange}
        placeholder='Автор или название пьесы'
      />
      <Button label='ИСКАТЬ' size='s' icon='arrow-right'
        iconPlace='left' border='none' width='scale(120px)' isLink={true}
        href='/library/search-result' align='start' gap='scale(3px)' />
    </form>
  );
};

export default LibraryForm;
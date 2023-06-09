import React from 'react';
import { StyledSearchInputWrapper } from './styled';
import { LineSearchInput } from './line_search_input';
import { t } from '@apitable/widget-sdk';
import { Strings } from '../../../utils';

export const ListSearch = (props: any) => {
  const { style, keyword, placeholder, inputRef, onSearchChange, setKeyword, onInputEnter } = props;
  const changInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target!.value);
    onSearchChange && onSearchChange(e, e.target!.value);
  };

  const onPressEnter = (e: KeyboardEvent) => {
    onInputEnter && onInputEnter(() => {
      setKeyword('');
    });
  };

  return <StyledSearchInputWrapper
    style={style}
  >
    <LineSearchInput
      onPressEnter={onPressEnter}
      onChange={changInput}
      value={keyword}
      placeholder={placeholder || t(Strings.search)}
      ref={inputRef}
    />
  </StyledSearchInputWrapper>;
};

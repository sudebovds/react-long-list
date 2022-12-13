import React from 'react';

import {
  UseFormRegister,
  FieldValues,
  Controller,
  Control,
} from 'react-hook-form';

const checkDataHandler = (
  defaultValue: any,
  isReadOnly: boolean,
  field: string,
  register: UseFormRegister<FieldValues>,
  control?: Control
) => {
  switch (typeof defaultValue) {
    case 'string':
      if (field.toLowerCase() === 'id') {
        return (
          <>
            <h3>{field}</h3>
            <input
              type="text"
              key={defaultValue}
              id={field}
              {...register(field)}
              defaultValue={defaultValue}
              readOnly
            />
          </>
        );
      }
      if (field.toLowerCase() === 'email') {
        return (
          <fieldset className="contentItemRow">
            <label htmlFor={field}>{field}:</label>
            <input
              key={defaultValue}
              id={field}
              type="email"
              defaultValue={defaultValue}
              readOnly={isReadOnly}
              {...register(field)}
            />
          </fieldset>
        );
      }
      if (defaultValue.length > 5 && !isNaN(Date.parse(`${defaultValue}`))) {
        const date = new Date(defaultValue)
          .toLocaleDateString('ru-RU')
          .split('.')
          .reverse()
          .join('-');
        return (
          <fieldset className="contentItemRow">
            <label htmlFor={field}>{field}:</label>
            <Controller
              control={control}
              name={field}
              defaultValue={date}
              render={({ field: { ...rest } }) => (
                <input type="date" readOnly={isReadOnly} {...rest} />
              )}
            />
          </fieldset>
        );
      }

      return defaultValue.length > 50 ? (
        <fieldset className="contentItemRow">
          <label htmlFor={field}>{field}:</label>
          <textarea
            key={defaultValue}
            id={field}
            cols={6}
            rows={6}
            defaultValue={defaultValue}
            readOnly={isReadOnly}
            {...register(field)}
          />
        </fieldset>
      ) : (
        <fieldset className="contentItemRow">
          <label htmlFor={field}>{field}:</label>
          <input
            key={defaultValue}
            id={field}
            type="text"
            defaultValue={defaultValue}
            readOnly={isReadOnly}
            {...register(field)}
          />
        </fieldset>
      );

    case 'number':
      if (field.toLowerCase() === 'id') {
        return (
          <>
            <h3>{field}</h3>
            <input
              type="number"
              key={defaultValue}
              id={field}
              {...register(field)}
              defaultValue={defaultValue}
              readOnly
            />
          </>
        );
      }
      return (
        <fieldset className="contentItemRow">
          <label htmlFor={field}>{field}:</label>
          <input
            key={defaultValue}
            id={field}
            type="number"
            defaultValue={defaultValue}
            readOnly={isReadOnly}
            {...register(field)}
          />
        </fieldset>
      );

    case 'boolean':
      return (
        <fieldset className="contentItemRow">
          <label htmlFor={field}>{field}:</label>
          <input
            key={parseInt(`${defaultValue}`, 10)}
            id={field}
            type="radio"
            defaultValue={defaultValue ? 'true' : 'false'}
            readOnly={isReadOnly}
            {...register(field)}
          />
        </fieldset>
      );
    default:
      return null;
  }
};

export default checkDataHandler;

import React, { useState } from 'react';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { ButtonEventType, ContentItemType, IDataInterface } from '../../types';
import Button from '../Button/Button';
import checkDataHandler from '../../helpers';

// Styles
import './ContentItem.css';

const ContentItem: ContentItemType = ({
  style,
  optimData,
  index,
  setChangedData,
  wholeData,
}) => {
  const { register, handleSubmit, control } = useForm();
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const allowChangeItemHandler: ButtonEventType = (e) => {
    e.preventDefault();

    setIsReadOnly(false);
    setIsButtonDisabled(false);
  };

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    const newData: IDataInterface[] = Object.assign([], wholeData);
    newData[index] = data;

    setChangedData(newData);
  };
  return (
    <form
      className="contentItem"
      style={style}
      key={optimData.id}
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      {Object.keys(optimData).map((itemField) => (
        <div className="contentItemData" key={itemField}>
          {checkDataHandler(
            optimData[itemField],
            isReadOnly,
            itemField,
            register,
            control
          )}
        </div>
      ))}
      <div className="contentItemChangeForm">
        <Button
          text="Change item"
          className="btn btnChange"
          disabled={!isButtonDisabled}
          onClick={(e) => allowChangeItemHandler(e)}
        />
        <Button
          type="submit"
          text="Save changes"
          className="btn btnSave"
          disabled={isButtonDisabled}
        />
      </div>
    </form>
  );
};

export default ContentItem;

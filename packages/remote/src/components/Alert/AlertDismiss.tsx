import React, { FC, memo } from 'react';
import { AlertDismissProps } from '@/components/Alert/types';

const AlertDismiss: FC<AlertDismissProps> = ({
  onDismiss,
}) => {
  return (
    <button
      type='button'
      className='btn-close'
      aria-label='Close'
      onClick={onDismiss}
    />
  );
};

export default memo(AlertDismiss);
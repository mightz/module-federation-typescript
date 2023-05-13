import React, { FC, memo } from 'react';
import { AlertProps } from '@/components/Alert/types';
import AlertDismiss from '@/components/Alert/AlertDismiss';

const Alert: FC<AlertProps> = ({
  children,
  variant = 'primary',
  style,
  onDismiss,
}) => {
  const isDismissible = typeof onDismiss == 'function';
  const className = `alert alert-${variant} ${isDismissible ? ' alert-dismissible' : ''} show`;
  return (
    <div
      style={style}
      className={className}
    >
      {children}
      {isDismissible && <AlertDismiss onDismiss={onDismiss} />}
    </div>
  );
};

export default memo(Alert);
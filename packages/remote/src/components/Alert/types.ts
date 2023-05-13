import { CSSProperties, MouseEventHandler, PropsWithChildren } from 'react';

export type AlertVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  | 'info' | 'light' | 'dark'

export interface AlertProps extends PropsWithChildren {
  variant?: AlertVariant
  onDismiss?: MouseEventHandler<HTMLButtonElement>
  style?: CSSProperties
}

export type AlertDismissProps = Pick<AlertProps, 'onDismiss'>
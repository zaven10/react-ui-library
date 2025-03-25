import React from 'react'

import classNames from 'classnames'

import { ISettingsItemProps } from './ISettingsRowItemProps.interface'

export const SettingsRowItem: React.FC<Partial<ISettingsItemProps>> = ({
  children,
  tooltip = false,
  label = '',
  labelClassName,
}) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2 select-none">
      <span
        className={classNames('text-sm text-app-medium-gray', labelClassName)}
      >
        {label}
      </span>
      {tooltip}
    </div>
    <div>{children}</div>
  </div>
)

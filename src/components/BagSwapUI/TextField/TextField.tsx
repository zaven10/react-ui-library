import React from 'react'

import classNames from 'classnames'

import { ITextFieldProps } from './ITextFieldProps.interface'

import { useTextField } from './useTextField.hook'

export const TextField: React.FC<Partial<ITextFieldProps>> = ({
  prepend,
  append,
  className,
  disabled,
  value,
  placeholder,
  onChange,
  readonly,
  bgColor = 'bg-app-charcoal-gray',
}) => {
  const { isFocused, setIsFocused, onClickHandler, inputRef, onInputHandler } =
    useTextField({ disabled, onChange })

  return (
    <div
      className={classNames(
        'rounded-md p-2 flex items-center text-app-white select-none transition-all',
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:bg-app-white hover:text-app-space-black focus-within:text-app-space-black focus-within:bg-app-white [&_path]:hover:fill-current [&_path]:focus-within:fill-current',
        bgColor,
        className,
      )}
      onClick={onClickHandler}
    >
      {prepend}
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        disabled={disabled || readonly}
        className={classNames(
          'bg-transparent outline-none caret-app-white text-xs min-w-16 pointer-events-none grow',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          { 'cursor-text !caret-app-space-black': isFocused },
        )}
        value={value}
        onChange={onInputHandler}
        onBlur={() => setIsFocused(false)}
      />
      {append}
    </div>
  )
}

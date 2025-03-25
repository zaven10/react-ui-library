import React from 'react'

import { useTranslation } from 'react-i18next'

import { ModalWindow } from '@ui/ModalWindow'
import { SwitchButton } from '@ui/SwitchButton'
import { TextField } from '@ui/TextField'
import { Select } from '@ui/Select'
import { SettingsRowItem } from '@ui/SettingsRowItem'
import { Grid } from '@ui/Grid'
import { Tooltip } from '@ui/Tooltip'

import { ReactComponent as PercentIcon } from '@/assets/svg/percent-icon.svg'

import { useInput, useSelect } from '@/hooks'
import { useSettingsModalWindow } from './useSettingsModalWindow.hook'

export const SettingsModalWindow: React.FC = () => {
  const { t } = useTranslation()

  const { switchButtonItems } = useSettingsModalWindow()

  const switchButtonRowMap = (item: any) => (
    <SettingsRowItem
      key={item.text}
      label={item?.text}
      tooltip={
        item?.tooltip && (
          <Tooltip
            text={
              <Grid className="text-xs text-app-space-black gap-2">
                <span>
                  Automatic risk scanning for the selected token. This scanning
                  result is for reference only, and should NOT be taken as
                  investment advice.
                </span>
                <span>
                  Provided by{' '}
                  <span className="underline cursor-pointer font-semibold">
                    HashDit
                  </span>
                </span>
                <span className="underline cursor-pointer font-semibold">
                  Learn More
                </span>
              </Grid>
            }
          />
        )
      }
    >
      <SwitchButton {...item.switchState} />
    </SettingsRowItem>
  )

  return (
    <ModalWindow
      titleChild={
        <span className="font-semibold">
          {t('NAVBAR.SETTINGS_MODAL.TITLE')}
        </span>
      }
      className="pt-2.5 right-0 top-[55px]"
      boxClass="w-[439px]"
    >
      <Grid className="gap-2.5">
        <SettingsRowItem label={t('NAVBAR.SETTINGS_MODAL.LANGUAGE')}>
          <Select
            {...useSelect()}
            className="w-[141px]"
            items={[{ text: 'English', value: 'en' }]}
          />
        </SettingsRowItem>
        <SettingsRowItem label={t('NAVBAR.SETTINGS_MODAL.DEFAULT_TX_SPEED')}>
          <Select
            {...useSelect()}
            className="w-[141px]"
            items={[
              { text: 'Standard (1)', value: 'STANDARD_1' },
              { text: 'Default (1)', value: 'DEFAULT' },
              { text: 'Fast (4)', value: 'FAST' },
              { text: 'Instant (5)', value: 'INSTANT' },
            ]}
          />
        </SettingsRowItem>
        <SettingsRowItem
          label={t('NAVBAR.SETTINGS_MODAL.SLIPPAGE_TOLERANCE')}
          tooltip
        >
          <TextField
            className="w-[141px]"
            disabled
            append={<PercentIcon className="w-[15px] h-[15px]" />}
            {...useInput(0.5)}
          />
        </SettingsRowItem>
        <SettingsRowItem
          label={t('NAVBAR.SETTINGS_MODAL.TRANSACTION_DEADLINE')}
          tooltip
        >
          <TextField
            className="w-[141px]"
            append={
              <span className="text-xs">
                {t('NAVBAR.SETTINGS_MODAL.MINUTES')}
              </span>
            }
            {...useInput(20)}
          />
        </SettingsRowItem>
        {switchButtonItems.map(switchButtonRowMap)}
      </Grid>
    </ModalWindow>
  )
}

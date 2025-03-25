import React from 'react'

import { useTranslation } from 'react-i18next'

import { OrderBox } from '@ui/OrderBox'
import { OrderBoxItem } from '@ui/OrderBoxItem'
import { BridgeOrderBoxItem } from '@ui/BridgeOrderBoxItem'
import { Tabs as TabsGroup } from '@ui/Tabs'

import { Tabs } from '@/enums'

import { useTabs } from '@/hooks'

import { TStatus } from '@ui/BridgeOrderBoxItem/IBridgeOrderBoxItemProps.interface'

export const OrderBoxByOption: React.FC = () => {
  const { t } = useTranslation()

  const { active } = useTabs()

  return (
    <>
      <TabsGroup
        items={[
          {
            text: 'Empty data',
            value: Tabs.EMPTY,
          },
          {
            text: 'Option 1',
            value: Tabs.OPTION_1,
          },
          {
            text: 'Option 2',
            value: Tabs.OPTION_2,
          },
          {
            text: 'Option 3',
            value: Tabs.OPTION_3,
          },
          {
            text: 'Bridge',
            value: Tabs.BRIDGE,
          },
        ]}
      />
      {[Tabs.OPTION_1, Tabs.OPTION_2].includes(active as Tabs) && (
        <OrderBox
          className="bg-app-midnight-blue"
          height="max-h-[210px]"
          heading={Array.from({ length: 6 }, (_, index) =>
            t(`ORDERS.BOX.TITLE.${index}`),
          )}
          headingClassName="grid-cols-6 [&>span:not(:first-child):not(:last-child)]:text-center [&>span:last-child]:text-right"
        >
          <OrderBoxItem
            coinImg="https://coin-images.coingecko.com/coins/images/30753/large/logo.jpg"
            networkImg="https://token-icons.s3.amazonaws.com/eth.png"
            marketPair="xZNN/ETH"
            currentPrice="2,462.08"
            currentPriceCoin="ETH"
            limitPrice="2,000.00"
            limitPriceCoin="ETH"
            quantity="3,421.00"
            quantityCoin="xZNN"
            progress={active === Tabs.OPTION_1 ? '100' : '0'}
            timestamp="2024-09-09T19:31:00.000Z"
            className="grid-cols-6 [&>div:not(:first-child):not(:last-child)]:justify-center [&>div:last-child]:justify-end"
          />
        </OrderBox>
      )}
      {active === Tabs.OPTION_3 && (
        <OrderBox
          className="bg-app-midnight-blue"
          height="max-h-[210px]"
          heading={Array.from({ length: 7 }, (_, index) =>
            index < 6 ? t(`ORDERS.BOX.TITLE.${index}`) : '',
          )}
          headingClassName="grid-cols-[repeat(6,_1fr),_24px] [&>span:not(:first-child):not(:nth-child(6))]:text-center [&>span:nth-child(6)]:text-right"
        >
          {Array.from({ length: 4 }, (_, index) => (
            <OrderBoxItem
              key={`order-item-${index}`}
              removable
              coinImg="https://coin-images.coingecko.com/coins/images/30753/large/logo.jpg"
              networkImg="https://token-icons.s3.amazonaws.com/eth.png"
              marketPair="xZNN/ETH"
              currentPrice="2,462.08"
              currentPriceCoin="ETH"
              limitPrice="2,000.00"
              limitPriceCoin="ETH"
              quantity="3,421.00"
              quantityCoin="xZNN"
              progress="0.00"
              timestamp="2024-09-09T19:31:00.000Z"
              className="grid-cols-6 [&>div:not(:first-child):not(:last-child)]:justify-center [&>div:last-child]:justify-end"
            />
          ))}
        </OrderBox>
      )}
      {active === Tabs.EMPTY && (
        <OrderBox isEmpty>
          <span className="text-sm text-app-medium-gray">
            Lorem ipsum text.
          </span>
        </OrderBox>
      )}
      {active === Tabs.BRIDGE && (
        <OrderBox
          className="bg-app-midnight-blue"
          height="max-h-[210px]"
          heading={['From', 'Quantity', 'To', 'Quantity', 'Status']}
          headingClassName="grid-cols-[repeat(4,_1fr)_100px] [&>span:nth-child(5)]:text-right"
        >
          {Array.from({ length: 7 }, (_, index) => {
            // ! Just for design show
            let status = 'FAILED'

            if ([0, 3].includes(index)) {
              status = 'SIGNING'
            } else if (index === 1) {
              status = 'REDEEM'
            } else if (index === 2) {
              status = 'DURATION'
            } else if (index === 4) {
              status = 'COMPLETED'
            }

            return (
              <BridgeOrderBoxItem
                key={`bridge-order-item-${index}`}
                fromCoinImg="https://coin-images.coingecko.com/coins/images/30753/large/logo.jpg"
                fromNetworkImg="https://coin-images.coingecko.com/coins/images/30753/large/logo.jpg"
                toCoinImg="https://coin-images.coingecko.com/coins/images/30753/large/logo.jpg"
                toNetworkImg="https://token-icons.s3.amazonaws.com/eth.png"
                fromCoin="ZNN"
                fromNetwork="Zenon"
                fromQuantity="333,421.00"
                toCoin="wZNN"
                toNetwork="Ethereum"
                toQuantity="333,421.00"
                status={status as TStatus}
                className="grid-cols-[repeat(4,_1fr)_100px]"
                duration={273}
              />
            )
          })}

          {/* <Grid placeItemsCenter>
                  <ButtonGroup
                    className="rounded-md"
                    bgColor="bg-app-space-black"
                    items={[
                      {
                        text: (
                          <RightArrowIcon className="w-2.5 h-[5.71px] group-hover:[&_path]:fill-app-white [&_path]:transition-all rotate-180" />
                        ),
                        className: 'w-8 !py-3',
                      },
                      {
                        text: 'Page 1 of 5',
                        className:
                          'w-[82px] !py-1.5 [&>span]:!text-xs !px-[9px] !bg-app-charcoal-gray [&>span]:text-app-white',
                      },
                      {
                        text: (
                          <RightArrowIcon className="w-2.5 h-[5.71px] group-hover:[&_path]:fill-app-white [&_path]:transition-all" />
                        ),
                        className: 'w-8 !py-3',
                      },
                    ]}
                  />
                </Grid> */}
        </OrderBox>
      )}
    </>
  )
}

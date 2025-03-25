import React, { useEffect } from 'react'

import { MainLayout } from '@/layouts'

import { useNotification } from '@/hooks'

import { DrawerProvider } from '@/contexts/Drawer'

import { TransactionStyleDrawer } from '@/components/Temp/TransactionStyleDrawer'
import { ErrorStyleDrawer } from '@/components/Temp/ErrorStyleDrawer'
import { Grid } from '@/components/BagSwapUI/Grid'

const BridgePage: React.FC = () => {
  const { setContent, setBgColor } = useNotification()

  useEffect(() => {
    setContent(
      <>
        <span className="text-app-space-black text-[13px] mr-1 inline-block">
          Bookmark https://bridge.bagswap.com and beware of scams!
        </span>
      </>,
    )

    setBgColor('bg-app-yellow [&_.close-icon_path]:fill-app-space-black')
  }, [setContent, setBgColor])

  return (
    <MainLayout>
      <DrawerProvider className="w-full">
        <Grid className="gap-5">
          <TransactionStyleDrawer />
          <ErrorStyleDrawer />
        </Grid>
      </DrawerProvider>
    </MainLayout>
  )
}

export default BridgePage

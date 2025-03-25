import React from 'react'

import { useNavigate } from 'react-router-dom'

import { MainLayout } from '@/layouts'

import { Grid } from '@ui/Grid'
import { Button } from '@ui/Button'
import { Title } from '@ui/Title'

import { ModalProvider } from '@/contexts/Modal'

import { WideStyleModalWindow } from '@/components/Temp/WideStyleModalWindow'
import { NarrowStyleModalWindow } from '@/components/Temp/NarrowStyleModalWindow'
import { MainStyleModalWindow } from '@/components/Temp/MainStyleModalWindow'

const ModalsPage: React.FC = () => {
  const $navigate = useNavigate()

  return (
    <MainLayout>
      <Grid className="gap-20">
        <Grid className="gap-5 grid-cols-2 items-center">
          <Title text="Modals" withArrow action={() => $navigate('/')} />
          <Grid className="gap-5 grid-cols-2">
            <Button
              customize="py-3 px-2.5 bg-app-baby-blue rounded-md text-sm group-hover:bg-app-white"
              action={() => $navigate('/')}
            >
              Group A
            </Button>
            <Button
              customize="py-3 px-2.5 bg-app-baby-blue rounded-md text-sm group-hover:bg-app-white"
              action={() => $navigate('/group-b')}
            >
              Group B
            </Button>
          </Grid>
        </Grid>
        <ModalProvider className="w-full">
          <Grid className="grid-cols-3 gap-5">
            <NarrowStyleModalWindow />
            <MainStyleModalWindow />
            <WideStyleModalWindow />
          </Grid>
        </ModalProvider>
      </Grid>
    </MainLayout>
  )
}

export default ModalsPage

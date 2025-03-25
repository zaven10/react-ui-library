import React from 'react'

import { useNavigate } from 'react-router-dom'

import { MainLayout } from '@/layouts'

import { Grid } from '@ui/Grid'
import { Button } from '@ui/Button'
import { Title } from '@ui/Title'
import { Container } from '@ui/Container'

import { TabsProvider } from '@/contexts/Tabs'

import { Tabs } from '@/enums'

import { GroupBFirst } from '@/components/Temp/GroupBFirst'
import { GroupBPositions } from '@/components/Temp/GroupBPositions'

const GroupBPage: React.FC = () => {
  const $navigate = useNavigate()

  return (
    <MainLayout>
      <Grid className="gap-5 grid-cols-2 items-center">
        <Title text="Group B" withArrow action={() => $navigate('/')} />
        <Grid className="gap-5 grid-cols-2">
          <Button
            customize="py-3 px-2.5 bg-app-baby-blue rounded-md text-sm group-hover:bg-app-white"
            action={() => $navigate('/')}
          >
            Group A
          </Button>
          <Button
            customize="py-3 px-2.5 bg-app-baby-blue rounded-md text-sm group-hover:bg-app-white"
            action={() => $navigate('/modals')}
          >
            Modals
          </Button>
        </Grid>
      </Grid>
      <Container className="max-w-[745px] mt-20">
        <TabsProvider initialTab={Tabs.OPTION_1}>
          <GroupBFirst />
          <GroupBPositions />
        </TabsProvider>
      </Container>
    </MainLayout>
  )
}

export default GroupBPage

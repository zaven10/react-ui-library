import React from 'react'

import { Container } from '@ui/Container'
import { Grid } from '@ui/Grid'
import { Navbar } from '@ui/Navbar'

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-app-space-black">
      <Grid className="gap-[109px]">
        <Navbar />
        <Container>{children}</Container>
      </Grid>
    </div>
  )
}

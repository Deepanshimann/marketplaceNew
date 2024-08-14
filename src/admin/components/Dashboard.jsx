import React from 'react'
import {Grid} from '@mui/material'
import AchivementTable from '../Tables/AchievementTable'
import MonthlyOverview from '../Tables/MonthlyOverview'
import OrderTableView from '../view/OrderTableVie'
import ProductTableView from '../view/ProductTableView'
const Dashboard = () => {
  return (
    <div>
<Grid container="p-10">
    <Grid item xs={12} md={4}>
<AchivementTable/>
    </Grid>
    <Grid item xs={12} md={8}>
        <MonthlyOverview/>
    </Grid>
    <Grid item xs={12} md={6}>
<ProductTableView/>
    </Grid>
    <Grid item xs={12} md={6}>
<OrderTableView/>
    </Grid>
</Grid>
    </div>
  )
}

export default Dashboard

import React from 'react'
import "./leftbar.css"
import TableViewIcon from '@mui/icons-material/TableView';
import TimelineIcon from '@mui/icons-material/Timeline';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useTheme } from '@mui/material/styles';
function LeftBar() {
  const theme = useTheme()
  return (

    <div className='bar'>
      <a href="#profitloss">
        <ThumbsUpDownIcon style={{ color: "white" }}></ThumbsUpDownIcon>

      </a>
      <a href="#kpi">
        <TableViewIcon style={{ color: "white" }}></TableViewIcon>

      </a>
      <a href="#finperform" >
        <TimelineIcon style={{ color: "white" }}></TimelineIcon>

      </a>
      <a href="#cash">
        <LocalAtmIcon style={{ color: "white" }} >

        </LocalAtmIcon>

      </a>

    </div>


  )
}

export default LeftBar
import React from 'react'
import "./leftbar.css"
import TableViewIcon from '@mui/icons-material/TableView';
import TimelineIcon from '@mui/icons-material/Timeline';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
function LeftBar() {
  return (
    <div className='container'>
      <div className='bar'>
        <a href="#profitloss">
          <ThumbsUpDownIcon></ThumbsUpDownIcon>

        </a>
        <a href="#kpi">
          <TableViewIcon color='white'></TableViewIcon>

        </a>
        <a href="#finperform" >
          <TimelineIcon color='white'></TimelineIcon>

        </a>
        <a href="#cash">
          <LocalAtmIcon >

          </LocalAtmIcon>

        </a>

      </div>

    </div >
  )
}

export default LeftBar
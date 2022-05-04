import React from 'react'
import Typography from '@mui/material/Typography';
import  Paper  from '@mui/material/Paper';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useTheme ,ThemeProvider} from '@mui/material/styles';
import { PieChart,Pie,ResponsiveContainer,FunnelChart,
        Funnel,LineChart,Line,Cell, YAxis, CartesianGrid,
        BarChart,Bar, XAxis } from 'recharts';



function FinPerformance(props) {
    const {ratiosQuarter, 
            lastRatio,
            balanceQuarter,
            lastBalanceQuarter,
            workingCapital,historicalWorkingCapital} = props.fpData 
    const theme = useTheme()
    console.log(lastBalanceQuarter)
   
    
    const currentAssets =(lastBalanceQuarter.totalcurrentassets * 100 / lastBalanceQuarter.totalassets).toString() + "%"
    const nonCurrentAssets = ((lastBalanceQuarter.totalassets - lastBalanceQuarter.totalcurrentassets) * 100 / lastBalanceQuarter.totalassets).toString() + "%"
    const currentLiab = (lastBalanceQuarter.totalcurrentliabilities * 100 / lastBalanceQuarter.totalassets).toString() + "%"
    const nonCurrentLiab = ((lastBalanceQuarter.totalliab-lastBalanceQuarter.totalcurrentliabilities) * 100 / lastBalanceQuarter.totalassets).toString() + "%"
    const equity = (lastBalanceQuarter.totalstockholderequity* 100 / lastBalanceQuarter.totalassets).toString() + "%"

    const data = [
            {name:"Total Assets",
            children:[
                {name:"Current Assets",size:lastBalanceQuarter.totalcurrentassets},
                {name:"Non Current Assets",size:lastBalanceQuarter.totalassets - lastBalanceQuarter.totalcurrentassets}
            ]},
            {name:"Total Liabilities",
            children:[
                {name:"Current Libilities",size:lastBalanceQuarter.totalcurrentliabilities},
                {name:"Non Current Liab",size:lastBalanceQuarter.totalliab-lastBalanceQuarter.totalcurrentliabilities}
            ]},
            {name:"Total Equity",size:lastBalanceQuarter.totalstockholderequity}
    ]
    return (
        <Box>
            <Typography 
                color={theme.palette.primary.contrastText}
                noWrap 
                variant={"h6"}
                sx={{flexGrow:1}} 
                marginTop={"-20px"}
            >FINANCIAL PERFOMARNCE</Typography>
            <Grid container spacing={3}>
                <Grid container item xs={12} md={6} lg={6} spacing={1}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper sx={{display:"flex",height:"40vh",
                                    flexDirection:"column",
                                    justifyContent:"space-around",
                                    alignItems:"center"}}>

                        <Typography >RETURN ON ASSETS</Typography>
                        
                        <Typography variant='h3'>{lastRatio.returnonassets * 100}%</Typography>
                        
                        <Box height={"40%"} width={"100%"}>
                            <ResponsiveContainer>
                                <BarChart data={ratiosQuarter}>
                                    <Bar barSize={20} 
                                        fill="#E79E4F"
                                        isAnimationActive={false}
                                        dataKey={"returnonassets"}>  
                                                                              
                                    </Bar>                                    
                                    <XAxis axisLine={false} tickLine={false} dataKey={"enddate"}></XAxis>
                                </BarChart>
                            </ResponsiveContainer>
                        </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper sx={{display:"flex",height:"40vh",
                                    flexDirection:"column",
                                    justifyContent:"space-around", alignItems:"center"}}>
                        <Typography >WORKING CAPITAL RATIO</Typography>
                        
                        <Typography variant='h3'>{Math.floor(lastBalanceQuarter.totalcurrentassets * 100/lastBalanceQuarter.totalcurrentliabilities)/100}:1</Typography>
                        
                        <Box height={"40%"} width={"90%"}>
                            <ResponsiveContainer>
                                <LineChart data={historicalWorkingCapital}>
                                    <Line barSize={20} 
                                        isAnimationActive={false}
                                        stroke="#E79E4F"
                                        dataKey={"workingcapital"}>                                        
                                    </Line>                                    
                                    <XAxis axisLine={false} tickLine={false} dataKey={"enddate"}></XAxis>
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper sx={{display:"flex",height:"40vh",
                                    flexDirection:"column",
                                    justifyContent:"space-around",
                                    alignItems:"center"}}>
                            <Typography >RETURN ON EQUITY</Typography>                        
                            <Typography variant='h3'>{lastRatio.returnonequity*100}%</Typography>                        
                            <Box height={"40%"} width={"90%"}>
                                <ResponsiveContainer>
                                    <LineChart data={ratiosQuarter}>
                                        <Line barSize={20} 
                                            isAnimationActive={false}
                                            stroke="#E79E4F"
                                            dataKey={"returnonassets"}>                                        
                                        </Line>                                    
                                        <XAxis axisLine={false} tickLine={false} dataKey={"enddate"}></XAxis>
                                    </LineChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper sx={{display:"flex",height:"40vh",
                                    flexDirection:"column",
                                    justifyContent:"space-around",
                                    alignItems:"center"}}>
                            <Typography >TOTAL CAPITALIZATION RATIO</Typography>                        
                            <Typography variant='h3'>{Math.round(lastRatio.totalcapitalizationratio*100)/100}:1</Typography>                            
                            <Box height={"40%"} width={"100%"}>
                                <ResponsiveContainer>
                                    <BarChart data={ratiosQuarter}>
                                        <Bar barSize={20} 
                                            fill="#E79E4F"
                                            isAnimationActive={false}
                                            dataKey={"totalcapitalizationratio"}>                                                                               
                                        </Bar>                                    
                                        <XAxis axisLine={false} tickLine={false} dataKey={"enddate"}></XAxis>
                                    </BarChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item  xs={12} md={6} lg={6} spacing={1}>
                    <Paper sx={{display:"flex",height:"81vh",
                                    flexDirection:"column",
                                    justifyContent:"space-around",
                                    alignItems:"center"
                                    }}>
                        <Typography>BALANCE SHEET</Typography>
                        <Grid container xs={11} md={11} lg={11} spacing={1}>
                            <Grid item container xs={6} md={6} lg={6} >                                
                                    <Box sx={{height: currentAssets,width:"100%", background:"#9597E4",
                                    display:"flex",justifyContent:"center",
                                    flexDirection:"column",alignItems:"center"}}>
                                        <Typography>CURRENT ASSETS</Typography>
                                        
                                        <Typography variant="h4">{100 - parseInt(nonCurrentAssets)}%</Typography>
                                    </Box>
                                    <Box sx={{height:nonCurrentAssets,width:"100%", background:"#8889DD",
                                    display:"flex",justifyContent:"center",
                                    flexDirection:"column",alignItems:"center",
                                    }}>
                                        <Typography>NON CURRENT ASSETS</Typography>
                                        <Typography variant='h4'>{parseInt(nonCurrentAssets)}%</Typography>
                                    </Box>                         
                            </Grid>                        
                            <Grid item container xs={6} md={6} lg={6}>
                                
                                    <Box sx={{height:currentLiab,width:"100%",background:"#f9cd56",
                                            display:"flex",justifyContent:"center",
                                            flexDirection:"column",alignItems:"center"}}>
                                        <Typography>CURRENT LIABILITIES</Typography>
                                        <Typography variant='h4'>{parseInt(currentLiab)}%</Typography>
                                    </Box>
                                    <Box sx={{height:nonCurrentLiab,width:"100%",background:"#F8C12D",
                                    display:"flex",justifyContent:"center",
                                    flexDirection:"column",alignItems:"center"}}>
                                        <Typography>NON CURRENT LIABILITIES</Typography>
                                        <Typography variant='h4'>{parseInt(nonCurrentLiab)}%</Typography>
                                    </Box>
                                
                                    <Box sx={{height:equity,width:"100%",background:"#8DC77B",
                                    display:"flex",justifyContent:"center",
                                    flexDirection:"column",alignItems:"center"}}>
                                        <Typography>EQUITY</Typography>
                                        <Typography variant='h4'>{parseInt(equity)}%</Typography>
                                    </Box>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    )
}

export default FinPerformance

                        // <ResponsiveContainer>
                        //     <Treemap width={"100%"} height={"90%"} data={data} 
                        //             dataKey="size" stroke="white" fill="#8884d8" aspectRatio={8/4}
                        //             content={<CustomizedContent colors={COLORS}/>}>
                        //                 <Tooltip/>
                                
                        //     </Treemap>

                        // </ResponsiveContainer>

/* <TableContainer>
    <Table >
        <TableRow sx={{background:"#E79E4F"}}>
            <TableCell  >TOTAL ASSETS</TableCell>
            <TableCell align="right" width={"30%"}>{lastBalanceQuarter.totalassets}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Current Assets</TableCell>
            <TableCell>{lastBalanceQuarter.totalcurrentassets}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell align='center'>Cash</TableCell>
            <TableCell>{lastBalanceQuarter.cash}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell align='center'>Account Receivables</TableCell>
            <TableCell>{lastBalanceQuarter.netreceivables}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell align='center'>Inventory</TableCell>
            <TableCell>{lastBalanceQuarter.inventory}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell >Other current assets</TableCell>
            <TableCell>{lastBalanceQuarter.othercurrentassets}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell >Long Term Assets</TableCell>
            <TableCell>{lastBalanceQuarter.totalassets-lastBalanceQuarter.totalcurrentassets}</TableCell>
        </TableRow>
        <TableRow sx={{background:"#E79E4F"}}>
            <TableCell>TOTAL LIABILITIES</TableCell>
            <TableCell>{lastBalanceQuarter.totalliab}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Current Liabilities</TableCell>
            <TableCell>{lastBalanceQuarter.totalcurrentliabilities}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Accounts Payable</TableCell>
            <TableCell>{lastBalanceQuarter.accountspayable}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Accounts Payable</TableCell>
            <TableCell>{lastBalanceQuarter.accountspayable}</TableCell>
        </TableRow>
    </Table>
</TableContainer> */
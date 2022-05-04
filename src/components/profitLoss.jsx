import React from 'react'
import Typography from '@mui/material/Typography';
import  Paper  from '@mui/material/Paper';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { Divider } from '@material-ui/core';
import { useTheme ,ThemeProvider} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { PieChart,Pie,ResponsiveContainer,FunnelChart,Funnel,LineChart,Line,Cell, YAxis, CartesianGrid,BarChart,Bar, XAxis } from 'recharts';


function ProfitLoss(props) {
    const {
      lastIncomeQuarter,
      lastRatio,
      lastOpex,
      incomeQuarter
    } = props.plData
    const theme = useTheme()

    const funnelData = [
  {
    "value": lastIncomeQuarter.totalrevenue,
    "fill": "#8884d8",
    "name": "Total Revenue"
  },
  {
    "value": lastIncomeQuarter.grossprofit,
    "name": "Gross Profit",
    "fill": "#83a6ed"
  },
  {
    "value": lastIncomeQuarter.ebit,
    "name": "EBIT",
    "fill": "#8dd1e1"
  },
  {
    "value": lastIncomeQuarter.netincome,
    "name": "Net Income",
    "fill": "#82ca9d"
  },

]
    return (
        <Box>
            <Typography              
              variant={"h6"}
              
              sx={{ flexGrow: 1 }}
            marginTop={"-20px"}
            color={theme.palette.primary.contrastText}>PROFIT AND LOSS</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3} lg={3} direction="column" spacing={2}>
                    <Paper sx={{height:"20vh", display:"flex",flexDirection:"column",justifyContent:"space-around", alignItems:"center", paddingBottom:"5%"}}>
                        <Box width={"100%"} height={"90%"} >
                            <ResponsiveContainer>
                                <PieChart  >
                                    <Pie data={[{value:lastRatio.grossmargin},{value:(1-lastRatio.grossmargin)}]}
                                     innerRadius={"70%"} outerRadius={"90%"}
                                      stroke='#8884d8' paddingAngle={5}
                                      isAnimationActive={false}
                                     dataKey="value" startAngle={225} endAngle={-45}>
                                         <Cell fill='#8884d8'></Cell>
                                         <Cell fill={theme.palette.primary.main} stroke='#8884d8' strokeDasharray={"2 6"}></Cell>
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>

                        </Box>
                        <Typography>GROSS PROFIT MARGIN</Typography>
 
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3} lg={3} direction="column" spacing={2}>
                    <Paper sx={{height:"20vh", display:"flex",flexDirection:"column",justifyContent:"space-around", alignItems:"center", paddingBottom:"5%"}}>
                        <Box width={"100%"} height={"90%"} >
                            <ResponsiveContainer>
                                <PieChart  >
                                    <Pie data={[{value:lastOpex},{value:(1-lastOpex)}]}
                                     innerRadius={"70%"} outerRadius={"90%"}
                                      stroke='#E79E4F' paddingAngle={5}
                                      isAnimationActive={false}
                                     dataKey="value" startAngle={225} endAngle={-45}>
                                         <Cell fill='#E79E4F'></Cell>
                                         <Cell fill={theme.palette.primary.main} stroke='#E79E4F' strokeDasharray={"2 6"}></Cell>
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>

                        </Box>
                        <Typography>OPEX RATIO</Typography>
 
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3} lg={3} direction="column" spacing={2}>
                    <Paper sx={{height:"20vh", display:"flex",flexDirection:"column",justifyContent:"space-around", alignItems:"center", paddingBottom:"5%"}}>
                        <Box width={"100%"} height={"90%"} >
                            <ResponsiveContainer>
                                <PieChart  >
                                    <Pie data={[{value:lastRatio.operativemargin},{value:(1-lastRatio.operativemargin)}]}
                                     innerRadius={"70%"} outerRadius={"90%"}
                                      stroke="#8dd1e1" paddingAngle={5}
                                      isAnimationActive={false}
                                     dataKey="value" startAngle={225} endAngle={-45}>
                                         <Cell fill='#8dd1e1'></Cell>
                                         <Cell fill={theme.palette.primary.main} stroke='#8dd1e1' strokeDasharray={"2 6"}></Cell>
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>

                        </Box>
                        <Typography>OPERATING PROFIT MARGIN</Typography>
 
                    </Paper>
                </Grid>
                <Grid item xs={12} md={3} lg={3} direction="column" spacing={2}>
                    <Paper sx={{height:"20vh", display:"flex",flexDirection:"column",justifyContent:"space-around", alignItems:"center", paddingBottom:"5%"}}>
                        <Box width={"100%"} height={"90%"} >
                            <ResponsiveContainer>
                                <PieChart  >
                                    <Pie data={[{value:lastRatio.netmargin},{value:(1-lastRatio.netmargin)}]}
                                     innerRadius={"70%"} outerRadius={"90%"}
                                      stroke="#82ca9d" paddingAngle={5}
                                     dataKey="value" startAngle={225} endAngle={-45}
                                     isAnimationActive={false}
                                     >
                                         <Cell fill='#82ca9d'></Cell>
                                         <Cell fill={theme.palette.primary.main} stroke='#82ca9d' strokeDasharray={"2 6"}></Cell>
                                    </Pie>
                                    <Typography>0.86</Typography>
                                </PieChart>
                            </ResponsiveContainer>

                        </Box>
                        <Typography>NET PROFIT MARGIN</Typography>
 
                    </Paper>
                </Grid>
                <Grid item container xs={12} md={4} lg={4} spacing={2}>
                    <Grid item xs={12} md={12} lg={12}  >
                        <Paper sx={{height:"26.5vh", paddingLeft:"2%"}}>
                        <Box sx={{height:"100%", width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                <Typography>OPEX</Typography>
                                <ResponsiveContainer height={"100%"}>
                                    <BarChart data={incomeQuarter}>
                                        <YAxis axisLine={false} tickLine={false} domain={[dataMin => 0.95 * dataMin, dataMax => 1.05 * dataMax]}/>
                                        <XAxis dataKey={"enddate"} tickLine={false} axisLine={false}/>
                                        <CartesianGrid strokeDasharray="1 5"/>
                                        <Bar dataKey={"totaloperatingexpenses"} barSize={20} fill='#E79E4F' isAnimationActive={false}></Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                        </Box>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper sx={{height:"26.5vh"}}>
                            <Box sx={{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                                <Typography>EBIT</Typography>
                                <ResponsiveContainer>
                                    <BarChart data={incomeQuarter}>
                                        <YAxis axisLine={false} tickLine={false} domain={[dataMin => 0.95 * dataMin, dataMax => 1.05 * dataMax]}/>
                                        <XAxis dataKey={"enddate"} tickLine={false} axisLine={false}/>
                                        <CartesianGrid strokeDasharray="1 5"/>
                                        <Bar dataKey={"ebit"} barSize={20} fill='#8dd1e1'isAnimationActive={false}></Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </Box>
                        
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper sx={{height:"55vh"}}>
                        <Box  sx={{display:"flex",flexDirection:"column",justifyContent:"center", height:"100%"}}>
                            <ResponsiveContainer height={"90%"}>
                                <FunnelChart>
                                    <Funnel data={funnelData} dataKey="value" isAnimationActive={false}>
                                    </Funnel>
                                </FunnelChart>
                            </ResponsiveContainer>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper sx={{height:"55vh", display:"flex", flexDirection:"column",justifyContent:"center",paddingLeft:"5%",paddingRight:"5%"}}>
                        <TableContainer>
                            <Table>
                               
                                    <TableRow sx={{background:"#8884d8"}}>
                                        <TableCell>TOTAL REVENUE</TableCell>
                                        <TableCell>{lastIncomeQuarter.totalrevenue}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>COST OF REVENUE</TableCell>
                                        <TableCell>{lastIncomeQuarter.costofrevenue}</TableCell>
                                    </TableRow>
                                    
                                    <TableRow sx={{background:"#83a6ed"}}>
                                        <TableCell>GROS PROFIT</TableCell>
                                        <TableCell>{lastIncomeQuarter.grossprofit}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>OPEX</TableCell>
                                        <TableCell>{lastIncomeQuarter.totaloperatingexpenses}</TableCell>
                                    </TableRow>
                                    <TableRow sx={{background:"#8dd1e1"}}>
                                        <TableCell>EBIT</TableCell>
                                        <TableCell>{lastIncomeQuarter.ebit}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>EXPENSES</TableCell>
                                        <TableCell>{-lastIncomeQuarter.totalotherincomeexpensenet}</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>TAXES</TableCell>
                                        <TableCell>{lastIncomeQuarter.incometaxexpense}</TableCell>
                                    </TableRow>

                                    <TableRow sx={{background:"#82ca9d"}}>
                                        <TableCell>NET INCOME</TableCell>
                                        <TableCell>{lastIncomeQuarter.netincome}</TableCell>
                                    </TableRow>
                                    
                               
                            </Table>
                        </TableContainer>
                    
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProfitLoss

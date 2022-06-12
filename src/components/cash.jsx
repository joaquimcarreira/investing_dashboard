import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import { useTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

import TableRow from '@mui/material/TableRow';
import { LineChart, Line, XAxis, YAxis, BarChart, ResponsiveContainer, CartesianGrid, Bar } from 'recharts';
import { Table } from '@mui/material';



function CashFlow(props) {
    const { lastCurrentRatio,
        lastAcidRatio,
        cashBalance,
        cashOperations,
        cashInvested,
        cashFinancing,
        ratiosQuarter,
        balanceQuarter,
        cashQuarter,
        daySalesOutstanding,
        daysInventoryOutstanding,
        daysPayablesOutstanding,
        daysOutstandingQuarter } = props.cashData
    const theme = useTheme()


    return (
        <div style={{ height: "100%", maxWidth: "1168px", paddingTop: "40px" }} id="cash">
            <Box>
                <Typography
                    noWrap
                    variant={"h6"}
                    sx={{ flexGrow: 1 }}

                    color={theme.palette.primary.contrastText}
                >
                    CASH MANAGEMENT DASHBOARD
                </Typography>
                <Grid container spacing={2} >
                    <Grid item xs={12} md={5} lg={5} spacing={1} direction="column"  >
                        <Paper
                            sx={{
                                display: 'flex',
                                height: "280px",
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                        >
                            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-around", width: "80%", height: "100%" }}>
                                <Box sx={{ display: "flex", flexDirection: "row", justifiContent: "space-around", height: "30%" }}>
                                    <Box sx={{ display: "flex", width: "50%", flexDirection: "column" }} >
                                        <Typography >ACID RATIO</Typography>
                                        <Typography variant='h2'>{lastAcidRatio}</Typography>
                                    </Box >
                                    <Box width={"50%"}>
                                        <ResponsiveContainer >
                                            <LineChart data={ratiosQuarter}>
                                                <Line dataKey="acidratio" stroke="#E79E4F" fill="#E79E4F" isAnimationActive={false} strokeWidth={2} ></Line>
                                                <YAxis domain={["dataMin", "dataMax"]} hide={true} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "row", justifiContent: "space-around", height: "30%" }}>
                                    <Box sx={{ display: "flex", width: "50%", flexDirection: "column" }} >
                                        <Typography >CURRENT RATIO</Typography>
                                        <Typography variant='h2'>{lastCurrentRatio}</Typography>
                                    </Box >
                                    <Box width={"50%"}>
                                        <ResponsiveContainer >
                                            <LineChart data={ratiosQuarter}>
                                                <Line dataKey="currentratio" type="monotone" stroke="#E79E4F" fill="#E79E4F" isAnimationActive={false} strokeWidth={2}></Line>
                                                <YAxis domain={["dataMin", "dataMax"]} hide={true} />

                                            </LineChart>
                                        </ResponsiveContainer>
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={7} lg={7}>
                        <Paper
                            sx={{

                                display: 'flex',
                                flexDirection: 'row',
                                height: "280px",
                                alignItems: "center",
                                justifyContent: "space-around",
                            }}
                        >
                            <Box sx={{ width: "40%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
                                <Typography variant="h5" > CASH BALANCE</Typography>
                                <Typography variant="h4">${cashBalance}</Typography>
                                <Box justifyContent="flex-start">
                                    <TableContainer>
                                        <Table size='small'>
                                            <TableRow >
                                                <TableCell sx={{ color: "white", fontSize: "15px" }} >Operations:</TableCell>
                                                <TableCell sx={{ color: "white", fontSize: "px" }}>{cashOperations}</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell sx={{ color: "white", fontSize: "15px" }} >Invested:</TableCell>
                                                <TableCell sx={{ color: "white", fontSize: "15px" }}>{cashInvested}</TableCell>
                                            </TableRow>
                                            <TableRow >
                                                <TableCell sx={{ color: "white", fontSize: "15px" }} >Financing:</TableCell>
                                                <TableCell sx={{ color: "white", fontSize: "15px" }}>{cashFinancing}</TableCell>
                                            </TableRow>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box>
                            <Box width="60%" height="90%" >
                                <Typography textAlign="center" >CHANGE IN CASH</Typography>
                                <ResponsiveContainer>
                                    <BarChart data={cashQuarter}>
                                        <XAxis dataKey="enddate" axisLine={false} tickLine={false} />
                                        <YAxis dataKey="changeincash" axisLine={false} tickLine={false} domain={['auto', 'auto']} />
                                        <Bar dataKey="changeincash" type="monotone" isAnimationActive={false} fill="#E79E4F" barSize={40}></Bar>
                                        <CartesianGrid strokeDasharray="1 7" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={4}>
                        <Paper sx={{ p: 1, display: 'flex', height: "40vh", flexDirection: 'column', justifyContent: "space-around", alignItems: "center" }} >
                            <Box display="flex" flexDirection="column" justifyContent={"space-around"} >
                                <Typography >DAYS SALES OUTSTANDING</Typography>
                                <Typography textAlign={"center"} variant="h3">{daySalesOutstanding}</Typography>
                            </Box>
                            <Box height={"60%"} width={"100%"}>
                                <ResponsiveContainer >
                                    <BarChart data={daysOutstandingQuarter}>
                                        <XAxis dataKey="enddate" axisLine={false} tickLine={false} />
                                        <YAxis dataKey="dayssalesouts" axisLine={false} tickLine={false} domain={[dataMin => 0.97 * dataMin, dataMax => 1.02 * dataMax]}
                                            tickMargin={4} allowDecimals={false} angle={-30} />
                                        <Bar dataKey={"dayssalesouts"} barSize={20} fill="#E79E4F" isAnimationActive={false}></Bar>
                                        <CartesianGrid strokeDasharray="1 7" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper sx={{ p: 1, display: 'flex', flexDirection: 'column', height: "40vh", justifyContent: "center" }} >
                            <Box sx={{ height: "30%", display: 'flex', flexDirection: 'column', justifyContent: "space-evenly" }}>
                                <Typography textAlign="center">DAYS INVENTORY OUTSTANDING</Typography>
                                <Typography variant="h3" textAlign="center"> {daysInventoryOutstanding}</Typography>
                            </Box>
                            <Typography textAlign="center" variant='body2' >INVENTORY</Typography>
                            <Box width="100%" height="60%" >
                                <ResponsiveContainer>
                                    <LineChart data={balanceQuarter} >
                                        <YAxis dataKey="inventory" domain={["dataMin", "dataMax"]} tickMargin={4} axisLine={false} tickLine={false} padding={{ bottom: 20 }} angle={-30} />
                                        <XAxis dataKey="enddate" label={{ value: "INVENTORY", position: 'top' }} axisLine={false} tickLine={false} />
                                        <Line dataKey="inventory" type="monotone" isAnimationActive={false} stroke="#E79E4F" ></Line>
                                        <CartesianGrid strokeDasharray="1 7" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper sx={{ p: 1, display: 'flex', height: "40vh", flexDirection: 'column', justifyContent: "space-around", alignItems: "center" }} >
                            <Box display="flex" flexDirection="column" justifyContent={"space-around"} >
                                <Typography >DAYS PAYABLE OUTSTANDING</Typography>
                                <Typography textAlign={"center"} variant="h3">{-daysPayablesOutstanding}</Typography>
                            </Box>
                            <Box height={"60%"} width={"100%"}>
                                <ResponsiveContainer >
                                    <BarChart data={daysOutstandingQuarter}>
                                        <XAxis dataKey="enddate" axisLine={false} tickLine={false} />
                                        <YAxis dataKey="dayspayouts" axisLine={false} tickLine={false} domain={[dataMin => 0.5 * dataMin, dataMax => 1.5 * dataMax]}
                                            tickMargin={4} allowDecimals={false} angle={-30} />
                                        <Bar dataKey={"dayspayouts"} barSize={20} fill="#E79E4F" isAnimationActive={false}></Bar>
                                        <CartesianGrid strokeDasharray="1 7" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Box>

                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Typography
                variant="body2"
                color={theme.palette.primary.contrastText}
                align="center"
                marginTop="20px"
                {...props}
            >
                {"Copyright © Joaquim Carreira "}

                {new Date().getFullYear()}
                {"."}
            </Typography>

        </div>

    )
}

export default CashFlow;

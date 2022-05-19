import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Line, Area, XAxis, YAxis, Bar, ResponsiveContainer, ReferenceLine, Tooltip, CartesianGrid, ComposedChart, LabelList, Label, LineChart } from 'recharts';





function Kpi(props) {
    const {
        currentAssets,
        cash,
        inventory,
        netReceivable,
        otherCurrentAssets,
        accountsPayable,
        shortTermDebt,
        currentLiab,
        otherCurrentLiab,
        daysOutstandingYear,
        workingCapital,
        historicalWorkingCapital
    } = props.kpiData

    const toPercent = (decimal, fixed = 0) => `${Math.round((decimal * 100).toFixed(fixed))}%`;

    const getPercent = (value, total) => {
        const ratio = total > 0 ? value / total : 0;

        return toPercent(ratio, 2);
    };

    const renderTooltipContent = (o) => {
        const { payload, label } = o;
        const total = payload.reduce((result, entry) => result + entry.value, 0);

        return (
            <div className="customized-tooltip-content">
                <p className="total">{`${label} (Total: ${total})`}</p>
                <ul className="list">
                    {payload.map((entry, index) => (
                        <li key={`item-${index}`} style={{ color: entry.color }}>
                            {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const getLastItem = (data) => {
        if (data !== "undefined") {
            console.log(data)
            return data.slice(-1)[0]
        }
        else {
            setTimeout(getLastItem, 250)
        }
    }

    const getRange = () => {
        const min = daysOutstandingYear.reduce(function (a, b) {
            return a.dayspayouts < b.dayspayouts ? a.dayspayouts : b.dayspayouts
        })
        const max = daysOutstandingYear.reduce(function (a, b) {
            return (a.daysinvtouts + a.dayssalesouts) > (b.daysinvtouts + b.dayssalesouts) ? (a.daysinvtouts + a.dayssalesouts) : (b.daysinvtouts + b.dayssalesouts)
        })
        return [min, max]

    }
    return (
        <Box>
            <Typography
                color={"rgba(0,0,0,0.5)"}
                noWrap
                variant={"h6"}
                sx={{ flexGrow: 1 }}
                marginTop={"-20px"}
            >
                FINANCIAL KPI DASHBOARD
            </Typography>
            <Grid container spacing={3} >
                <Grid item xs={12} md={5} lg={5} spacing={1} direction="column">
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: "75vh"
                        }}
                    >
                        <TableContainer>
                            <Table>
                                <TableHead sx={{ background: "#8884d8" }} >
                                    <TableRow >
                                        <TableCell sx={{ color: "white", fontSize: "20px" }} >Current Assets</TableCell>
                                        <TableCell sx={{ color: "white", fontSize: "20px" }}>{currentAssets}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: "15px" }}>Cash</TableCell>
                                    <TableCell sx={{ fontSize: "15px" }}>{cash}</TableCell>
                                </TableRow>
                                <TableRow>

                                    <TableCell sx={{ fontSize: "15px" }}>Inventory</TableCell>
                                    <TableCell sx={{ fontSize: "15px" }}>{inventory}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontSize: "15px" }}>Accounts Recievable</TableCell>
                                    <TableCell sx={{ fontSize: "15px" }}>{netReceivable}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontSize: "15px" }}>Other Current Assets</TableCell>
                                    <TableCell sx={{ fontSize: "15px" }}>{otherCurrentAssets}</TableCell>
                                </TableRow>
                                <TableRow sx={{ textAlign: "center", color: "gray" }}><Typography variant='h3' >-</Typography></TableRow>
                                <TableHead sx={{ background: "#adabe4" }} >
                                    <TableRow >
                                        <TableCell sx={{ color: "white", fontSize: "20px" }}>Current Liabilities</TableCell>
                                        <TableCell sx={{ color: "white", fontSize: "20px" }}>{currentLiab}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontSize: "15px" }}>Accounts Payable</TableCell>
                                    <TableCell sx={{ fontSize: "15px" }}>{accountsPayable}</TableCell>
                                </TableRow>
                                <TableRow>

                                    <TableCell sx={{ fontSize: "15px" }}>Short Term Debt</TableCell>
                                    <TableCell sx={{ fontSize: "15px" }}>{shortTermDebt}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell sx={{ fontSize: "15px" }}>Other Liabilities</TableCell>
                                    <TableCell sx={{ fontSize: "15px" }}>{otherCurrentLiab}</TableCell>
                                </TableRow>

                                <TableRow sx={{ textAlign: "center", color: "gray" }}><Typography variant='h3' >=</Typography></TableRow>
                            </Table>

                            <Table>
                                <TableHead sx={{ background: "#c0beea" }}>
                                    <TableRow>
                                        <TableCell sx={{ fontSize: "20px", color: "white" }}>Working Capital</TableCell>
                                        <TableCell sx={{ fontSize: "20px", color: "white" }}>{workingCapital}</TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={7} lg={7} container spacing={3}>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: "35vh",
                                alignItems: "center"
                            }}
                        >
                            <Box sx={{ display: "flex", height: "30%", width: "100%", alignItems: "center", flexDirection: "row", justifyContent: "space-around" }} >
                                <Box sx={{ height: "70%", width: "15%", backgroundColor: "#ffc658", flexDirection: "column", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Typography>{getLastItem(daysOutstandingYear).dayssalesouts}</Typography>
                                    <Typography>DSO</Typography>
                                </Box>
                                <Typography variant='h6'>+</Typography>
                                <Box sx={{ height: "70%", width: "15%", backgroundColor: "#8884d8", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                    <Typography>{getLastItem(daysOutstandingYear).daysinvtouts}</Typography>
                                    <Typography>DIO</Typography>
                                </Box>
                                <Typography variant='h6'>-</Typography>
                                <Box sx={{ height: "70%", width: "15%", backgroundColor: "#82ca9d", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                    <Typography>{-getLastItem(daysOutstandingYear).dayspayouts}</Typography>
                                    <Typography>DSO</Typography>
                                </Box>
                                <Typography variant='h6'>=</Typography>
                                <Box sx={{ height: "70%", width: "15%", backgroundColor: "#7D0633", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                    <Typography>{getLastItem(daysOutstandingYear).ccc}</Typography>
                                    <Typography>CCC</Typography>
                                </Box>
                            </Box>
                            <Box height={"70%"} width={"90%"} >
                                <ResponsiveContainer>
                                    <ComposedChart data={daysOutstandingYear} barCategoryGap={"15%"} stackOffset='sign' >
                                        <XAxis dataKey="enddate" tickLine={false} axisLine={false} />
                                        <YAxis yAxisId="left" dataKey={"daysinvtouts"} padding={{ bottom: 10 }} domain={[getRange()[0], getRange()[1]]} axisLine={false} tickLine={false} >
                                            <Label angle={-90} fill="gray" fontSize={"13"} value={"DSO | DIO | DPO"} />
                                        </YAxis>
                                        <ReferenceLine yAxisId={"left"} y={0}></ReferenceLine>
                                        <Bar dataKey="daysinvtouts" yAxisId="left" stackId="1" stroke="#8884d8" fill="#8884d8" isAnimationActive={false}><LabelList dataKey="daysinvtouts" fill='white' /></Bar>
                                        <Bar dataKey="dayspayouts" yAxisId="left" stackId="1" stroke="#82ca9d" fill="#82ca9d" isAnimationActive={false} ><LabelList dataKey="dayspayouts" fill='white' /></Bar>
                                        <Bar dataKey="dayssalesouts" yAxisId="left" stackId="1" stroke="#ffc658" fill="#ffc658" isAnimationActive={false}><LabelList dataKey="dayssalesouts" fill='white' /></Bar>
                                        <YAxis yAxisId="right" dataKey={"ccc"} orientation="right" padding={{ bottom: 15 }} axisLine={false} isAnimationActive={false} tickLine={false}>
                                            <Label angle={90} fill="gray" fontSize={"13"} value={"CCC"} />
                                        </YAxis>
                                        <Line dataKey="ccc" yAxisId="right" stroke='#7D0633' isAnimationActive={false} strokeWidth={3}></Line>

                                    </ComposedChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: "30vh",
                                alignContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Typography>WORKING CAPITAL</Typography>
                            <Box height={"100%"} width={"95%"}>
                                <ResponsiveContainer>
                                    <LineChart data={historicalWorkingCapital}>
                                        <CartesianGrid strokeDasharray="1 5" />
                                        <XAxis dataKey="enddate" axisLine={false} tickLine={false} tickMargin={10}></XAxis>
                                        <YAxis domain={["dataMin", "dataMax"]} axisLine={false} tickLine={false} tickMargin={10} fontSize={15} ></YAxis>
                                        <Line dataKey="workingcapital" isAnimationActive={false}></Line>
                                    </LineChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Box>

    )
}

export default Kpi;
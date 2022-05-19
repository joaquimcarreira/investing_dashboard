import Drawer from "./components/drawer";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material/Box";
import ToolBar from "@mui/material/Toolbar";
import CashFlow from "./components/cash";
import Kpi from "./components/kpi";
import ProfitLoss from "./components/profitLoss";
import FinPerformance from "./components/finPerformance";
import TopBar from "./components/appBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
}));

function Copyright(props) {
  return (
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
  );
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    height: "100%",
    backgroundColor: theme.palette.primary.dark,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

function App(props) {
  const [tickers, setTickers] = useState([]);
  const [open, setOpen] = useState(true);
  const [balance, setBalance] = useState({});
  const [cashFlow, setCashFlow] = useState({});
  const [income, setIncome] = useState({});
  const [ratios, setRatios] = useState({});
  const [cashData, setCashData] = useState({});
  const [kpiData, setKpiData] = useState({});
  const [plData, setplData] = useState({});
  const [fpData, setFpData] = useState({});
  const [inputTicker, setInputTicker] = useState("");
  const classes = useStyles();

  const inputToTicker = (inputData) => {
    setInputTicker(inputData);
    console.log(inputTicker);
  };

  useEffect(() => {
    // const sortBydates = (a, b) => {
    //   return new Date(b.enddate) - new Date(a.enddate);
    // };
    const transformDateFormat = (obj) => {
      const date = new Date(obj.enddate);
      const month = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ][date.getMonth()];
      obj.enddate = month + " " + date.getFullYear();
      return obj;
    };
    fetch("http://127.0.0.1:8000/indicator/" + inputTicker)
      .then((response) => response.json())
      .then((data) => {
        setRatios(
          data
            .sort((a, b) => {
              return new Date(a.enddate) - new Date(b.enddate);
            })
            .map(transformDateFormat)
        );
      });
    fetch("http://127.0.0.1:8000/tickers").then((response) =>
      response.json().then((data) => setTickers(data))
    );
    fetch("http://127.0.0.1:8000/income/" + inputTicker)
      .then((response) => response.json())
      .then((data) =>
        setIncome(
          data
            .sort((a, b) => {
              return new Date(a.enddate) - new Date(b.enddate);
            })
            .map(transformDateFormat)
        )
      );
    fetch("http://127.0.0.1:8000/cashflow/" + inputTicker)
      .then((response) => response.json())
      .then((data) =>
        setCashFlow(
          data
            .sort((a, b) => {
              return new Date(a.enddate) - new Date(b.enddate);
            })
            .map(transformDateFormat)
        )
      );
    fetch("http://127.0.0.1:8000/balance/" + inputTicker)
      .then((response) => response.json())
      .then((data) =>
        setBalance(
          data
            .sort((a, b) => {
              return new Date(a.enddate) - new Date(b.enddate);
            })
            .map(transformDateFormat)
        )
      );
  }, [inputTicker]);

  // async function proccesData() {
  //   const addAvgtoBalances = (listOfBalances) => {
  //     for (let i = 1; i < listOfBalances.length; i++) {
  //       listOfBalances[i].avginventory =
  //         (listOfBalances[i].inventory + listOfBalances[i - 1].inventory) / 2;
  //       listOfBalances[i].avgpayable =
  //         (listOfBalances[i].accountspayable +
  //           listOfBalances[i - 1].accountspayable) /
  //         2;
  //       listOfBalances[i].avgnetreceivable =
  //         (listOfBalances[i].netreceivables +
  //           listOfBalances[i - 1].netreceivables) /
  //         2;
  //     }

  //     return listOfBalances;
  //   };
  //   const balanceQuarter = addAvgtoBalances(selectPeriod(balance, "Q"));
  //   const balanceYear = addAvgtoBalances(selectPeriod(balance, "FY"));
  //   const cashQuarter = selectPeriod(cashFlow, "Q");
  //   const incomeQuarter = selectPeriod(income, "Q");
  //   const incomeYear = selectPeriod(income, "FY");
  //   const ratiosQuarter = selectPeriod(ratios, "Q");

  //   console.log(ratiosQuarter);
  //   const lastCurrentRatio = getLast(ratiosQuarter).currentratio;
  //   const lastAcidRatio = getLast(ratiosQuarter).acidratio;
  //   const cashBalance =
  //     getLast(cashQuarter).totalcashfromoperatingactivities +
  //     getLast(cashQuarter).totalcashflowsfrominvestingactivities +
  //     getLast(cashQuarter).totalcashfromfinancingactivities;
  //   const cashOperations =
  //     getLast(cashQuarter).totalcashfromoperatingactivities;
  //   const cashInvested =
  //     getLast(cashQuarter).totalcashflowsfrominvestingactivities;
  //   const cashFinancing = getLast(cashQuarter).totalcashfromfinancingactivities;

  //   const daysOuts = (data1, data2, Q = true) => {
  //     var daysOutsList = [];
  //     let days = 90;
  //     if (Q === false) {
  //       days = 365;
  //     }
  //     if (data1 !== "undifined" || data2 !== "undifined") {
  //       for (let i = 1; i < data1.length; i++) {
  //         const daySales = Math.round(
  //           data1[i].avgnetreceivable / (data2[i].totalrevenue / days)
  //         );
  //         const daysInv = Math.round(
  //           (data1[i].avginventory / data2[i].costofrevenue) * days
  //         );
  //         const daysPay = Math.round(
  //           data1[i].avgpayable / (data2[i].totalrevenue / days)
  //         );
  //         const ccc = daySales + daysInv - daysPay;

  //         daysOutsList.push({
  //           enddate: data1[i].enddate,
  //           daysinvtouts: daysInv,
  //           dayssalesouts: daySales,
  //           dayspayouts: -daysPay,
  //           ccc: ccc,
  //         });
  //       }
  //     } else {
  //       setTimeout(daysOuts, 250);
  //     }

  //     return daysOutsList;
  //   };
  //   const daysOutstandingQuarter = daysOuts(balanceQuarter, incomeQuarter);
  //   const daysOutstandingYear = daysOuts(balanceYear, incomeYear, false);
  //   const daySalesOutstanding = getLast(daysOutstandingQuarter).dayssalesouts;
  //   const daysInventoryOutstanding = getLast(
  //     daysOutstandingQuarter
  //   ).daysinvtouts;

  //   const daysPayablesOutstanding = getLast(daysOutstandingQuarter).dayspayouts;

  //   setCashData({
  //     lastCurrentRatio,
  //     lastAcidRatio,
  //     cashBalance,
  //     cashOperations,
  //     cashInvested,
  //     cashFinancing,
  //     ratiosQuarter,
  //     balanceQuarter,
  //     cashQuarter,
  //     daySalesOutstanding,
  //     daysInventoryOutstanding,
  //     daysPayablesOutstanding,
  //     daysOutstandingQuarter,
  //   });

  //   const histWorkingCapital = (data) => {
  //     let histWork = [];
  //     if (data !== "undefined") {
  //       for (let i = 0; i < data.length; i++) {
  //         const workingCapital =
  //           data[i].totalcurrentassets - data[i].totalcurrentliabilities;
  //         let obj = {
  //           enddate: data[i].enddate,
  //           workingcapital: workingCapital,
  //         };
  //         histWork.push(obj);
  //       }
  //       return histWork;
  //     } else {
  //       setTimeout(histWorkingCapital, 250);
  //     }
  //   };
  //   const currentAssets = getLast(balanceQuarter).totalcurrentassets;
  //   const cash = getLast(balanceQuarter).cash;
  //   const accountsPayable = getLast(balanceQuarter).accountspayable;
  //   const netReceivable = getLast(balanceQuarter).netreceivables;
  //   const inventory = getLast(balanceQuarter).inventory;
  //   const otherCurrentAssets = currentAssets - cash - netReceivable - inventory;
  //   const currentLiab = getLast(balanceQuarter).totalcurrentliabilities;
  //   const shortTermDebt = getLast(balanceQuarter).shortlongtermdebt;
  //   const otherCurrentLiab = currentLiab - shortTermDebt - accountsPayable;
  //   const workingCapital = currentAssets - currentLiab;
  //   const historicalWorkingCapital = histWorkingCapital(balanceQuarter);

  //   setKpiData({
  //     currentAssets,
  //     cash,
  //     inventory,
  //     netReceivable,
  //     otherCurrentAssets,
  //     accountsPayable,
  //     shortTermDebt,
  //     currentLiab,
  //     otherCurrentLiab,
  //     daysOutstandingYear,
  //     workingCapital,
  //     historicalWorkingCapital,
  //   });

  //   const lastIncomeQuarter = getLast(incomeQuarter);
  //   const lastRatio = getLast(ratiosQuarter);
  //   const lastOpex =
  //     lastIncomeQuarter.totaloperatingexpenses / lastIncomeQuarter.totalrevenue;
  //   setplData({
  //     lastIncomeQuarter,
  //     lastRatio,
  //     lastOpex,
  //     incomeQuarter,
  //   });
  //   const lastBalanceQuarter = getLast(balanceQuarter);
  //   setFpData({
  //     ratiosQuarter,
  //     lastRatio,
  //     balanceQuarter,
  //     lastBalanceQuarter,
  //     workingCapital,
  //     historicalWorkingCapital,
  //   });
  // }
  // let dataDone = false;
  // const setDataDone = () => {
  //   dataDone = true;
  // };
  // proccesData().then(setDataDone());

  useEffect(() => {
    const addAvgtoBalances = (listOfBalances) => {
      for (let i = 1; i < listOfBalances.length; i++) {
        listOfBalances[i].avginventory =
          (listOfBalances[i].inventory + listOfBalances[i - 1].inventory) / 2;
        listOfBalances[i].avgpayable =
          (listOfBalances[i].accountspayable +
            listOfBalances[i - 1].accountspayable) /
          2;
        listOfBalances[i].avgnetreceivable =
          (listOfBalances[i].netreceivables +
            listOfBalances[i - 1].netreceivables) /
          2;
      }

      return listOfBalances;
    };
    const balanceQuarter = addAvgtoBalances(selectPeriod(balance, "Q"));
    const balanceYear = addAvgtoBalances(selectPeriod(balance, "FY"));
    const cashQuarter = selectPeriod(cashFlow, "Q");
    const incomeQuarter = selectPeriod(income, "Q");
    const incomeYear = selectPeriod(income, "FY");
    const ratiosQuarter = selectPeriod(ratios, "Q");

  
    const lastCurrentRatio = getLast(ratiosQuarter).currentratio;
    const lastAcidRatio = getLast(ratiosQuarter).acidratio;
    const cashBalance =
      getLast(cashQuarter).totalcashfromoperatingactivities +
      getLast(cashQuarter).totalcashflowsfrominvestingactivities +
      getLast(cashQuarter).totalcashfromfinancingactivities;
    const cashOperations =
      getLast(cashQuarter).totalcashfromoperatingactivities;
    const cashInvested =
      getLast(cashQuarter).totalcashflowsfrominvestingactivities;
    const cashFinancing = getLast(cashQuarter).totalcashfromfinancingactivities;

    const daysOuts = (data1, data2, Q = true) => {
      var daysOutsList = [];
      let days = 90;
      if (Q === false) {
        days = 365;
      }
      if (data1 !== "undifined" || data2 !== "undifined") {
        for (let i = 1; i < data1.length; i++) {
          const daySales = Math.round(
            data1[i].avgnetreceivable / (data2[i].totalrevenue / days)
          );
          const daysInv = Math.round(
            (data1[i].avginventory / data2[i].costofrevenue) * days
          );
          const daysPay = Math.round(
            data1[i].avgpayable / (data2[i].totalrevenue / days)
          );
          const ccc = daySales + daysInv - daysPay;

          daysOutsList.push({
            enddate: data1[i].enddate,
            daysinvtouts: daysInv,
            dayssalesouts: daySales,
            dayspayouts: -daysPay,
            ccc: ccc,
          });
        }
      } else {
        setTimeout(daysOuts, 250);
      }

      return daysOutsList;
    };
    const daysOutstandingQuarter = daysOuts(balanceQuarter, incomeQuarter);
    const daysOutstandingYear = daysOuts(balanceYear, incomeYear, false);
    const daySalesOutstanding = getLast(daysOutstandingQuarter).dayssalesouts;
    const daysInventoryOutstanding = getLast(
      daysOutstandingQuarter
    ).daysinvtouts;

    const daysPayablesOutstanding = getLast(daysOutstandingQuarter).dayspayouts;

    setCashData({
      lastCurrentRatio,
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
      daysOutstandingQuarter,
    });

    const histWorkingCapital = (data) => {
      let histWork = [];
      if (data !== "undefined") {
        for (let i = 0; i < data.length; i++) {
          const workingCapital =
            data[i].totalcurrentassets - data[i].totalcurrentliabilities;
          let obj = {
            enddate: data[i].enddate,
            workingcapital: workingCapital,
          };
          histWork.push(obj);
        }
        return histWork;
      } else {
        setTimeout(histWorkingCapital, 250);
      }
    };
    const currentAssets = getLast(balanceQuarter).totalcurrentassets;
    const cash = getLast(balanceQuarter).cash;
    const accountsPayable = getLast(balanceQuarter).accountspayable;
    const netReceivable = getLast(balanceQuarter).netreceivables;
    const inventory = getLast(balanceQuarter).inventory;
    const otherCurrentAssets = currentAssets - cash - netReceivable - inventory;
    const currentLiab = getLast(balanceQuarter).totalcurrentliabilities;
    const shortTermDebt = getLast(balanceQuarter).shortlongtermdebt;
    const otherCurrentLiab = currentLiab - shortTermDebt - accountsPayable;
    const workingCapital = currentAssets - currentLiab;
    const historicalWorkingCapital = histWorkingCapital(balanceQuarter);

    setKpiData({
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
      historicalWorkingCapital,
    });

    const lastIncomeQuarter = getLast(incomeQuarter);
    const lastRatio = getLast(ratiosQuarter);
    const lastOpex =
      lastIncomeQuarter.totaloperatingexpenses / lastIncomeQuarter.totalrevenue;
    setplData({
      lastIncomeQuarter,
      lastRatio,
      lastOpex,
      incomeQuarter,
    });
    const lastBalanceQuarter = getLast(balanceQuarter);
    setFpData({
      ratiosQuarter,
      lastRatio,
      balanceQuarter,
      lastBalanceQuarter,
      workingCapital,
      historicalWorkingCapital,
    });
  }, [cashFlow, balance, ratios, income]);
  function getQuarter(d) {
    d = d || new Date(); // If no date supplied, use today
    var q = [4, 1, 2, 3];
    return q[Math.floor(d.getMonth() / 3)];
  }
  const getLast = (data) => {
    if (data !== "undifined") {
      if (!Array.isArray(data) || data.length === 0) {
        return 0;
      }
      return data.reduce((a, b) => {
        return new Date(a.enddate) > new Date(b.enddate) ? a : b;
      });
    } else {
      setTimeout(getLast, 250);
    }
  };

  const selectPeriod = (data, type) => {
    if (!Array.isArray(data)) {
      return 0;
    }
    return data.filter((object) => object.period === type);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.container}>
          <TopBar props={{ open, setOpen, tickers, inputToTicker }}></TopBar>
            <CashFlow cashData={cashData}></CashFlow>
            <Kpi kpiData={kpiData}></Kpi>
            <ProfitLoss plData={plData}></ProfitLoss>
            <FinPerformance fpData={fpData}></FinPerformance>
            <Copyright></Copyright>
        
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

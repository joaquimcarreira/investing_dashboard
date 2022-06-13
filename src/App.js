import { useState, useEffect } from "react";
import "./App.css"
import ToolBar from "@mui/material/Toolbar";
import CashFlow from "./components/cash";
import Kpi from "./components/kpi";
import ProfitLoss from "./components/profitLoss";
import FinPerformance from "./components/finPerformance";
import TopBar from "./components/topbar/appBar"
import LeftBar from "./components/leftBar/leftBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#000000",
    },
  },
});
function App(props) {
  const [tickers, setTickers] = useState([]);
  const [balance, setBalance] = useState({});
  const [cashFlow, setCashFlow] = useState({});
  const [income, setIncome] = useState({});
  const [ratios, setRatios] = useState({});
  const [cashData, setCashData] = useState({});
  const [kpiData, setKpiData] = useState({});
  const [plData, setplData] = useState({});
  const [fpData, setFpData] = useState({});
  const [inputTicker, setInputTicker] = useState("");
  const [loading,setLoading] = useState(true)


  // const inputToTicker = (inputData) => {
  //   setInputTicker(inputData);
  //   console.log(inputTicker);
  // };

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
    
    const indicators = [{"id":144,"ticker":"AAPL","enddate":"2021-09-25 00:00:00","period":"FY","grossmargin":0.42,"operativemargin":0.3,"netmargin":0.26,"returnonassets":0.27,"returnonequity":1.5,"externalmoneyratio":0.82,"interestcoverage":41.19,"totalcapitalizationratio":0.49,"currentratio":1.07,"acidratio":1.02,"simfinid":111052},{"id":145,"ticker":"AAPL","enddate":"2020-09-26 00:00:00","period":"FY","grossmargin":0.38,"operativemargin":0.24,"netmargin":0.21,"returnonassets":0.18,"returnonequity":0.88,"externalmoneyratio":0.8,"interestcoverage":23.07,"totalcapitalizationratio":0.51,"currentratio":1.36,"acidratio":1.33,"simfinid":111052},{"id":146,"ticker":"AAPL","enddate":"2019-09-28 00:00:00","period":"FY","grossmargin":0.38,"operativemargin":0.25,"netmargin":0.21,"returnonassets":0.16,"returnonequity":0.61,"externalmoneyratio":0.73,"interestcoverage":17.88,"totalcapitalizationratio":0.54,"currentratio":1.54,"acidratio":1.5,"simfinid":111052},{"id":147,"ticker":"AAPL","enddate":"2018-09-29 00:00:00","period":"FY","grossmargin":0.38,"operativemargin":0.27,"netmargin":0.22,"returnonassets":0.16,"returnonequity":0.56,"externalmoneyratio":0.71,"interestcoverage":21.88,"totalcapitalizationratio":0.55,"currentratio":1.13,"acidratio":1.1,"simfinid":111052},{"id":148,"ticker":"AAPL","enddate":"2021-09-25 00:00:00","period":"Q","grossmargin":0.42,"operativemargin":0.29,"netmargin":0.25,"returnonassets":0.06,"returnonequity":0.33,"externalmoneyratio":0.82,"interestcoverage":35.4,"totalcapitalizationratio":0.49,"currentratio":1.07,"acidratio":1.02,"simfinid":111052},{"id":149,"ticker":"AAPL","enddate":"2021-06-26 00:00:00","period":"Q","grossmargin":0.43,"operativemargin":0.3,"netmargin":0.27,"returnonassets":0.07,"returnonequity":0.34,"externalmoneyratio":0.81,"interestcoverage":36.28,"totalcapitalizationratio":0.52,"currentratio":1.06,"acidratio":1.01,"simfinid":111052},{"id":150,"ticker":"AAPL","enddate":"2021-03-27 00:00:00","period":"Q","grossmargin":0.43,"operativemargin":0.31,"netmargin":0.26,"returnonassets":0.07,"returnonequity":0.34,"externalmoneyratio":0.79,"interestcoverage":41.05,"totalcapitalizationratio":0.53,"currentratio":1.14,"acidratio":1.09,"simfinid":111052},{"id":151,"ticker":"AAPL","enddate":"2020-12-26 00:00:00","period":"Q","grossmargin":0.4,"operativemargin":0.3,"netmargin":0.26,"returnonassets":0.08,"returnonequity":0.43,"externalmoneyratio":0.81,"interestcoverage":52.56,"totalcapitalizationratio":0.47,"currentratio":1.16,"acidratio":1.13,"simfinid":111052}]
        setRatios(
          indicators
            .sort((a, b) => {
              return new Date(a.enddate) - new Date(b.enddate);
            })
            .map(transformDateFormat)
        );
   

    
    const incomes  = [{"id":72,"researchdevelopment":21914000,"effectofaccountingcharges":"0","incomebeforetax":109207000,"minorityinterest":0,"netincome":94680000,"sellinggeneraladministrative":21973000,"grossprofit":152836000,"ebit":108949000,"operatingincome":108949000,"otheroperatingexpenses":"0","interestexpense":-2645000,"extraordinaryitems":"0","nonrecurring":"0","otheritems":"0","incometaxexpense":14527000,"totalrevenue":365817000,"totaloperatingexpenses":256868000,"costofrevenue":212981000,"totalotherincomeexpensenet":258000,"discontinuedoperations":0,"netincomefromcontinuingops":94680000,"netincomeapplicabletocommonshares":94680000,"enddate":"2021-09-25 00:00:00","period":"FY","ticker":"AAPL","simfinid":111052},{"id":73,"researchdevelopment":18752000,"effectofaccountingcharges":"0","incomebeforetax":67091000,"minorityinterest":0,"netincome":57411000,"sellinggeneraladministrative":19916000,"grossprofit":104956000,"ebit":66288000,"operatingincome":66288000,"otheroperatingexpenses":"0","interestexpense":-2873000,"extraordinaryitems":"0","nonrecurring":"0","otheritems":"0","incometaxexpense":9680000,"totalrevenue":274515000,"totaloperatingexpenses":208227000,"costofrevenue":169559000,"totalotherincomeexpensenet":803000,"discontinuedoperations":0,"netincomefromcontinuingops":57411000,"netincomeapplicabletocommonshares":57411000,"enddate":"2020-09-26 00:00:00","period":"FY","ticker":"AAPL","simfinid":111052},{"id":74,"researchdevelopment":16217000,"effectofaccountingcharges":"0","incomebeforetax":65737000,"minorityinterest":0,"netincome":55256000,"sellinggeneraladministrative":18245000,"grossprofit":98392000,"ebit":63930000,"operatingincome":63930000,"otheroperatingexpenses":"0","interestexpense":-3576000,"extraordinaryitems":"0","nonrecurring":"0","otheritems":"0","incometaxexpense":10481000,"totalrevenue":260174000,"totaloperatingexpenses":196244000,"costofrevenue":161782000,"totalotherincomeexpensenet":1807000,"discontinuedoperations":0,"netincomefromcontinuingops":55256000,"netincomeapplicabletocommonshares":55256000,"enddate":"2019-09-28 00:00:00","period":"FY","ticker":"AAPL","simfinid":111052},{"id":75,"researchdevelopment":14236000,"effectofaccountingcharges":"0","incomebeforetax":72903000,"minorityinterest":0,"netincome":59531000,"sellinggeneraladministrative":16705000,"grossprofit":101839000,"ebit":70898000,"operatingincome":70898000,"otheroperatingexpenses":"0","interestexpense":-3240000,"extraordinaryitems":"0","nonrecurring":"0","otheritems":"0","incometaxexpense":13372000,"totalrevenue":265595000,"totaloperatingexpenses":194697000,"costofrevenue":163756000,"totalotherincomeexpensenet":2005000,"discontinuedoperations":0,"netincomefromcontinuingops":59531000,"netincomeapplicabletocommonshares":59531000,"enddate":"2018-09-29 00:00:00","period":"FY","ticker":"AAPL","simfinid":111052},{"id":76,"researchdevelopment":5772000,"effectofaccountingcharges":"0","incomebeforetax":23248000,"minorityinterest":0,"netincome":20551000,"sellinggeneraladministrative":5616000,"grossprofit":35174000,"ebit":23786000,"operatingincome":23786000,"otheroperatingexpenses":"0","interestexpense":-672000,"extraordinaryitems":"0","nonrecurring":"0","otheritems":"0","incometaxexpense":2697000,"totalrevenue":83360000,"totaloperatingexpenses":59574000,"costofrevenue":48186000,"totalotherincomeexpensenet":-538000,"discontinuedoperations":0,"netincomefromcontinuingops":20551000,"netincomeapplicabletocommonshares":20551000,"enddate":"2021-09-25 00:00:00","period":"Q","ticker":"AAPL","simfinid":111052},{"id":77,"researchdevelopment":5717000,"effectofaccountingcharges":"0","incomebeforetax":24369000,"minorityinterest":0,"netincome":21744000,"sellinggeneraladministrative":5412000,"grossprofit":35255000,"ebit":24126000,"operatingincome":24126000,"otheroperatingexpenses":"0","interestexpense":-665000,"extraordinaryitems":"0","nonrecurring":"0","otheritems":"0","incometaxexpense":2625000,"totalrevenue":81434000,"totaloperatingexpenses":57308000,"costofrevenue":46179000,"totalotherincomeexpensenet":243000,"discontinuedoperations":0,"netincomefromcontinuingops":21744000,"netincomeapplicabletocommonshares":21744000,"enddate":"2021-06-26 00:00:00","period":"Q","ticker":"AAPL","simfinid":111052},{"id":78,"researchdevelopment":5262000,"effectofaccountingcharges":"0","incomebeforetax":28011000,"minorityinterest":0,"netincome":23630000,"sellinggeneraladministrative":5314000,"grossprofit":38079000,"ebit":27503000,"operatingincome":27503000,"otheroperatingexpenses":"0","interestexpense":-670000,"extraordinaryitems":"0","nonrecurring":"0","otheritems":"0","incometaxexpense":4381000,"totalrevenue":89584000,"totaloperatingexpenses":62081000,"costofrevenue":51505000,"totalotherincomeexpensenet":508000,"discontinuedoperations":0,"netincomefromcontinuingops":23630000,"netincomeapplicabletocommonshares":23630000,"enddate":"2021-03-27 00:00:00","period":"Q","ticker":"AAPL","simfinid":111052},{"id":79,"researchdevelopment":5163000,"effectofaccountingcharges":"0","incomebeforetax":33579000,"minorityinterest":0,"netincome":28755000,"sellinggeneraladministrative":5631000,"grossprofit":44328000,"ebit":33534000,"operatingincome":33534000,"otheroperatingexpenses":"0","interestexpense":-638000,"extraordinaryitems":"0","nonrecurring":"0","otheritems":"0","incometaxexpense":4824000,"totalrevenue":111439000,"totaloperatingexpenses":77905000,"costofrevenue":67111000,"totalotherincomeexpensenet":45000,"discontinuedoperations":0,"netincomefromcontinuingops":28755000,"netincomeapplicabletocommonshares":28755000,"enddate":"2020-12-26 00:00:00","period":"Q","ticker":"AAPL","simfinid":111052}]
        setIncome(
          incomes
            .sort((a, b) => {
              return new Date(a.enddate) - new Date(b.enddate);
            })
            .map(transformDateFormat)
        )
  
  
      const cashflows = [{"id":72,"investments":-2819000,"changetoliabilities":14002000,"totalcashflowsfrominvestingactivities":-14545000,"netborrowings":12665000,"totalcashfromfinancingactivities":-93353000,"changetooperatingactivities":-6146000,"netincome":94680000,"changeincash":-3860000,"repurchaseofstock":-92527000,"effectofexchangerate":0,"totalcashfromoperatingactivities":104038000,"depreciation":11284000,"othercashflowsfrominvestingactivities":-608000,"changetoaccountreceivables":-10125000,"othercashflowsfromfinancingactivities":-129000,"changetonetincome":2985000,"capitalexpenditures":-11085000,"enddate":"2021-09-25 00:00:00","period":"FY","issuanceofstock":1105000,"dividendspaid":-14467000,"changetoinventory":-2642000,"ticker":"AAPL","simfinid":111052},{"id":73,"investments":5335000,"changetoliabilities":-1981000,"totalcashflowsfrominvestingactivities":-4289000,"netborrowings":2499000,"totalcashfromfinancingactivities":-86820000,"changetooperatingactivities":881000,"netincome":57411000,"changeincash":-10435000,"repurchaseofstock":-75992000,"effectofexchangerate":0,"totalcashfromoperatingactivities":80674000,"depreciation":11056000,"othercashflowsfrominvestingactivities":-791000,"changetoaccountreceivables":6917000,"othercashflowsfromfinancingactivities":-126000,"changetonetincome":6517000,"capitalexpenditures":-7309000,"enddate":"2020-09-26 00:00:00","period":"FY","issuanceofstock":880000,"dividendspaid":-14081000,"changetoinventory":-127000,"ticker":"AAPL","simfinid":111052},{"id":74,"investments":58093000,"changetoliabilities":-2548000,"totalcashflowsfrominvestingactivities":45896000,"netborrowings":-7819000,"totalcashfromfinancingactivities":-90976000,"changetooperatingactivities":-896000,"netincome":55256000,"changeincash":24311000,"repurchaseofstock":-69714000,"effectofexchangerate":0,"totalcashfromoperatingactivities":69391000,"depreciation":12547000,"othercashflowsfrominvestingactivities":-1078000,"changetoaccountreceivables":245000,"othercashflowsfromfinancingactivities":-105000,"changetonetincome":5076000,"capitalexpenditures":-10495000,"enddate":"2019-09-28 00:00:00","period":"FY","issuanceofstock":781000,"dividendspaid":-14119000,"changetoinventory":-289000,"ticker":"AAPL","simfinid":111052},{"id":75,"investments":30845000,"changetoliabilities":9172000,"totalcashflowsfrominvestingactivities":16066000,"netborrowings":432000,"totalcashfromfinancingactivities":-87876000,"changetooperatingactivities":30016000,"netincome":59531000,"changeincash":5624000,"repurchaseofstock":-75265000,"effectofexchangerate":0,"totalcashfromoperatingactivities":77434000,"depreciation":10903000,"othercashflowsfrominvestingactivities":-745000,"changetoaccountreceivables":-5322000,"othercashflowsfromfinancingactivities":-105000,"changetonetincome":-27694000,"capitalexpenditures":-13313000,"enddate":"2018-09-29 00:00:00","period":"FY","issuanceofstock":669000,"dividendspaid":-13712000,"changetoinventory":828000,"ticker":"AAPL","simfinid":111052},{"id":76,"investments":4608000,"changetoliabilities":14050000,"totalcashflowsfrominvestingactivities":835000,"netborrowings":3220000,"totalcashfromfinancingactivities":-20382000,"changetooperatingactivities":-5602000,"netincome":20551000,"changeincash":653000,"repurchaseofstock":-20449000,"effectofexchangerate":0,"totalcashfromoperatingactivities":20200000,"depreciation":2989000,"othercashflowsfrominvestingactivities":-530000,"changetoaccountreceivables":-8809000,"othercashflowsfromfinancingactivities":-57000,"changetonetincome":-1550000,"capitalexpenditures":-3223000,"enddate":"2021-09-25 00:00:00","period":"Q","issuanceofstock":544000,"dividendspaid":-3640000,"changetoinventory":-1429000,"ticker":"AAPL","simfinid":111052},{"id":77,"investments":5747000,"changetoliabilities":307000,"totalcashflowsfrominvestingactivities":3572000,"netborrowings":3220000,"totalcashfromfinancingactivities":-29396000,"changetooperatingactivities":-6048000,"netincome":21744000,"changeincash":-4730000,"repurchaseofstock":-25595000,"effectofexchangerate":0,"totalcashfromoperatingactivities":21094000,"depreciation":2832000,"othercashflowsfrominvestingactivities":-78000,"changetoaccountreceivables":1031000,"othercashflowsfromfinancingactivities":-34000,"changetonetincome":1215000,"capitalexpenditures":-2093000,"enddate":"2021-06-26 00:00:00","period":"Q","issuanceofstock":544000,"dividendspaid":-3767000,"changetoinventory":13000,"ticker":"AAPL","simfinid":111052},{"id":78,"investments":-7895000,"changetoliabilities":-23366000,"totalcashflowsfrominvestingactivities":-10368000,"netborrowings":10423000,"totalcashfromfinancingactivities":-11326000,"changetooperatingactivities":11265000,"netincome":23630000,"changeincash":2287000,"repurchaseofstock":-18847000,"effectofexchangerate":0,"totalcashfromoperatingactivities":23981000,"depreciation":2797000,"othercashflowsfrominvestingactivities":-204000,"changetoaccountreceivables":8598000,"othercashflowsfromfinancingactivities":-16000,"changetonetincome":1333000,"capitalexpenditures":-2269000,"enddate":"2021-03-27 00:00:00","period":"Q","issuanceofstock":561000,"dividendspaid":-3447000,"changetoinventory":-276000,"ticker":"AAPL","simfinid":111052},{"id":79,"investments":-5279000,"changetoliabilities":23011000,"totalcashflowsfrominvestingactivities":-8584000,"netborrowings":-978000,"totalcashfromfinancingactivities":-32249000,"changetooperatingactivities":-5761000,"netincome":28755000,"changeincash":-2070000,"repurchaseofstock":-27636000,"effectofexchangerate":0,"totalcashfromoperatingactivities":38763000,"depreciation":2666000,"othercashflowsfrominvestingactivities":204000,"changetoaccountreceivables":-10945000,"othercashflowsfromfinancingactivities":-22000,"changetonetincome":1987000,"capitalexpenditures":-3500000,"enddate":"2020-12-26 00:00:00","period":"Q","issuanceofstock":561000,"dividendspaid":-3613000,"changetoinventory":-950000,"ticker":"AAPL","simfinid":111052}]
        setCashFlow(
          cashflows
            .sort((a, b) => {
              return new Date(a.enddate) - new Date(b.enddate);
            })
            .map(transformDateFormat)
        )
      

      const balances = [{"id":72,"intangibleassets":0,"totalliab":287912000,"totalstockholderequity":63090000,"othercurrentliab":53577000,"totalassets":351002000,"commonstock":57365000,"othercurrentassets":14111000,"retainedearnings":5562000,"otherliab":43050000,"goodwill":0,"treasurystock":163000,"otherassets":38762000,"cash":34940000,"totalcurrentliabilities":125481000,"deferredlongtermassetcharges":0,"shortlongtermdebt":9613000,"otherstockholderequity":163000,"propertyplantequipment":49527000,"totalcurrentassets":134836000,"longterminvestments":127877000,"nettangibleassets":63090000,"shortterminvestments":"27699000","netreceivables":51506000,"longtermdebt":109106000,"inventory":6580000,"accountspayable":54763000,"enddate":"2021-09-25 00:00:00","period":"FY","capitalsurplus":0,"minorityinterest":0,"ticker":"AAPL","simfinid":111052},{"id":73,"intangibleassets":0,"totalliab":258549000,"totalstockholderequity":65339000,"othercurrentliab":47867000,"totalassets":323888000,"commonstock":50779000,"othercurrentassets":11264000,"retainedearnings":14966000,"otherliab":46108000,"goodwill":0,"treasurystock":-406000,"otherassets":33952000,"cash":38016000,"totalcurrentliabilities":105392000,"deferredlongtermassetcharges":0,"shortlongtermdebt":8773000,"otherstockholderequity":-406000,"propertyplantequipment":45336000,"totalcurrentassets":143713000,"longterminvestments":100887000,"nettangibleassets":65339000,"shortterminvestments":"52927000","netreceivables":37445000,"longtermdebt":98667000,"inventory":4061000,"accountspayable":42296000,"enddate":"2020-09-26 00:00:00","period":"FY","capitalsurplus":0,"minorityinterest":0,"ticker":"AAPL","simfinid":111052},{"id":74,"intangibleassets":0,"totalliab":248028000,"totalstockholderequity":90488000,"othercurrentliab":43242000,"totalassets":338516000,"commonstock":45174000,"othercurrentassets":12352000,"retainedearnings":45898000,"otherliab":50503000,"goodwill":0,"treasurystock":-584000,"otherassets":32978000,"cash":48844000,"totalcurrentliabilities":105718000,"deferredlongtermassetcharges":0,"shortlongtermdebt":10260000,"otherstockholderequity":-584000,"propertyplantequipment":37378000,"totalcurrentassets":162819000,"longterminvestments":105341000,"nettangibleassets":90488000,"shortterminvestments":"51713000","netreceivables":45804000,"longtermdebt":91807000,"inventory":4106000,"accountspayable":46236000,"enddate":"2019-09-28 00:00:00","period":"FY","capitalsurplus":0,"minorityinterest":0,"ticker":"AAPL","simfinid":111052},{"id":75,"intangibleassets":0,"totalliab":258578000,"totalstockholderequity":107147000,"othercurrentliab":39293000,"totalassets":365725000,"commonstock":40201000,"othercurrentassets":12087000,"retainedearnings":70400000,"otherliab":48914000,"goodwill":0,"treasurystock":-3454000,"otherassets":22283000,"cash":25913000,"totalcurrentliabilities":115929000,"deferredlongtermassetcharges":0,"shortlongtermdebt":8784000,"otherstockholderequity":-3454000,"propertyplantequipment":41304000,"totalcurrentassets":131339000,"longterminvestments":170799000,"nettangibleassets":107147000,"shortterminvestments":"40388000","netreceivables":48995000,"longtermdebt":93735000,"inventory":3956000,"accountspayable":55888000,"enddate":"2018-09-29 00:00:00","period":"FY","capitalsurplus":0,"minorityinterest":0,"ticker":"AAPL","simfinid":111052},{"id":76,"intangibleassets":0,"totalliab":287912000,"totalstockholderequity":63090000,"othercurrentliab":53577000,"totalassets":351002000,"commonstock":57365000,"othercurrentassets":14111000,"retainedearnings":5562000,"otherliab":43050000,"goodwill":0,"treasurystock":163000,"otherassets":38762000,"cash":34940000,"totalcurrentliabilities":125481000,"deferredlongtermassetcharges":0,"shortlongtermdebt":9613000,"otherstockholderequity":163000,"propertyplantequipment":49527000,"totalcurrentassets":134836000,"longterminvestments":127877000,"nettangibleassets":63090000,"shortterminvestments":"27699000","netreceivables":51506000,"longtermdebt":109106000,"inventory":6580000,"accountspayable":54763000,"enddate":"2021-09-25 00:00:00","period":"Q","capitalsurplus":0,"minorityinterest":0,"ticker":"AAPL","simfinid":111052},{"id":77,"intangibleassets":0,"totalliab":265560000,"totalstockholderequity":64280000,"othercurrentliab":51306000,"totalassets":329840000,"commonstock":54989000,"othercurrentassets":13641000,"retainedearnings":9233000,"otherliab":38354000,"goodwill":0,"treasurystock":58000,"otherassets":44854000,"cash":34050000,"totalcurrentliabilities":107754000,"deferredlongtermassetcharges":0,"shortlongtermdebt":8039000,"otherstockholderequity":58000,"propertyplantequipment":38615000,"totalcurrentassets":114423000,"longterminvestments":131948000,"nettangibleassets":64280000,"shortterminvestments":"27646000","netreceivables":33908000,"longtermdebt":105752000,"inventory":5178000,"accountspayable":40409000,"enddate":"2021-06-26 00:00:00","period":"Q","capitalsurplus":0,"minorityinterest":0,"ticker":"AAPL","simfinid":111052},{"id":78,"intangibleassets":0,"totalliab":267980000,"totalstockholderequity":69178000,"othercurrentliab":53255000,"totalassets":337158000,"commonstock":54203000,"othercurrentassets":13376000,"retainedearnings":15261000,"otherliab":39853000,"goodwill":0,"treasurystock":-286000,"otherassets":43339000,"cash":38466000,"totalcurrentliabilities":106385000,"deferredlongtermassetcharges":0,"shortlongtermdebt":8003000,"otherstockholderequity":-286000,"propertyplantequipment":37815000,"totalcurrentassets":121465000,"longterminvestments":134539000,"nettangibleassets":69178000,"shortterminvestments":"31368000","netreceivables":33036000,"longtermdebt":108642000,"inventory":5219000,"accountspayable":40127000,"enddate":"2021-03-27 00:00:00","period":"Q","capitalsurplus":0,"minorityinterest":0,"ticker":"AAPL","simfinid":111052},{"id":79,"intangibleassets":0,"totalliab":287830000,"totalstockholderequity":66224000,"othercurrentliab":55899000,"totalassets":354054000,"commonstock":51744000,"othercurrentassets":13687000,"retainedearnings":14301000,"otherliab":43042000,"goodwill":0,"treasurystock":179000,"otherassets":43270000,"cash":36010000,"totalcurrentliabilities":132507000,"deferredlongtermassetcharges":0,"shortlongtermdebt":7762000,"otherstockholderequity":179000,"propertyplantequipment":37933000,"totalcurrentassets":154106000,"longterminvestments":118745000,"nettangibleassets":66224000,"shortterminvestments":"40816000","netreceivables":58620000,"longtermdebt":99281000,"inventory":4973000,"accountspayable":63846000,"enddate":"2020-12-26 00:00:00","period":"Q","capitalsurplus":0,"minorityinterest":0,"ticker":"AAPL","simfinid":111052}];
  
        setBalance(
         balances
            .sort((a, b) => {
              return new Date(a.enddate) - new Date(b.enddate);
            })
            .map(transformDateFormat)
        )
     

        
        
        
        
        
      }, []);
      useEffect(()=> {
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
      },[balance,cashFlow,income,ratios])
      


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
  setTimeout(()=> {
    setLoading(false)
  },500)


  

  return (
    <div className="app">
      <ThemeProvider theme={theme}>      
          <div className="container">

            <LeftBar></LeftBar> 
            <div className="mainContainer">              
              <TopBar></TopBar>
  {            !loading ?   <div className="sections">
                  <ProfitLoss plData={plData}></ProfitLoss>
                  <Kpi kpiData={kpiData}></Kpi>
                  <FinPerformance fpData={fpData}></FinPerformance>
                  <CashFlow {...props} cashData={cashData}></CashFlow>            
                </div> : null}
            </div>       
          </div>      
      </ThemeProvider>

    </div>
  );
}

export default App;

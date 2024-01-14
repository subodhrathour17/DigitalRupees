import { React, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function Cryp() {
  const [dataSearch, setDataSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const apicallViaGet = async () => {
      try {
        const url = "data.json";
        const res = await axios.get(url, { Authorization: "ImAuthPerson" });
        setData(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    apicallViaGet();
  });

  return (
    <div className='main'>
      <nav className='nav'>
        <h1>DigitalRupee</h1>
        <input
          type='search'
          placeholder='Search....'
          onChange={(e) => {
            setDataSearch(e.target.value);
          }}
        />
      </nav>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>NickName</th>
            <th>CurrentPrice</th>
            <th>MarketUp</th>
          </tr>
        </thead>

        {data
          .filter((val) => {
            return val.name.toLowerCase().includes(dataSearch.toLowerCase());
          })
          .map((val, key) => {
            return (
              <tr key={key}>
                <td>
                  <img
                    src={val.image}
                    style={{ borderRadius: "10px" }}
                    alt=''
                  />
                </td>
                <td>{val.name}</td>
                <td>{val.id}</td>
                <td>{val.trade_volume_24h_btc}</td>
                <td style={{ color: "red" }}>+{val.trust_score_rank} </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
// const data = [
//   { Symbol: "ssss", Name:  'subodh', NickName: "singh" ,CurrentPrice:2533,MarketUp:"22533"},
//   { Symbol: "dfgh", Name:  'subodh', NickName: "singh",CurrentPrice:2533,MarketUp:"22533"},
//   { Symbol: "fghj", Name:  'subodh', NickName: "singh",CurrentPrice:2533,MarketUp:"22533"},
//   { Symbol: "fghj", Name:  'subodh', NickName: "singh",CurrentPrice:2533,MarketUp:"22533"},
//   { Symbol: "fghj", Name:  'subodh', NickName: "singh",CurrentPrice:2533,MarketUp:"22533"},
//   { Symbol: "fghj", Name:  'priya', NickName: "singh",CurrentPrice:2533,MarketUp:"22533"},
//   { Symbol: "fghj", Name:  'subodh', NickName: "singh",CurrentPrice:2533,MarketUp:"22533"},
//   { Symbol: "fghj", Name:  'Ram',    NickName: "singh",CurrentPrice:2533,MarketUp:"22533"},

// ]

export default Cryp;

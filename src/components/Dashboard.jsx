import { IoMdHome } from "react-icons/io";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  ordersData,
  transactions,
  socialrenevue,
  salesData,
  visitData,
} from "../data/data";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

function Dashboard() {
  return (
    <>
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none z-0"
        style={{
          boxShadow: "0 0 250px 150px blue",
        }}
      ></div>
      <div className="relative z-10">
        <div className="p-10 text-white">
          {/* Info */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-lg font-semibold">Dashboard</span>
            <div className="w-px h-6 bg-gray-400" />
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <IoMdHome className="text-lg" />
              <p>eCommerce</p>
            </div>
          </div>

          {/* Cards */}
          <div className="flex gap-6 ">
            {/* Sol kart */}
            <div className="w-2/6 bg-[#0f1535] p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">
                Congratulations Furkan
              </h4>
              <p className="text-sm text-gray-300 mb-4">
                You are the best seller of this month
              </p>
              <h2 className="text-3xl font-bold mb-2">$168.5K</h2>
              <p className="text-sm text-gray-400 mb-4">58% of sales target</p>
              <button className="rounded-2xl p-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition">
                View Details
              </button>
            </div>

            {/* Sağ kart */}
            <div className="w-4/6 flex gap-6">
              <div className="flex flex-col justify-between bg-[#0f1535]  p-4 w-1/4 shadow">
                <div className="flex justify-between items-center ">
                  <div className="bg-blue-950 p-2 rounded-full self-start">
                    <ShoppingCartIcon className="text-blue-400" />
                  </div>
                  <div className="flex items-center gap-1 text-green-500 text-sm">
                    <p>+24%</p>
                    <KeyboardArrowUpIcon />
                  </div>
                </div>

                <div className="mt-2">
                  <p className="text-2xl font-bold">248K</p>
                  <p className="text-sm text-gray-300">Total Orders</p>
                  <div className="h-16 mt-5">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={ordersData}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#8884d8"
                          strokeWidth={2}
                          dot={true}
                        />
                        <Tooltip
                          content={({ payload, active }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded shadow">
                                  {payload[0].value}
                                </div>
                              );
                            }
                            return null;
                          }}
                          cursor={{ stroke: "#8884d8", strokeWidth: 1 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Diğer boş kutular için yer tutucu */}
              <div className="w-1/4  bg-[#0f1535] rounded-lg p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center rounded-full text-green-500">
                  <div className="p-2 rounded-full bg-blue-950 ">
                    <AttachMoneyIcon className="text-blue-400" />
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <p>+14%</p>
                    <KeyboardArrowUpIcon />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-bold">62K</p>
                  <p className="text-sm text-gray-300">Total Sales</p>
                </div>
                <div className="h-16 mt-5">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="green"
                        strokeWidth={2}
                        dot={true}
                      />
                      <Tooltip
                        content={({ payload, active }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded shadow">
                                {payload[0].value}
                              </div>
                            );
                          }
                          return null;
                        }}
                        cursor={{ stroke: "#8884d8", strokeWidth: 1 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="w-1/4 bg-[#0f1535] rounded-lg p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="bg-blue-950 p-2 rounded-full">
                    <VisibilityIcon className="text-blue-400" />
                  </div>
                  <div className="text-red-500 text-sm flex">
                    <p>-18%</p>
                    <KeyboardArrowUpIcon />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-bold">392K</p>
                  <p className="text-sm text-gray-300">Total Visit</p>
                </div>
                <div className="h-16 mt-5">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={visitData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={true}
                      />
                      <Tooltip
                        content={({ payload, active }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded shadow">
                                {payload[0].value}
                              </div>
                            );
                          }
                          return null;
                        }}
                        cursor={{ stroke: "#8884d8", strokeWidth: 1 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="w-1/4 bg-[#0f1535] rounded-lg p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="bg-blue-950 p-2 rounded-full">
                    <LocationCityIcon className="text-blue-400" />
                  </div>
                  <div className="text-green-500 text-sm flex">
                    <p>+35%</p>
                    <KeyboardArrowUpIcon />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-bold">+24.6%</p>
                  <p className="text-sm text-gray-300">Bounce Rate</p>
                </div>
                <div className="h-16 mt-5">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData}>
                      <Bar dataKey="value" fill="green" radius={[4, 4, 0, 0]} />
                      <Tooltip
                        content={({ payload, active }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded shadow">
                                {payload[0].value}
                              </div>
                            );
                          }
                          return null;
                        }}
                        cursor={{ fill: "#8884d8", opacity: 0.2 }}
                      />
                      <XAxis hide={true} />
                      <YAxis hide={true} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/*Transcation & Social */}
          <div className="flex gap-10">
            <div className="flex flex-col gap-6 w-1/2 mt-20 bg-[#0f1535] rounded-2xl p-6">
              <div>
                <div className="flex justify-between mb-5 ">
                  <h2>Transactions</h2>
                  <p>
                    <MoreVertIcon />
                  </p>
                </div>
                <div>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="pb-2">Date</th>
                        <th className="pb-2">Source</th>
                        <th className="pb-2">Status</th>
                        <th className="pb-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((tx, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-700 hover:bg-gray-800 transition"
                        >
                          <td className="py-2">
                            <div className="flex flex-col">
                              <span>{tx.date}</span>
                              <span className="text-xs text-gray-400">
                                {tx.time}
                              </span>
                            </div>
                          </td>
                          <td className="py-2">
                            <div className="flex items-center gap-2">
                              {tx.icon}
                              <div className="flex flex-col text-sm">
                                <span>{tx.source}</span>
                                <span className="text-gray-400">{tx.plan}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-2">{tx.status}</td>
                          <td className="py-2">{tx.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-1/2 mt-20 bg-[#0f1535] rounded-2xl p-6 text-white shadow-lg">
              <div className="flex justify-between mb-5 items-center">
                <h2 className="text-xl font-semibold">Transactions</h2>
                <MoreVertIcon className="text-gray-400 cursor-pointer hover:text-white transition" />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-3">
                  <thead>
                    <tr className="text-gray-400 text-left">
                      <th className="pl-4 w-12"></th> {/* ikon için boş yer */}
                      <th className="font-semibold">Name</th>
                      <th className="font-semibold">Type</th>
                      <th className="font-semibold text-right pr-4">Revenue</th>
                      <th className="font-semibold text-right pr-4">Profit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {socialrenevue.map((item, index) => (
                      <tr
                        key={index}
                        className="bg-[#192147] rounded-lg hover:bg-[#27305e] transition cursor-pointer"
                      >
                        <td className="pl-4 py-3">{item.icon}</td>
                        <td className="py-3 font-medium">{item.name}</td>
                        <td className="py-3 text-gray-300">{item.type}</td>
                        <td className="py-3 text-right pr-4 font-semibold">
                          {item.revenue}
                        </td>
                        <td className="py-3 text-right pr-4 font-semibold text-green-600">
                          {item.profit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

import Header from "../component/Header";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LineChartC from "../component/LineChartC";
import PieChartC from "../component/PieChartC";
import { format } from 'date-fns'




const Home = () => {
  const dateTime = format(new Date(), 'MMM dd, yyyy pp')

  const transactions = [
    {
      id: 1,
      purpose: 'Groceries',
      date: dateTime,
      amount: -180,
    },
    {
      id: 2,
      purpose: 'PS5',
      date: dateTime,
      amount: -500,
    },
    {
      id: 3,
      purpose: 'Netflix',
      date: dateTime,
      amount: -50,
    },
    {
      id: 4,
      purpose: 'Spofity',
      date: dateTime,
      amount: 20,
    },
    {
      id: 5,
      purpose: 'Transportation',
      date: dateTime,
      amount: -10,
    },
    {
      id: 6,
      purpose: 'Stream',
      date: dateTime,
      amount: 500,
    },
  ]

  return (
    <div className="pad">
      <div className="flex justify-between items-center">
        <Header title="Dashboard" text="A convienent way to manage or track your expenses"/>
        <div className="text-maintext">calender</div>
      </div>

      {/* grid layout*/}
      <div className="mt-6 gridLayout">

        {/* Box1 */}
          <div className="box text-textB1 flex flex-col justify-between bg-bgdark">
            <div className="flex justify-between items-center text-textB1">
              <h1 className="font-semibold text-lg">Balance</h1>
              <p className="text-xs bg-bgsoft rounded p-1">This Month</p>
            </div>
            <div className="text-xs">{dateTime}</div>
            <div className="flex justify-between items-center gap-4">
              <h1 className="font-bold text-4xl">$16,000</h1>
              <TrendingUpIcon className="text-green-500"/>
            </div>
          </div>

          {/* Box2 */}
          <div className="box text-maintext flex flex-col gap-7">
            <div className="flex justify-between items-center">
              <h1 className="font-medium ">Net Income</h1>
              <MoreHorizIcon/>
            </div>
            <h1 className="font-bold relative">
              <span className="absolute -top-3">$</span>
              <span className="text-4xl ml-3">90,000</span>
            </h1>
            <div className="flex gap-1 items-center">
              <TrendingUpIcon className="text-green-500"/>
              <div className="text-xs">
                <span className="text-green-500">+35% </span>
                <span>from last Month</span>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="box text-maintext flex flex-col gap-7">
              <div className="flex justify-between items-center">
                <h1 className="font-medium ">Net Expense</h1>
                <MoreHorizIcon/>
              </div>
              <h1 className="font-bold relative">
                <span className="absolute -top-3">$</span>
                <span className="text-4xl ml-3">160,000</span>
              </h1>
              <div className="flex gap-1 items-center">
                <TrendingDownIcon className="text-red-500"/>
                <div className="text-xs">
                  <span className="text-red-500">-20% </span>
                  <span>from last Month</span>
                </div>
              </div>
          </div>

          {/* Box 4 */}
          <div className="box text-maintext col-span-1 row-span-3">
              <div className="flex justify-between items-center border-b border-borderr pb-2">
                <h1 className="font-medium  text-softText">Analytics</h1>
                <p className="text-sm">Breakdown</p>
              </div>
              <div className="w-full pt-2 h-[300px]">
                <PieChartC/>
              </div>
          </div>

          {/* Box 5 */}
          <div className="box text-maintext col-span-1 row-span-2 overflow-auto">
              <div className="flex justify-between items-center border-b border-borderr pb-2">
                <h1 className="font-medium  text-softText">Last Transaction</h1>
                <p className="text-xs">This Month</p>
              </div>
              <div className="flex flex-col mt-4 gap-5">
                {transactions && transactions.map(transaction => 
                <div className="flex items-center justify-between" key={transaction.id}>
                  <div className="flex gap-2 items-center">
                      <div className="w-8 h-8 bg-bgsoft rounded-full grid place-content-center text-xs uppercase">{transaction.purpose.charAt(0)}</div>
                      <div className="flex flex-col">
                        <p className=" font-semibold">{transaction.purpose}</p>
                        <p className="text-softText text-xs">{dateTime}</p>
                      </div>
                  </div>
                  <div className={`font-medium  ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                    ${(transaction.amount).toFixed(2)}
                  </div>
                </div>
                )}
              </div>
          </div>

          {/* Box 6 */}
          <div className="box text-maintext row-span-2 col-span-2 w-full">
            <div className="flex justify-between items-center border-b border-borderr pb-2">
              <h1 className="font-medium  text-softText">This Month's Expenses</h1>
              <p className="text-sm">Breakdown</p>
            </div>
            <div className="w-full pt-2">
              <LineChartC/>
            </div>
          </div>

          {/* <div className="box text-maintext row-span-1 col-span-1">Box 7</div> */}
      </div>

    </div>  
)
}

export default Home;

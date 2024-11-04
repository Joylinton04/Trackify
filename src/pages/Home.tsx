import Header from "../component/Header";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LineChartC from "../component/LineChartC";
import PieChartC from "../component/PieChartC";
import { format } from "date-fns";
import { useAppSelector } from "../redux/store";
import { Link } from "react-router-dom";

const Home = () => {
  const dateTime = format(new Date(), "MMM dd, yyyy pp");
  const budget = useAppSelector((state) => state.budgets);
  const expenses = useAppSelector((state) => state.expenses);
  const latestBudget =
    [...budget].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )[0] || [];

  const filteredExpenses =
    [...expenses]
      .filter((exp) => exp.budget_id === latestBudget.budget_id)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5) || [];

  const totalExpenses = filteredExpenses.reduce(
    (acc, exp) => acc + exp.amount,
    0
  );
  const totalRemainingBudget = latestBudget.budget - totalExpenses;
  const remainingBudgetColor =
    totalRemainingBudget < 0 ? "text-red-500" : "text-green-500";

  return (
    <div className="pad">
      <div className="flex justify-between items-center ssm:flex-wrap ssm:gap-3">
        <Header
          title="Dashboard"
          text="A convienent way to manage or track your expenses"
        />
        {/* <div className="text-maintext">calender</div> */}
      </div>

      {/* grid layout*/}
      <div className="mt-6 gridLayout lgg:grid-cols-3 mdd:grid-cols-2 ssm:grid-cols-1 ssm:gap-2">
        {/* Box1 */}
        {
          latestBudget ? 
        <>
          <div className="box box1 text-textB1 flex flex-col justify-between bg-bgdark">
          <div className="flex justify-between items-center text-textB1">
            <h1 className="font-semibold text-lg">Budget</h1>
            <p className="text-xs bg-bgsoft rounded p-1">New</p>
          </div>
          <div className="text-xs">{latestBudget.date}</div>
          <div className="flex justify-between items-center gap-4">
            <h1 className="font-bold text-4xl">
              ${latestBudget.budget.toLocaleString()}
            </h1>
            <TrendingUpIcon className="text-green-500" />
          </div>
        </div>

        {/* Box2 */}
        <div className="box box2 text-maintext flex flex-col gap-7 mdd:hidden">
          <div className="flex justify-between items-center">
            <h1 className="font-medium ">Balance</h1>
            <MoreHorizIcon />
          </div>
          <h1 className="font-bold relative">
            <span className="absolute -top-3">$</span>
            <span className={`text-4xl ml-3 ${remainingBudgetColor}`}>
              ${Math.abs(totalRemainingBudget).toLocaleString()}
            </span>
          </h1>
          <div className="flex gap-1 items-center">
            <TrendingUpIcon className="text-green-500" />
            <div className="text-xs">
              <span className="text-green-500">+35% </span>
              <span>from last Month</span>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div className="box box3 text-maintext flex flex-col gap-7">
          <div className="flex justify-between items-center">
            <h1 className="font-medium ">Net Expense</h1>
            <MoreHorizIcon />
          </div>
          <h1 className="font-bold relative">
            <span className="text-4xl ml-3 text-red-500">
              ${totalExpenses.toLocaleString()}
            </span>
          </h1>
          <div className="flex gap-1 items-center">
            <TrendingDownIcon className="text-red-500" />
            <div className="text-xs">
              <span className="text-red-500">-20% </span>
              <span>from last Month</span>
            </div>
          </div>
        </div>
        {/*  */}
        {/* Box 4 */}
        <div className="box box4 text-maintext col-span-1 row-span-3 lgg:row-span-2 mdd:col-span-3 ssm:col-span-1 ssm:row-[5]">
          <div className="flex justify-between items-center border-b border-borderr pb-2">
            <h1 className="font-medium  text-softText">Analytics</h1>
            <p className="text-sm">Breakdown</p>
          </div>
          {filteredExpenses.length > 0 ?
          <div className="w-full pt-2 h-[360px]">
            <PieChartC expenses={filteredExpenses} />
          </div>
          :<div className="grid place-content-center">
              <p className="text-red-500 font-semibold">No expenses to display</p>
          </div>
          }
        </div>

        {/* Box 5 */}
        <div className="box box5 text-maintext col-span-1 row-span-2 overflow-auto lgg:col-span-2 mdd:row-[2] ssm:col-span-1 ssm:row-[3]">
          <div className="flex justify-between items-center border-b border-borderr pb-2">
            <h1 className="font-medium  text-softText">Last Transaction</h1>
            <Link
              to="/expenses"
              className="text-xs hover:underline hover:scale-105 duration-150"
            >
              View all
            </Link>
          </div>
          {
            filteredExpenses.length > 0 ?
            <div className="flex flex-col mt-4 gap-5">
            {filteredExpenses &&
              filteredExpenses.map((expense) => (
                <div
                  className="flex items-center justify-between gap-1"
                  key={expense.id}
                >
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 bg-bgsoft rounded-full grid place-content-center text-xs uppercase">
                      {expense.purpose.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <p className=" font-semibold ssm:text-sm">
                        {expense.purpose}
                      </p>
                      <p className="text-softText text-[10px]">
                        {dateTime}
                      </p>
                    </div>
                  </div>
                  <div className={`font-medium text-red-500 ssm:text-sm`}>
                    ${expense.amount.toFixed(2)}
                  </div>
                </div>
              ))}
          </div>
          : <div className="grid place-content-center">
              <p className="text-red-500 font-semibold">No expenses to display</p>
          </div>
          }
        </div>

        {/* Box 6 */}
        <div className="box box6 text-maintext row-span-2 col-span-2 w-full lgg:col-span-3 mdd:col-span-2 mdd: ssm:col-span-1 ssm:row-[4]">
          <div className="flex justify-between items-center border-b border-borderr pb-2 gap-2">
            <h1 className="font-medium  text-softText">
              This Month's Expenses
            </h1>
            <p className="text-sm">Breakdown</p>
          </div>
          <div className="w-full pt-2 relative">
            <LineChartC />
          </div>
        </div>
        </>
        : <p>Add a budget to display</p>
        }

        {/* <div className="box text-maintext row-span-1 col-span-1">Box 7</div> */}
      </div>
    </div>
  );
};

export default Home;
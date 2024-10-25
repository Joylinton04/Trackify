import GridTable from "../component/GridTable";
import Header from "../component/Header";


const Expenses = () => {
  return (
    <div className="pad mt-4">
      <Header 
        title="Track Your Expenses" 
        text="Keep track and manage your expenses"
      />
      <GridTable/>
    </div>
  )
}

export default Expenses;
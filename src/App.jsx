import EmployeeList from "./Component/EmployeeList"
import List2 from "./Component/List2"
import List3 from "./Component/List3"
import Profile from "./Profile"


function App() {
  

  return (
    <>
    <div className="mb-8 flex flex-col justify-center mt-2 items-center">
      <h1 className="text-red-700 font-semibold text-3xl">Member Lists</h1>
      <hr className="w-8/12 text-gray-300 text-lg"/>
    </div>

     <div className="flex justify-center items-center ">
       <div> <Profile/> </div>
       <div> <List2/> </div>
       <div> <List3/> </div>
       <div> <EmployeeList/> </div>
     </div>

    </>
  )
}

export default App

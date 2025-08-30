import List2 from "./Component/List2"
import Profile from "./Profile"


function App() {
  

  return (
    <>
    <div>
      <h1 className="text-red-700 font-semibold text-3xl grid place-items-center mt-2">Member Lists</h1>
    </div>

     <div className=" grid grid-cols-4">
       <div><Profile/></div>
       <div><List2/></div>
       <div></div>
     </div>

    </>
  )
}

export default App

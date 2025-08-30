
const members = [
  {
    id: 1,
    name: 'Alice Cohen',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/65.jpg', 
  },
  {
    id: 2,
    name: 'Montina Belen',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/women/42.jpg', 
  },
  {
    id: 3,
    name: 'Stive sallon',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/11.jpg', 
  },
  {
    id: 4,
    name: 'Diana Jhone',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/51.jpg',
  },
  {
    id: 5,
    name: 'Dev Maria',
    role: 'DevOps Engineer',
    image: 'https://randomuser.me/api/portraits/women/20.jpg',
  },
  {
    id: 6,
    name: 'Mark jebur',
    role: 'QA Engineer',
    image: ' https://randomuser.me/api/portraits/women/56.jpg',
  },
  {
    id: 7,
    name: 'Haniman Lucas',
    role: 'Data Scientist',
    image: 'https://randomuser.me/api/portraits/men/21.jpg',
  },
  {
    id: 8,
    name: 'Hukker son',
    role: 'Content Strategist',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
];


const List3 = () => {
  return (
    <>
    {
        members.map((employee)=>(
             <div className="bg-slate-200 rounded-lg w-72 p-3 ml-3 flex flex-col justify-center items-center shadow-lg">
                        <div >
                            <img className="rounded-full mb-4" src={employee.image} alt="" />
                        </div>
                        <h4>Name : {employee.name}</h4>
                        <h4>Designation : {employee.role}</h4>
                    </div>
        ))
    }
    </>
  )
}

export default List3
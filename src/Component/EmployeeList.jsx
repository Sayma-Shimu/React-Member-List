
const members = [
  {
    id: 1,
    name: 'Alice Cohen',
    role: 'Frontend Developer',
    image: 'https://randomuser.me/api/portraits/men/45.jpg', 
  },
  {
    id: 2,
    name: 'Montina Belen',
    role: 'Backend Developer',
    image: 'https://randomuser.me/api/portraits/women/43.jpg', 
  },
  {
    id: 3,
    name: 'Stive sallon',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/14.jpg', 
  },
  {
    id: 4,
    name: 'Diana Jhone',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/53.jpg',
  },
  {
    id: 5,
    name: 'Dev Maria',
    role: 'DevOps Engineer',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    id: 6,
    name: 'Mark jebur',
    role: 'QA Engineer',
    image: ' https://randomuser.me/api/portraits/women/57.jpg',
  },
  {
    id: 7,
    name: 'Haniman Lucas',
    role: 'Data Scientist',
    image: 'https://randomuser.me/api/portraits/men/24.jpg',
  },
  {
    id: 8,
    name: 'Hukker son',
    role: 'Content Strategist',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
  },
];


const EmployeeList = () => {
  return (
    <>
       {
        members.map((people)=>(
             <div className="bg-slate-200 rounded-lg w-72 p-3 ml-3 flex flex-col justify-center items-center shadow-lg">
                        <div >
                            <img className="rounded-full mb-4" src={people.image} alt="" />
                        </div>
                        <h4>Name : {people.name}</h4>
                        <h4>Designation : {people.role}</h4>
                    </div>
        ))
       } 
    </>
  )
}

export default EmployeeList
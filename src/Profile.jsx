
const members = [
    {
        id: 1,
        name: 'Alice Johnson',
        role: 'Frontend Developer',
        image: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
        id: 2,
        name: 'Bob Smith',
        role: 'Backend Developer',
        image: 'https://randomuser.me/api/portraits/men/20.jpg',
    },
    {
        id: 3,
        name: 'Charlie Brown',
        role: 'UI/UX Designer',
        image: 'https://randomuser.me/api/portraits/women/90.jpg',
    },
    {
        id: 4,
        name: 'Diana Prince',
        role: 'Project Manager',
        image: 'https://randomuser.me/api/portraits/women/71.jpg',
    },
    {
        id: 5,
        name: 'Ethan Hunt',
        role: 'DevOps Engineer',
        image: 'https://randomuser.me/api/portraits/men/77.jpg',
    },
    {
        id: 6,
        name: 'Mark Gallagher',
        role: 'QA Engineer',
        image: 'https://randomuser.me/api/portraits/men/60.jpg',
    },
    {
        id: 7,
        name: 'George Lucas',
        role: 'Data Scientist',
        image: 'https://randomuser.me/api/portraits/men/30.jpg',
    },
    {
        id: 8,
        name: 'Hannah Baker',
        role: 'Content Strategist',
        image: 'https://randomuser.me/api/portraits/women/79.jpg',
    },
];


const Profile = () => {

    return (
        <>
            {
                members.map((member) => (

                    <div className="bg-slate-200 rounded-lg w-72 p-3 ml-3 flex flex-col justify-center items-center shadow-lg">
                        <div >
                            <img className="rounded-full mb-4" src={member.image} alt="" />
                        </div>
                        <h4>Name : {member.name}</h4>
                        <h4>Designation : {member.role}</h4>
                    </div>

                ))

            }


        </>
    )
}

export default Profile
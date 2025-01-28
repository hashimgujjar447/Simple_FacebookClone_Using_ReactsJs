function HomeRightSideBar() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "David Lee",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Emily Davis",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 6,
      name: "Michael Brown",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 7,
      name: "Olivia Wilson",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 8,
      name: "James Taylor",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="text-[#65686c] text-lg font-medium">Birthday</h1>
        <p className="mt-2 mb-4">
          <b>Rana</b> and <b> 2 others</b> have birthday today
        </p>
      </div>
      <hr className="border-[#d0d3d7] mb-4" />
      <div>
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-[#65686c] text-lg font-medium">Contacts</h1>
            <div className="icons flex gap-6">
              <i className="fa-solid text-sm fa-magnifying-glass text-[#636669]"></i>
              <i className="fa-solid text-sm  fa-bars text-[#636669]"></i>
            </div>
          </div>

          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3 mt-2 hover:bg-[#e6e8ea] p-1 rounded-lg cursor-pointer"
            >
              <img
                src={user.image}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <h1 className="text-[#65686c] text-sm font-medium">
                {user.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeRightSideBar;

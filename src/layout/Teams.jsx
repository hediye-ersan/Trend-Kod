export default function Team() {
    const teamMembers = [
      {
        name: "Erhan Fırat",
        role: "Project Owner",
        description: "the quick fox jumps over the lazy dog",
        image: "https://media.licdn.com/dms/image/v2/D4D35AQHmG2mNfZuUJg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731534958374?e=1737399600&v=beta&t=qL6b4KpMKN7KUeW3UZ7-zJ_zhRtNLCN8GuNQ5Rn0vPQ",
      },
      {
        name: "Gökhan Özdemir",
        role: "Scrum Master",
        description: "the quick fox jumps over the lazy dog",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1635783306921?e=1742428800&v=beta&t=gYylq9VxhBNLQxyu2I6i7fd3_TP8GajooKCo4B-01NU",
      },
      {
        name: "Hediye Ersan",
        role: "Full Stack Developer",
        description: "the quick fox jumps over the lazy dog",
        image: "https://media.licdn.com/dms/image/v2/D4D35AQFoohVsNxRWVg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1728899134440?e=1737399600&v=beta&t=293amM89o_EJXCUEHApsuv7AMImwoxAeUBEV9PpW_MQ",
      }
     
    ];
  
    return (
      <div className="flex flex-col items-center py-12 ">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-bold text-gray-800">Meet Our Team</h2>
          <p className="text-gray-600 mt-4">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4  p-6 rounded-lg shadow-lg  border-2 bg-gray-50 "
            >
              <div
                className="w-32 h-32 rounded-full overflow-hidden"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-blueText font-semibold">{member.role}</p>
              <h2 className="text-h5 font-bold ">{member.name}</h2>
              <p className="text-secondText text-center">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
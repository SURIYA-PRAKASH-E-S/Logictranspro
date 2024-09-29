import { Link } from 'react-router-dom';
import './Communitycard.css'

const CommunityCard = ({ community }) => {
  
    return (
        
        <div className="community-card">
            <h2>{community.name}</h2>
            <p>{community.description}</p>
            <p>Members: {community.members}</p>
            <p>Location: {community.location}</p>
            <Link to={`/vb`} style={{ textDecoration: 'none' }}>
                <button>Go to Community</button>
            </Link>
        </div>
    );
};

const RoadCom = () => {
    const communities = [
        {
            name: 'Community 1',
            description: 'This is a community for people who love cars.',
            members: 10,
            location: 'New York'
        },
        {
            name: 'Community 2',
            description: 'This is a community for people who love bikes.',
            members: 15,
            location: 'Los Angeles'
        }
    ];

    return (
        <section>
            <h1 class= "text-darked my-6 mt-5">RoadWay-Communities</h1>
            <div className="community-cards">
                {communities.map((community, index) => (
                    <CommunityCard key={index} community={community} />
                ))}
            </div>
        </section>
    );
};

export default RoadCom;
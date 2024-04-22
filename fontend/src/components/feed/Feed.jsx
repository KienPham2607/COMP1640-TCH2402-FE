import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share";

import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import contributionApi from "../../api/contributionApi";

const Feed = ({eventId}) => {
  const [contribution, setContribution]  = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try{
        const response = await contributionApi.getAll(eventId);

        const mockdata = response.data.map(item => {
          return {
            id: item._id,
            desc: item.content,
            uploads: item.uploads,
            date: item.submission_date,
            like: item.like_count,
            dislike: item.dislike_count,
            contributorFullName: item.contributor.full_name,
            contributorProfilePicture: item.contributor.profile_picture,
            comment: 15
          }
        })

        console.log('mockdata', mockdata);

        setContribution(mockdata)

      }catch (error) {
        console.log('Fail to fetch', error)
      }
    }
    fetchContributions();
  }, [eventId]);

  return (
    <div className="feed">
      <div className="feedWrapper">
      <Share />
        {contribution.length > 0 && contribution.map((p) => (
          <Post key={p.id} post={p} eventId={eventId}/>
        ))}
      </div>
    </div>
  );
};
export default Feed;


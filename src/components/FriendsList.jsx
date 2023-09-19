import { useEffect, useState } from "react";
import FriendData from './FriendData'
import AddFriend from "./AddFriend";

const FriendsList = () => {
  const [friend, setFriend] = useState([])
  const [refresh, setRefresh] = useState([])

  useEffect(() => {
    fetch('http://localhost:9999/api/friends')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(data => setFriend(data))
    .catch(err => console.log(err))
  }, [refresh])

  return ( 
    <div>
      <AddFriend reload={setRefresh} />
      {friend.map((item, key) => <FriendData buddy={item} key={key} />)}
    </div>
   );
}
 
export default FriendsList;
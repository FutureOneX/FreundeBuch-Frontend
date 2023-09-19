import './FriendData.css'

const FriendData = ({buddy}) => {
  return ( 
    <div className='apipull'>
      <p>Met when: {buddy.when}</p>
      <p>Name of Friend: {buddy.name}</p>
      <p>Located: {buddy.country}</p>
      <p>This is how we met: {buddy.how}</p>
      <p>Is {buddy.male?"He":""}{buddy.female?"she":""} your best friend?: {buddy.bestfriend?"Yes":"No"} </p>
      <p></p>
      <p>Is {buddy.male?"He":""}{buddy.female?"she":""} a close Friend {buddy.close?"Yes":"No"}</p>
    </div>
   );
}
 
export default FriendData;
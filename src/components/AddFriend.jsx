import { useRef } from "react";
import './AddFriend.css'

const AddFriend = (props) => {

  const whenRef = useRef()
  const nameRef = useRef()
  const countryRef = useRef()
  const howRef = useRef()
  const maleRef= useRef()
  const femaleRef = useRef()
  const bestfriendRef = useRef()
  const closeRef = useRef()

  function senden() {
    let friend = {
      when:whenRef.current.value,
      name:nameRef.current.value,
      country:countryRef.current.value,
      how:howRef.current.value,
      male:maleRef.current.checked,
      female:femaleRef.current.checked,
      bestfriend:bestfriendRef.current.checked,
      close:closeRef.current.checked,
    }
  fetch('http://localhost:9999/api/friends', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(friend)
  }).then(() => props.reload(prev => !prev))
    .then(() => {
        whenRef.current.value = '';
        nameRef.current.value = '';
        countryRef.current.value = '';
        howRef.current.value = '';
        maleRef.current.checked = false;
        femaleRef.current.checked = false;
        bestfriendRef.current.checked = false;
        closeRef.current.checked = false;
    })
  }

  return ( 
    <div className="formular">
      <input ref={whenRef} type="text" placeholder="Name"/>
      <input ref={nameRef} type="number" placeholder="Since when"/>
      <input ref={countryRef} type="text" placeholder="residential in"/>
      <input ref={howRef} type="text" placeholder="how did you became friends" />
      <label>Male
      <input ref={maleRef} type="radio" name="IsMale" value="true" />
      </label> 
      <label>Female
      <input ref={femaleRef} type="radio" name="IsMale" value="false" />
      </label>
      <input ref={bestfriendRef} type="checkbox" id="bestfriend"/>
      <label htmlFor="bestfriend">is this your best friend?</label>
      <input ref={closeRef} type="checkbox" id="close"/>
      <label htmlFor="close">is it your inner cirkle?</label>
      <button onClick={senden}> Submit </button>
    </div>
   );
}
 
export default AddFriend;
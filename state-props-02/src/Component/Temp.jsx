import React from 'react'

function Temp({name, age,  changeName}) {
  return (
      <>
          hello i am {name}
          <br />
          my age is {age}
<button onChange={changeName}>submit</button>
      </>
  )
}

export default Temp
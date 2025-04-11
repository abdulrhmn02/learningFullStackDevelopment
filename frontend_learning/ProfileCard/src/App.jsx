import { useState } from 'react'
import ProfileCard from './ProfileCard'
import team from './data'
import './index.css'

function App() {
  

  return (
    <>
    <div className="container">
      {team.map((member) => (
        <ProfileCard
          key={member.id}
          image={member.image}
          name={member.name}
          bio={member.bio}
          linkedin={member.linkedin}

        />
      ))}
    </div>
 
    </>
  )
}

export default App

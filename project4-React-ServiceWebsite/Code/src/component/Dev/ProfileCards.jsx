import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import "./styles/profileCard.scss"


function ProfileCards() {
  const [users] = useState([
    { name: "Mohammad Bdour", title: "Web Developer", personalImg: "https://avatars0.githubusercontent.com/u/72431203?s=460&u=232c95d84afc3c7419d9ca6cdb5ded6cba6f541f&v=4", facebook: "https://web.facebook.com/mhmd6bdour", github: "https://github.com/mhmdbdour", linkedin: "https://www.linkedin.com/in/mohammad-bdour/" },

    { name: "Taima Al-fokaha", title: "Web Developer", personalImg: "https://avatars3.githubusercontent.com/u/71769659?s=460&u=f79c2bdf655b094836b60d58a15f4a478631e827&v=4", facebook: "https://web.facebook.com/taima.alfokaha", github: "https://github.com/alfokaha-taima", linkedin: "https://www.linkedin.com/in/taima%E2%80%99-al-fokaha%E2%80%99/" },

    { name: "Razan Zuaiter", title: "Web Developer", personalImg: "https://avatars3.githubusercontent.com/u/71584804?s=460&u=3b941316bf72ff47d8fef9577006e2b54ba5462e&v=4", facebook: "https://web.facebook.com/Razan.zaiter.13", github: "https://github.com/Razan-Zuaiter", linkedin: "https://www.linkedin.com/in/razan-zuaiter/" },
    { name: "Leen Awwaad ", title: "Web Developer", personalImg: "https://avatars1.githubusercontent.com/u/71584197?s=460&u=acdb0910edcf720810881c66bea899d5ba4a0a59&v=4", facebook: "https://web.facebook.com/leen.awad.10?_rdc=1&_rdr", github: "https://github.com/leen-awad", linkedin: "https://www.linkedin.com/in/leen-awad/" },
    { name: "Ahmad E'mar", title: "Web Developer", personalImg: "https://avatars0.githubusercontent.com/u/71763607?s=460&u=40b3c151bf4dbd5216fcc21363ffb7533d1beccb&v=4", facebook: "https://web.facebook.com/ahmada3mar?_rdc=1&_rdr", github: "https://github.com/ahmada3mar", linkedin: "https://www.linkedin.com/in/ahmada3mar/" },

  ]);


  return (
    <div>


      <div className="flex-container">
        {users.map(user => (
          <ProfileCard name={user.name} title={user.title} personalImg={user.personalImg} facebook={user.facebook} github={user.github} linkedin={user.linkedin} />
        ))}
      </div>
    </div>

  )
}
export default ProfileCards;
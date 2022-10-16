import React from 'react';
import { useEffect, useState} from 'react';



let image = {
    id: 0,
    name:"",
    imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQHfj1tI2lIj3g/profile-displayphoto-shrink_800_800/0/1652459132698?e=1671667200&v=beta&t=U2qHjooOQbyxZssq53gCb3sQVfvVigXObN0B7MGpX5A"

}

export default function Profile() {
    function loadActivity() {
        fetch("https://www.boredapi.com/api/activity")
            .then((response) => response.json())
            .then((data) => setActivity(data.activity))
    }

    const [activity, setActivity] = useState([]);
    useEffect(() => {
        loadActivity();
    }, []);

  return (
    
    <div>
        <img id = {image.id++} src= {image.imageURL} alt = {image.name}></img>
        <h1>{activity}</h1>
        <p> ^ API call.  Refresh to reload</p>
    </div>
  )

}

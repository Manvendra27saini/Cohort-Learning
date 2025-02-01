/*
import { useState } from 'react'
import { PostComponent } from './assets/post'

function App() {
  const [posts, setPosts] = useState([]); 

  const postComponents = posts.map(post =>
    <PostComponent
      key={post.name}
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      image={post.image}
      description={post.description}
    />
  );

  function addPost() {
    setPosts([...posts, {
      name: "Harkirat",
      subtitle: "5000 followers",
      time: "2 hours ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "Want to know how to win big? Check how these folks were able to win $3000"
    }]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  );
}

export default App;




import { useEffect ,useState } from "react";
function App(){
  const [count ,setCount] =useState(1);

  function increaseCount(){
    setCount(currentValue => currentValue + 1);
  } 

  useEffect(function(){
    setInterval(increaseCount, 1000);
  },[])

  return <div>
    {count}
  </div>
}

export default App;


import { useEffect ,useState } from "react";


function App(){
  const [currentTab,setCurrentTab] = useState("feed");

  useEffect(function(){
    console.log("Send a request to the " +currentTab);
  },[currentTab])

  return <div>
    <button onClick ={()=> setCurrentTab("feed")} style={{color:currentTab=="feed" ? "red" :"black"}}>Feed</button>
    <button onClick ={()=> setCurrentTab("notifications")} style={{color:currentTab=="notifications" ? "red" :"black"}}>Notifications</button>
    <button onClick ={()=> setCurrentTab("messages")} style={{color:currentTab=="messages" ? "red" :"black"}}>Messages</button>
    <button onClick ={()=> setCurrentTab("jobs")}  style={{color:currentTab=="jobs" ? "red" :"black"}}>Jobs</button>
  </div>
}

export default App;


import { useEffect ,useState } from "react";

function App(){
  const [currentTab,setCurrentTab] = useState("feed");

  useEffect(function(){
    console.log("Send a request to the " +currentTab);
  },[currentTab])

  return <div>
    <button onClick ={()=> setCurrentTab("feed")} style={{color:currentTab=="feed" ? "red" :"black"}}>Feed</button>
    <button onClick ={()=> setCurrentTab("notifications")} style={{color:currentTab=="notifications" ? "red" :"black"}}>Notifications</button>
    <button onClick ={()=> setCurrentTab("messages")} style={{color:currentTab=="messages" ? "red" :"black"}}>Messages</button>
    <button onClick ={()=> setCurrentTab("jobs")}  style={{color:currentTab=="jobs" ? "red" :"black"}}>Jobs</button>
  </div>
}

export default App;
*/

import { useEffect ,useState } from "react";

function App(){
  return <div style ={{display:"flex", background:"pink",justifyContent:"center"}}>  
    <Card >
    <div style= {{color:"white"}}>
      What do you want to do? <br/>
      <input type={"text"} /> 
      </div>
    </Card>
    <Card >
        "Hi there"
    </Card>
  </div>

}


function Card({children}){
  return <div style={{ backgroundColor: "gray", borderRadius: 10, color: "white",padding : 20,marginLeft:10,marginRight:10 }}>
    {children}
  </div>
}

export default App;


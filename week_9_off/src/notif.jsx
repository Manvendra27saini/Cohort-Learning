function NotificationCounter  (){
    const [notificationCount , setNotificationCount] = useState(0);
    function increament(){
      setNotificationCount(notificationCount + 1);
  
    }
    return(
      <div>
        <button onClick={increament}>Notification</button>
        {notificationCount}
      </div>
    )
     
  }
  
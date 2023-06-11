    
      function showhint()  {
      let hint = "username:admin pass:admin";
      alert(hint);
      }
      
      
       function loginchecker()  {
        
        let username = document.getElementById("user").value;
        let password = document.getElementById("pass").value;
        if (username === "admin" && password === "admin" ) {
           
           alert("login succseful");
           window.location.href="index2.html";
        } else{
        
        alert("HERE'S A HINT USE THE HINT!!");        }
        
        
        }        
        
        


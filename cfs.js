let Name ='Kentdrick Felipe'; 
let Address ='Lintic, Banayoyo, Ilocos Sur'; 
let Age = 20; 
let classrole='Teacher'; 
  
const course = "BSCS"; 
  
if (course === "BSCS"){ 
  
    if (classrole === "Officer"){ 
  
        console.log("Officer Detected."); 
  
    } else if (classrole == "Student"){ 
        var password = "kentbscs"; 
        if (password >=12){ 
  
            console.log("Student Name:"+ Name); 
  
            for (var i = 0; i < Age; i++){ 
                console.log("Address:"+Address); 
             } 
        } else { 
  
            console.log("Access denied."); 
        } 
    } else if (classrole == "Teacher"){ 
  
        console.log("Teacher class detected."); 
    } else { 
  
        console.log("Invalid Class Role."); 
    } 
} else if (course =="BAEL"){ 
    console.log("You are in BAEL course.");
} else if  (course == "BSM") { 
    console.log("You are in BSM course.");
} else { 
    console.log("Invalid course."); 
}
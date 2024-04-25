//! Create your own resume data in JSON format

var myResume={
    "basics":{
        "name":"SHARMELA DEVI J",
        "email":"sharmejayakumar26@gamil.com",
        "mobile":"8637450090",
        "degree":"M.Sc(C.S)",
        "location":{
            "address":"No 5/8 4th cross street Teacher's colony",
            "postalCode":600118,
            "city":"Chennai",
            "state":"Tamilnadu",
            "country":"India"
        },
    "profile":[
        {
        "website":"https://www.linkedin.com/in/sharmela-devi-12942b187/",
        "github":"https://github.com/Sharme03/"
        }]
    },
    "work":[
        {
        "company1":"Access Healthcare Services Pvt. Ltd",
        "designation":"Senior Client Partner",
        "joinDate":"2017-14-03",
        "endDate":"2019-16-12"
        },
        {
        "company1":"Global Healthcare Billing partners Pvt. Ltd",
        "designation":"Senior Executive",
        "joinDate":"2019-12-23",
        "endDate":"2023-19-03"
        }
    ],
    "education":[
        {
        "institution": "Jaya Arts and Science College",
        "department": "M.Sc (Computer Science)",
        "studyType": "fulltime",
        "batch start year": 2014,
        "batch end year": 2016,
        "gpa": 7.5,
        }
    ],
    "skills":[
        {
        "name":"javascript,HTML,CSS",
        "level":"beginer",
        }
    ],
    "languages":[
        {
        "language":"Tamil,English",
        }
    ],
    "certificateCourse":[
        {
        "name":"HDCA-Honours Diploma in Computer Application"
        }
    ]
}
console.log(myResume);

//! For the above JSON, iterate over all for loops

var obj=[{
    "name":"venkat",
    "mail":"venkat03@gmail.com",
    "mobile":8694523975,
    "age":30
    },
    {
    "name":"jagan",
    "mail":"jagan03@gmail.com",
    "mobile":8963251710,
    "age":25
    }
];

//! For loop

for(var i=0;i<obj.length;i++){
    var pro=obj[i];
    // console.log(pro.name);
    console.log(pro.mail);
    // console.log(pro.mobile);
    // console.log(pro.age);
}

//! For In loop

for(var key in obj){
    if(obj.hasOwnProperty(key)){
        // console.log(obj[key].name);
        // console.log(obj[key].mail);
        console.log(obj[key].mobile);
        // console.log(obj[key].age);
    }
}

//! For Of loop

let text = "";
for(let x of obj[key].name) {
text += x; 
}
console.log(text);


//! For Each 

obj.forEach(function(pro){console.log(pro.age);});
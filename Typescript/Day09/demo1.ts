//Array of Object

let arrobj=[
  {
    id:9,
    fname:'Sumit',
    lname:'Raokhande',
    country:{
      cid:1,
      cname:'India'
    },
    month:['Jan','March','May'],
    result:[
      {
        subj:'M1',
        marks:40
      },
      {
        subj:'M2',
        marks:45
      },
      {
        subj:'M3',
        marks:55
      }
    ]
  },
  {
    id:6,
    fname:'Kiran',
    lname:'Raokhande',
    country:{
      cid:2,
      cname:'Austrila'
    },
    month:['Feb','April','June'],
    result:[
      {
        subj:'M1',
        marks:48
      },
      {
        subj:'M2',
        marks:55
      },
      {
        subj:'M3',
        marks:65
      }
    ]
  },
  {
    id:3,
    fname:'Spruha',
    lname:'Raokhande',
    country:{
      cid:3,
      cname:'Japan'
    },
    month:['July','Aug','Dec'],
    result:[
      {
        subj:'M1',
        marks:50
      },
      {
        subj:'M2',
        marks:65
      },
      {
        subj:'M3',
        marks:85
      }
    ]
  }
];

for(let i=0;i<arrobj.length;i++){
  console.log(`
      ID        :: ${arrobj[i].id}
      First Name:: ${arrobj[i].fname}
      Last Name :: ${arrobj[i].lname}
    Country Name:: ${arrobj[i].country.cname}
      Month     :: ${arrobj[i].month.join(' ')}
      ------Result---------
  `)

  for(let j=0;j<arrobj[i].result.length;j++){
      console.log(`
            Subject :: ${arrobj[i].result[j].subj}
            Marks   :: ${arrobj[i].result[j].marks}
      `)
  }

}
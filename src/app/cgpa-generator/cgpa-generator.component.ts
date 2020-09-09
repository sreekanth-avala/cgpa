import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cgpa-generator',
  templateUrl: './cgpa-generator.component.html',
  styleUrls: ['./cgpa-generator.component.css']
})
export class CgpaGeneratorComponent implements OnInit {
  showButton:boolean=false;
 pointList:any[]=[];
 semisters:any={
  "sem1":{ "points":null, "credit":23},
  "sem2":{ "points":null, "credit":23},
  "sem3":{ "points":null, "credit":22},
  "sem4":{ "points":null, "credit":24},
  "sem5":{ "points":null, "credit":20},
  "sem6":{ "points":null, "credit":12},
 };
  constructor() { }

  ngOnInit(): void {
   this.pointList=this.getPoints();
  }

  getPoints(){
    let point:any[]=[];
    for(let i=4;i<=10;i=i+0.01){
     point.push(i.toFixed(2))
    }
    return point;
  }
  onPointChange(value,sem){
   this.semisters[sem]["points"]=value;
  }

  validateInputs(){
    for (var key in this.semisters) {
      if (this.semisters.hasOwnProperty(key)) {
        var val = this.semisters[key];
        if(val['points']==null){
          console.log('check... ')
          return false
        }
      }
    }
    return true;
  }
  
  onSubmit(){
    let total_points:number=0;
    for (var key in this.semisters) {
      if (this.semisters.hasOwnProperty(key)) {
        var val = this.semisters[key];
        console.log("every sem sum .....",val['credit']*val['points']);
        total_points += val['credit']*val['points'];
      }
    }
    let cgpa =(total_points / 124).toFixed(2);
    
   console.log((total_points / 124)," CGPA HERE") ;
   this.sweetAlert(cgpa);
  }

  //for alert popup  refer sweetalert2 npm
  sweetAlert(cgpa){
    Swal.fire({
      html:`<p>According to OU </p>
                <h3 class='cgpa'> <span>you got</span> <b class='text-success'>${cgpa}</b> <span> CGPA </span></h3>`,
      width: 600,
      padding: '3em',
      background: '#e3e3e3',
      backdrop: `
        rgba(0,0,123,0.4)
        url("http://www.clipartsmania.com/gif/animals_gif/monket_animal_swing_animation_clipart.gif")
        left top
        no-repeat
      `
    })
  }

  
}


// sem1 -----23
// sem2 -----23
// sem3 -----22
// sem4 -----24
// sem5 -----20
// sem6 -----12

// total cred= 124



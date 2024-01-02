import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientDetailsService } from 'src/app/service/patient-details.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  
  constructor(private pd:PatientDetailsService){

  }


  @ViewChild('form') form:NgForm;

  
  firstName:string;
  lastName:string;
  phone:string;
  dob:string;
  email:string;
  gender:string;
  aadhar:string;
  pan:string;
  driving:string;

  add1:string;
  add2:string;
  city:string;
  pincode:string;

  editIndex:number;
  editObj:any;

  defaultGender:string = "Male"

  editing:boolean = false

  onSubmitBtnClicked(){
    console.log("submit works....")
    console.log(this.form)


    this.firstName = this.form.value.firstname
    this.lastName = this.form.value.lastname
    this.phone = this.form.value.phone
    this.dob = this.form.value.dob
    this.email = this.form.value.email
    this.gender = this.form.value.gender
    this.aadhar = this.form.value.aadhar
    this.pan = this.form.value.pan
    this.driving = this.form.value.driving

    this.add1 = this.form.value.add1
    this.add2 = this.form.value.add2
    this.city = this.form.value.city
    this.pincode = this.form.value.pincode

    // console.log(this.firstName,this.lastName, this.phone, this.dob, this.email, this.gender, this.aadhar, this.pan, this.driving, this.add1, this.add2, this.city, )
    
    if (this.editing === true){
      this.editingMethod(this.editIndex)
    }
    else{
      this.adding()
    }

    
  }

  oldId:string;
  editingMethod(index:number){
    this.pd.edit(this.form.value, index, this.oldId)
    this.form.resetForm()
  }

  adding(){
    this.pd.addPatient(this.form.value)
    // console.log(this.form.value)
    this.form.resetForm()
  }

  setDefaultValues(){
    this.form.form.patchValue({
      gender:"Male"
    })
  }

  ngOnInit(){
    this.getAllPatients()
  }
  patients:any;
  getAllPatients(){
    this.patients = this.pd.getAllPatients()
    // console.log(this.patients)
  }

 
  onEditBtnClicked(id:string, editIndex:number){
    this.editIndex = editIndex
    this.editing = true;
    this.editObj = this.pd.editPatient(id)
    // console.log(this.editObj)
    this.oldId = this.editObj.id

    if (this.editing){
      this.form.form.patchValue({
        firstname:this.editObj.firstname,
        lastname:this.editObj.lastname,
        phone:this.editObj.phone,
        dob:new Date(this.editObj.dob).toLocaleDateString,
        email:this.editObj.email,
        gender:this.editObj.gender ,
        aadhar:this.editObj.aadhar ,
        pan:this.editObj.pan,
        driving:this.editObj.driving ,

        add1:this.editObj.add1,
        add2:this.editObj.add2,
        city:this.editObj.city,
        pincode:this.editObj.pincode,
          
      })
    }
  }

  onDeleteBtnClicked(index:number){
    if(this.pd.deletePatient(index)){
      console.log("item deleted...")
    }
  }
}

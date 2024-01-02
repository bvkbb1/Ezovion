import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientDetailsService {

  constructor() { }

  patientDetails:any = [
    {id:'1', firstname:'vinay', lastname:'bantubilli', phone:'9052522674',dob:'05-05-2001',email:'vinay@gmail.com',gender:'Male',aadhar:'606041842908',pan:'JMAPK6380Q',driving:'GHhj45', add1:'Gidijala', add2:'Anandapuram', city:'Visakhapatnam', pincode:'531173'},
    {id:'2', firstname:'bujji', lastname:'bb', phone:'9052525674',dob:'05/05/2001',email:'vinay@gmail.com',gender:'Female',aadhar:'606041842908',pan:'JMAPK6380Q',driving:'GHhj45', add1:'Gidijala', add2:'Anandapuram', city:'Visakhapatnam', pincode:'531173'},
  ]

  getAllPatients(){
    return this.patientDetails;
  }

  id:number = 3;
  addPatient(patient:any){
    patient.id = this.id++
    console.log(patient)
    return this.patientDetails.push(patient)
  }

  editPatient(id:string){
    return this.patientDetails.find((patient)=>patient.id === id)
  }

  edit(patient:any, editIndex:number, oldId:string){

    patient.id = oldId
    console.log(patient.id, patient)
    this.patientDetails[editIndex] = patient
  }

  deletePatient(index:number){
    return this.patientDetails.splice(index,1)
  }
}

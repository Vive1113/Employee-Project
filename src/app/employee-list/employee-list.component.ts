import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent  implements OnInit {

  firstName : String = '';
  employeeFoundBySearch : Employee[] = [];
  gradeValue : number = 0;
  employees: Employee[] = [];
  

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
console.log(this.employees);
      
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
  confirmDelete(employee:Employee){
    var status = confirm("Do you want to delete this Record?");
    if(status==true){
      this.deleteEmployee(employee.id);
    }
  }
    confirmUpdate(employee:Employee){
      var status = confirm("Do you want to update this Record?");
      if(status==true){
        this.updateEmployee(employee.id);
      }
    else{
      this.getEmployees();
    }
  }
  removeAllEmployees(): void{
    var status=confirm("Be aware this will remove all the records!! Do you really want to persue?");
    if(status==true){
    this.employeeService.deleteAll().subscribe(
      data => {
        console.log(data);
        this.getEmployees();
      },
      error => {
        console.log(error);
      }
    );
    }}
    searchByName(){
      this.employeeService.findByName(this.firstName).subscribe( data => {
        this.employees = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
    }
    
  }

  


 



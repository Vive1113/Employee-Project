import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
   
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      console.log("h1i");
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    if(this.employee.employeeName === '' || this.employee.email === '' || this.employee.contactNo === '' || this.employee.city === '' || this.employee.gender === '' || this.employee.dateOfBirth === '' || this.employee.position === ''){
      var status = confirm("Please fill all the fields");
    }
    else{
    var status = confirm("Do you want to insert employee records?");
    if(status==true){
      var status = confirm("Inserted Successfully!");
      
   console.log(this.employee);
    this.saveEmployee();
  }
}
}
}







 
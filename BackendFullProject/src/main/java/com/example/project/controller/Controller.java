package com.example.project.controller;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.ExceptionHandling.ResourceNotFound;
import com.example.project.Repository.Repository;
import com.example.project.Employee.Employee;

/* @RestController annotation is applied to a class to mark it as a request handler. 
 * This annotation itself annotated with @Controller and @ResponseBody. 
 * @Controller is used for mapping
 * @ResponseBody annotation tells a controller that the object returned is automatically serialized into JSON 
 * and passed back into the HttpResponse object. */

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/employeeDetails/")
public class Controller {
	@Autowired
	private Repository repository;

	// get all Employees
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> getAllEmployees(@RequestParam(required = false) String name){

		try {
			List<Employee> employeeList = new ArrayList<Employee>();
			if(name != null) {
				repository.findByEmployeeNameContaining(name).forEach(employeeList::add);
				return new ResponseEntity<>(employeeList, HttpStatus.OK);
			}
			else {
				employeeList = repository.findAll();
				return new ResponseEntity<>(employeeList, HttpStatus.OK);
			}
		} catch(Exception excep) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	// create Employee rest api
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return repository.save(employee);
	}

	// get Employee by id rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
		Employee employee = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}




	// update Employee rest api

	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails){
		Employee employee = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Employee not exist with id :" + id));

		employee.setEmployeeName(employeeDetails.getEmployeeName());
		employee.setEmail(employeeDetails.getEmail());
		employee.setContactNo(employeeDetails.getContactNo());
		employee.setCity(employeeDetails.getCity());
		employee.setGender(employeeDetails.getGender());
		employee.setDateOfBirth(employeeDetails.getDateOfBirth());
		employee.setPosition(employeeDetails.getPosition());

		Employee updatedEmployee = repository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
	}

	// delete Employee rest api
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id){
		Employee employee = repository.findById(id)
				.orElseThrow(() -> new ResourceNotFound("Employee not exist with id :" + id));

		repository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	@DeleteMapping("/employees")
	public ResponseEntity<HttpStatus> deleteAllEmployees(){
		try {
			repository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}

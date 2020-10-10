const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee();
  
    expect(employee.name).toBe('');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('');
    expect(employee.role).toBe('');

});

test('get employee name, id, email, and role', () => {
    const employee = new Employee();
  
    expect(employee.getName()).toHaveProperty('name');
    expect(employee.getId()).toHaveProperty('id');
    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.getRole()).toHaveProperty('role');


});


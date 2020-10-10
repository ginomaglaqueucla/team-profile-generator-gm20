const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Dave', 1, 'hello@world.com', 'Manager');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('hello@world.com');
    expect(employee.role).toBe('Employee');
});

test('get employee name, id, email, and role', () => {
    const employee = new Employee('Dave', 1, 'hello@world.com', 'Manager');
  
    expect(employee.getName()).toHaveProperty('name');
    expect(employee.getId()).toHaveProperty('id');
    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.getRole()).toHaveProperty('role');
});


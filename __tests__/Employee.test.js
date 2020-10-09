const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Dave', 2, 'hello@world.com', 'Manager');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('hello@world.com');
    expect(employee.role).toBe('Manager');

});
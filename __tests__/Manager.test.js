const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Dave', 1, 'hello@world.com', 'Manager');
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('hello@world.com');
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
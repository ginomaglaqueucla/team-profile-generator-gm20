const Intern = require('../lib/Intern');

test('creates a Intern object', () => {
    const intern = new Intern('Jared', 2, 'hello@world.com', 'Intern', 'CSULB');
  
    expect(intern.name).toBe('Jared');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('hello@world.com');
    expect(intern.role).toBe('Intern');
    expect(intern.school).toEqual('CSULB');
});

test('get intern school', () => {
    const intern = new Intern('Jared', 2, 'hello@world.com', 'Intern', 'CSULB');
  
    expect(intern.getSchool()).toHaveProperty('school');
});
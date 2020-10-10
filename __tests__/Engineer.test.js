const Engineer = require('../lib/Engineer');

test('creates a Engineer object', () => {
    const engineer = new Engineer('Jared', 2, 'hello@world.com', 'Engineer', 'jaredgit');
  
    expect(engineer.name).toBe('Jared');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('hello@world.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toEqual('jaredgit');
});

test('get engineer github', () => {
    const engineer = new Engineer('Jared', 2, 'hello@world.com', 'Engineer', 'jaredgit');
  
    expect(engineer.getGithub()).toHaveProperty('github');
});
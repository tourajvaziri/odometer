jest.unmock('../../odometer'); // unmock to use the actual implementation of odometer

describe('truncate', () => {
  it('truncates 10.3 t0 10', () => {
    const truncate = require('../../odometer');
    expect(truncate(10.3)).toBe(10);
  });
});

describe('truncate', () => {
  it('truncates -1.3 to -1', () => {
    const truncate = require('../../odometer');
    expect(truncate(-1.3)).toBe(-1);
  });
});

describe('round', () => {
  it('rounds 4.22 to 4', () => {
    const round = require('../../odometer');
    expect(round(4.22, null)).toBe(4);
  });
});

describe('round', () => {
  it('rounds 4.28 to 4.3', () => {
    const round = require('../../odometer');
    expect(round(4.28, 1)).toBe(4.3);
  });
});


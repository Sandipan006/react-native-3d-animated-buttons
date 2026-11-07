describe('triggerHaptic', () => {
  beforeEach(() => jest.resetModules());

  it('calls expo-haptics with the matching impact style', async () => {
    const impactAsync = jest.fn(() => Promise.resolve());
    jest.doMock('expo-haptics', () => ({
      impactAsync,
      ImpactFeedbackStyle: { Light: 'light', Medium: 'medium', Heavy: 'heavy' },
    }));
    const { triggerHaptic } = require('./haptics.adapter');

    await triggerHaptic('Medium');

    expect(impactAsync).toHaveBeenCalledWith('medium');
  });

  it('does nothing when expo-haptics is not installed', async () => {
    jest.doMock('expo-haptics', () => {
      throw new Error("Cannot find module 'expo-haptics'");
    });
    const { triggerHaptic } = require('./haptics.adapter');

    await expect(triggerHaptic('Heavy')).resolves.toBeUndefined();
  });

  it('swallows errors from devices without a haptic engine', async () => {
    jest.doMock('expo-haptics', () => ({
      impactAsync: () => Promise.reject(new Error('unsupported')),
      ImpactFeedbackStyle: { Light: 'light', Medium: 'medium', Heavy: 'heavy' },
    }));
    const { triggerHaptic } = require('./haptics.adapter');

    await expect(triggerHaptic('Light')).resolves.toBeUndefined();
  });
});

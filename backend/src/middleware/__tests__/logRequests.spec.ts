import logRequests from '../logRequests'

jest.mock('cls-hooked', () => ({
  getNamespace: () => ({
    get: jest.fn(),
  }),
}))

xdescribe('logRequests middleware', () => {
  it('should call a logger', () => {
    const nextSpy = jest.fn()
    const logSpy = { trace: jest.fn() }
    const mw = logRequests(logSpy)

    mw({}, {}, nextSpy)
    expect(mw).toHaveLength(3)
    expect(nextSpy).toHaveBeenCalled()
    expect(logSpy.trace).toHaveBeenCalled()
  })
})

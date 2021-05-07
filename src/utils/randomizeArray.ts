

export default <T>(input: T[], force = false): T[] =>  {
	
	// always return input if test.
	if (!force && process.env.NODE_ENV === 'test') {
		return input.concat()
	}
	return input.concat().sort(() => Math.random() - 0.5)
}
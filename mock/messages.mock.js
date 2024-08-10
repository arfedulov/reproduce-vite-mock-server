export default [
    {
        pattern: '/api/messages',
        method: 'GET',
        handle: (req, res) => {
            res.setHeader('Content-Type', 'application/json')

            res.end(JSON.stringify({
                data: [
                    {
                        content: 'mock message 1'
                    },
                    {
                        content: 'mock message 2'
                    }
                ]
            }))
        }
    },
]
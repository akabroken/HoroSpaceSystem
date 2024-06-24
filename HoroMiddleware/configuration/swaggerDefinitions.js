const exampleResponse = {
    tags: ['Todo Controller'],
    summary: 'Retrieve an example',
    description: 'Retrieve an example from the API',
    responses: {
        200: {
            description: 'Successfully retrieved example',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: { type: 'string' },
                        },
                    },
                },
            },
        },
    },
};

module.exports = {
    exampleResponse,
};

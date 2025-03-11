module.exports = (error, request, response, next) => {
    console.log('ERROR HANDLER ->', error);
    response.sendStatus(500);
}
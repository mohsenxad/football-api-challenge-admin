const express = require('express');
var bodyParser = require('body-parser')
require('dotenv').config();

const packageJson = require('./package.json');

var app = express();
app.use(bodyParser.json())

app.use(function(req, res, next) 
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, eventid, challengeid");
        next();
    }
);

const challengeServices = require('./src');

app.get('/isAlive', 
    (req, res) => 
        {
            const result = {
                emoji : '🙂',
                name: packageJson.name,
                version : packageJson.version
            }
            sendResult(res, result);
        }
);

app.post('/challenge/add',
    async (req, res) => 
        {
            try 
                {
                    const challengeInfo = req.body.challenge;

                    const challengeId = await challengeServices.addChallenge(
                        challengeInfo
                    );

                    const result = {
                        challengeId: challengeId
                    };

                    sendResult(res, result);
                    
                }
            catch (error)
                {
                    processError(res, error);
                }
            

        }
)

app.get('/challenge/get',
    async (req, res) =>
        {
            try 
                {
                    const challengeId = req.headers.challengeid;
                    const challenge = await challengeServices.getChallengeById(
                        challengeId
                    );
                    const result = {
                        challenge: challenge
                    };
                    sendResult(
                        res,
                        result
                    );
                    
                }
            catch (error)
                {
                    processError(
                        res,
                        error
                    );
                }
        }
)

app.post('/challenge/update',
    async (req,res) => 
        {
            try 
                {
                    const challengeId = req.body.challengeId;
                    const challengeInfo = req.body.challenge
                    if(
                        challengeId,
                        challengeInfo
                    )
                        {
                            const updateChallengeResult = await challengeServices.updateChallenge(
                                challengeId,
                                challengeInfo
                            );
                
                            const result = {
                                updateChallengeResult:updateChallengeResult 
                            };
                
                            console.log(result);
                            sendResult(
                                res,
                                result
                            );
                        }
                    else
                        {
                            const InvalidParametersError = new Error("Invalid Parameters");
                            processError(
                                res,
                                InvalidParametersError
                            );
                        }   
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    );
                }
            

        }
)

app.delete('/challenge/delete',
    async (req, res) => 
        {
            try 
                {
                    const challengeId = req.headers.challengeid;
                    const deleteResult = await challengeServices.deleteChallengeById(
                        challengeId
                    )

                    const result = {
                        deleteResult: deleteResult
                    };
    
                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
                {
                    
                }
        }
)


app.get('/challenge/getAllByEvent',
    async (req, res) =>
        {
            try 
                {
                    const eventId = req.headers.eventid;
                    const challengeList = await challengeServices.getAllChallengeByEvent(
                        eventId
                    );
                    const result = {
                        challengeList: challengeList
                    };
                    sendResult(res, result);
                    
                }
            catch (error)
                {
                    processError(res, error);
                }
        }
)

app.post('/challenge/postOnTelegram',
    async (req,res) => 
        {
            try 
                {
                    const challengeId = req.body.challengeId;
                    if(
                        challengeId
                    )
                        {
                            const postChallengeResult = await challengeServices.postChallengeOnTelegramChannel(
                                challengeId
                            );
                
                            const result = {
                                postChallengeResult: postChallengeResult 
                            };
                
                            console.log(result);
                            sendResult(
                                res,
                                result
                            );
                        }
                    else
                        {
                            const InvalidParametersError = new Error("Invalid Parameters");
                            processError(
                                res,
                                InvalidParametersError
                            );
                        }   
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    );
                }
            

        }
)

app.post('/challenge/setResultOption',
    async (req,res) => 
        {
            try 
                {
                    const challengeId = req.body.challengeId;
                    const challengeOptionId = req.body.challengeOptionId;
                    if(
                        challengeId &&
                        challengeOptionId
                    )
                        {
                            const setChallengeResultResult = await challengeServices.setChallengeResult(
                                challengeId,
                                challengeOptionId
                            );
                
                            const result = {
                                setChallengeResultResult: setChallengeResultResult 
                            };
                
                            console.log(result);
                            sendResult(
                                res,
                                result
                            );
                        }
                    else
                        {
                            const InvalidParametersError = new Error("Invalid Parameters");
                            processError(
                                res,
                                InvalidParametersError
                            );
                        }   
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    );
                }
            

        }
)

function sendResult
(
    res,
    data
)
    {
        res.json(data);
    }

function processError(
    res,
    error
)
    {
        console.log(error);
        res.status(400).json(
            {
                message: error.message 
            }
        );
    }

app.listen(packageJson.port,function()
    {
        console.log('Init ' + packageJson.name + ' on ' + packageJson.port);
        console.log('Access URL : http://localhost:' + packageJson.port);
    }
);
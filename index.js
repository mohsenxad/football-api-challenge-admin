const express = require('express');
var bodyParser = require('body-parser')
require('dotenv').config();

const packageJson = require('./package.json');

var app = express();
app.use(bodyParser.json())

app.use(function(req, res, next) 
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, eventid");
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
                    const challengeInfo = req.body;
                    console.log(challengeInfo);
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
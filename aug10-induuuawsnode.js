const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    try {
        let data = await ddb.query({
            TableName: "induAug10",
            IndexName: "indupart1-indusort1-index",
            ExpressionAttributeValues: {
                ':indudress1': "long"
            },
            KeyConditionExpression: "indupart1 = :indudress1"
        }).promise();
        console.log("datada")
        console.log(data)
    } catch (err) {
        console.log("rrerr")
        console.log(err)
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};
// S3
{
    "Records": [
    {
        "eventVersion": "2.0",
        "eventTime": "1970-01-01T00:00:00.000Z",
        "requestParameters": {
            "sourceIPAddress": "127.0.0.1"
        },
        "s3": {
            "configurationId": "testConfigRule",
            "object": {
                "eTag": "0123456789abcdef0123456789abcdef",
                "sequencer": "0A1B2C3D4E5F678901",
                "key": "HappyFace.jpg",
                "size": 1024
            },
            "bucket": {
                "arn": "arn:aws:s3:::mybucket",
                "name": "sourcebucket",
                "ownerIdentity": {
                    "principalId": "EXAMPLE"
                }
            },
            "s3SchemaVersion": "1.0"
        },
        "responseElements": {
            "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH",
            "x-amz-request-id": "EXAMPLE123456789"
        },
        "awsRegion": "us-east-1",
        "eventName": "ObjectCreated:Put",
        "eventName": "ObjectRemoved:Delete",

        "userIdentity": {
            "principalId": "EXAMPLE"
        },
        "eventSource": "aws:s3"
    }
]
}

// SNS
{
    "Records": [
    {
        "EventVersion": "1.0",
        "EventSubscriptionArn": "arn:aws:sns:EXAMPLE",
        "EventSource": "aws:sns",
        "Sns": {
            "SignatureVersion": "1",
            "Timestamp": "1970-01-01T00:00:00.000Z",
            "Signature": "EXAMPLE",
            "SigningCertUrl": "EXAMPLE",
            "MessageId": "95df01b4-ee98-5cb9-9903-4c221d41eb5e",
            "Message": "Hello from SNS!",
            "MessageAttributes": {
                "Test": {
                    "Type": "String",
                    "Value": "TestString"
                },
                "TestBinary": {
                    "Type": "Binary",
                    "Value": "TestBinary"
                }
            },
            "Type": "Notification",
            "UnsubscribeUrl": "EXAMPLE",
            "TopicArn": "arn:aws:sns:EXAMPLE",
            "Subject": "TestInvoke"
        }
    }
]
}

// CloudFormation
{
    "version": "0",
    "id": "6a7e8feb-b491-4cf7-a9f1-bf3703467718",
    "detail-type": "EC2 Instance State-change Notification",
    "source": "aws.ec2",
    "account": "111122223333",
    "time": "2015-12-22T18:43:48Z",
    "region": "us-east-1",
    "resources": [
    "arn:aws:ec2:us-east-1:123456789012:instance/i-12345678"
],
    "detail": {
    "instance-id": "i-12345678",
        "state": "terminated"
}
}
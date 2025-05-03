import { SESClient } from '@aws-sdk/client-ses';

const REGION = "us-east-1";
const sesClient = new SESClient({
         region: REGION,
         credentials: {
             accessKeyId: 'AKIAZI2LFOGG7JYDDVKZ',
             secretAccessKey: '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'
         }
    });

    export default sesClient;
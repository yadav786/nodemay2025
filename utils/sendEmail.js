import { SendEmailCommand } from "@aws-sdk/client-ses";
import sesClient from './sesClient.js';

const createSendEmailCommand = (toAddress, fromAddress) => {
    return new SendEmailCommand({
      Destination: {
        CcAddresses: [],
        ToAddresses: [
          toAddress,
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: "<h1>This is the email body</h1>",
          },
          Text: {
            Charset: "UTF-8",
            Data: "This is the plain text",
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: "Hello World from SES",
        },
      },
      Source: fromAddress,
      ReplyToAddresses: [
        /* more items */
      ],
    });
  };
  
  const run = async () => {
    const sendEmailCommand = createSendEmailCommand(
      "pankaj.workspace2@gmail.com",
      "pankaj.workspace2@bindramsoft.in"
    );
  
    try {
      return await sesClient.send(sendEmailCommand);
    } catch (caught) {
      if (caught instanceof Error && caught.name === "MessageRejected") {
        /** @type { import('@aws-sdk/client-ses').MessageRejected} */
        const messageRejectedError = caught;
        return messageRejectedError;
      }
      throw caught;
    }
  };
  
  // snippet-end:[ses.JavaScript.email.sendEmailV3]
  export default run;
require('dotenv').config();

const line = require('@line/bot-sdk')

const config = {
    channelAccessToken: process.env.token,
    channelSecret: process.env.secretcode
}

// Initialize LINE client
const client = new line.Client(config);

const test = async(req,res)=>{
    try{
        console.log(config);
        return res.send({message:'Test response'})
        
    }catch(err){
        return res.status(500).send({message:'Sever error',error:err.message})
    }
}

const handleEvents = async(event) => {
    console.log('Event:', event);
    
    try {
        // return;
        switch (event.type) {
            case 'message':
                switch (event.message.type) {
                    case 'text':
                        if (event.message.text === "สวัสดี") {
                            return client.replyMessage(event.replyToken, {
                                type: 'text',
                                text: "hello"
                            });
                        } else {
                            return client.replyMessage(event.replyToken, {
                                type: 'text',
                                text: `ได้รับข้อความ: ${event.message.text}`
                            });
                        }
                    default:
                        return Promise.resolve(null);
                }
            default:
                return Promise.resolve(null);
        }
    } catch (error) {
        console.error('Error handling event:', error);
        return Promise.resolve(null);
    }
}

const webHook = async(req, res) => {
    try {

        const results = await Promise.all(
            req.body.events.map(event => handleEvents(event))
        );

        return res.status(200).send("OK");
    } catch (err) {
        console.error('Webhook Error:', err);
        return res.status(500).send({message: 'Server error', error: err.message});
    }
}

// const webHook = async(req,res)=>{
//     try{
//         return Promise
//         .all([
//             res.body.events.map(handleEvents)
//         ])
//         .then((result)=>res.send({result}))

//         const events = req.body.events;
//         console.log(events);

//         //Promise all
//         const results = await Promise.all(
//             events.map(event => handleEvents(event))
//         )

//         return res.status(200).send({message:'success',results})
        
//     }catch(err){
//         return res.status(500).send({message:'Sever error',error:err.message})
//     }
// }

module.exports = {
    test,
    webHook
}
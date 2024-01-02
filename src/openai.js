const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({ apiKey: "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" });
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7, // Corrected spelling
        max_tokens: 256, // Corrected spelling
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}
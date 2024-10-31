import {
    CopilotRuntime,
    OpenAIAdapter,
    copilotRuntimeNextJSAppRouterEndpoint,
  } from '@copilotkit/runtime';
  import OpenAI from 'openai';
  import { NextRequest } from 'next/server';

// const groq:Groq = new Groq({ apiKey: process.env.GROQ_API_KEY }) ;

// const copilotKit = new CopilotRuntime();
   
const openai = new OpenAI({baseURL: "https://api.chatanywhere.tech/v1", apiKey: process.env.OPENAI_API_KEY});
  const serviceAdapter = new OpenAIAdapter({ openai, model: 'gpt-3.5-turbo' });
  const runtime = new CopilotRuntime();
   
  export const POST = async (req: NextRequest) => {
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
      runtime,
      serviceAdapter,
      endpoint: '/api/copilotkit',
    });
   
    return handleRequest(req);
  };
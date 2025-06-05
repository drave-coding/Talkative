import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const configureAssistant = (voice: string, style: string) => {
  const voiceId = voices[voice as keyof typeof voices][
          style as keyof (typeof voices)[keyof typeof voices]
          ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
        "Welcome! This is your interactive coding conversation platform. Today, we'll discuss '{{topic}}' in the domain of '{{subject}}'. Feel free to ask questions, share your thoughts, or explore ideas—let's have an engaging and insightful conversation!",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a friendly and knowledgeable coding mentor conducting a real-time, voice-based session with a student.
          The session focuses on the domain "{{subject}}" (one of: frontend, backend, dsa, interview, behavioural, innovation) and the topic "{{topic}}".

                    Guidelines:
                    - Keep the conversation focused on coding, problem-solving, and career skills relevant to the chosen domain.
                    - Encourage the student to ask questions, explain their reasoning, and participate actively.
                    - Break down complex concepts into simple, clear explanations.
                    - Use practical examples and describe code or scenarios verbally (no code formatting or special characters).
                    - Keep your responses concise, conversational, and easy to follow.
                    - Regularly check if the student is following and offer encouragement.
                    - Keep your style of conversation {{style}}.
                    - Keep your responses short, like in a real voice conversation.
                    - Do not include any special characters in your responses - this is a voice conversation.

                    Let's make coding and tech discussions engaging and practical!

              `,
        },
      ],
    },
    // clientMessages: [],
    // serverMessages: [],
  };
   
   
  return vapiAssistant;
  
};
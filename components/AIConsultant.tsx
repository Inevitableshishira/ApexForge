
import React, { useState, useRef, useEffect } from 'react';
import { getDesignConsultation } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'I am the ApexForge Design Muse. Provide your vision, and I shall provide structural clarity.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getDesignConsultation(messages, input);
    setMessages(prev => [...prev, { role: 'model', text: responseText || "System timeout." }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 z-40 bg-black text-white w-20 h-20 flex items-center justify-center border border-white/20 hover:scale-110 active:scale-95 transition-all duration-500"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="round" strokeWidth={1} d="M4 7h16M4 12h16m-7 5h7" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-32 md:right-10 z-50 w-full md:w-[450px] h-full md:h-[650px] bg-white border border-black shadow-[30px_30px_0px_0px_rgba(0,0,0,1)] flex flex-col animate-fade-up">
          <div className="p-10 bg-black text-white flex justify-between items-center">
            <div>
              <h3 className="font-serif text-2xl italic">Muse AI</h3>
              <p className="text-[9px] text-white/40 uppercase tracking-[0.4em] mt-2">Precision Design Core</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 bg-white">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-6 text-[13px] leading-loose font-light ${
                  m.role === 'user' 
                    ? 'bg-black text-white' 
                    : 'bg-white border border-black/10 text-black'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-black rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-black rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-black rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 bg-white border-t border-black flex flex-col gap-4">
            <div className="flex items-center gap-4 border-b border-black/10 pb-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="PROPOSE A VISION..."
                className="flex-1 bg-transparent text-[11px] tracking-[0.2em] outline-none placeholder:text-black/20"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="text-black hover:opacity-50 disabled:opacity-20 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;

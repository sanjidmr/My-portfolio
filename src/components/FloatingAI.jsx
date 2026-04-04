import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  X, 
  Send, 
  Image as ImageIcon, 
  Volume2, 
  Sparkles, 
  Maximize2, 
  Minimize2,
  Download,
  Loader2,
  MessageSquare
} from 'lucide-react';
import { getGeminiResponse, generateImage, textToSpeech } from '../assets/lib/gemini';
import { cn } from '../assets/lib/utils';

const FloatingAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [activeTab, setActiveTab] = useState('chat');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Aura AI. How can I help you today? I can answer questions about Sanjid's portfolio, generate images, or even speak to you!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [imageSize, setImageSize] = useState("1K");
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response || "Sorry, I couldn't process that." }]);
    } catch (err) {
      console.error("Gemini Error:", err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Error: Failed to connect to Gemini." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!input.trim() || isLoading) return;

    const prompt = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: `Generate image: ${prompt}` }]);
    setIsLoading(true);

    try {
      const imageUrl = await generateImage(prompt, imageSize);
      if (imageUrl) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: `Here is your ${imageSize} image for: "${prompt}"`, 
          type: 'image',
          imageUrl 
        }]);
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: "Failed to generate image." }]);
      }
    } catch (err) {
      console.error("Image Gen Error:", err);
      setMessages(prev => [...prev, { role: 'assistant', content: "Error generating image." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeak = async (text) => {
    if (isSpeaking) return;
    setIsSpeaking(true);
    try {
      const audioUrl = await textToSpeech(text);
      if (audioUrl) {
        const audio = new Audio(audioUrl);
        audio.onended = () => setIsSpeaking(false);
        audio.play();
      }
    } catch (err) {
      console.error("TTS Error:", err);
      setIsSpeaking(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 45 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center group relative overflow-hidden"
          >
            <Bot size={32} className="relative z-10" />
            <div className="absolute inset-0 bg-linear-to-tr from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-slate-900 rounded-full"
            />
          </motion.button>
        )}
      </AnimatePresence>

              <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? '80px' : '600px',
              width: isMinimized ? '300px' : '400px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="glass rounded-[32px] shadow-3xl flex flex-col overflow-hidden border-primary/20"
          >
            {/* Header */}
            <div className="p-6 bg-primary/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold font-outfit text-sm text-white">Aura Assistant</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-outfit opacity-60 text-slate-400">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors text-white"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-slate-800/50 rounded-lg transition-colors text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Tabs */}
                <div className="flex p-2 gap-2 bg-slate-800/50 mx-6 mt-4 rounded-xl">
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={cn(
                      "flex-1 py-2 rounded-lg text-xs font-bold font-outfit transition-all flex items-center justify-center gap-2",
                      activeTab === 'chat' ? "bg-slate-700 shadow-sm text-primary" : "text-slate-400 opacity-60"
                    )}
                  >
                    <MessageSquare size={14} /> Chat
                  </button>
                  <button
                    onClick={() => setActiveTab('image')}
                    className={cn(
                      "flex-1 py-2 rounded-lg text-xs font-bold font-outfit transition-all flex items-center justify-center gap-2",
                      activeTab === 'image' ? "bg-slate-700 shadow-sm text-primary" : "text-slate-400 opacity-60"
                    )}
                  >
                    <ImageIcon size={14} /> Image Gen
                  </button>
                </div>

                {/* Content */}
                <div 
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide"
                >
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={cn(
                        "flex flex-col max-w-[85%]",
                        msg.role === 'user' ? "ml-auto items-end" : "items-start"
                      )}
                    >
                      <div className={cn(
                        "p-4 rounded-2xl text-sm font-outfit leading-relaxed",
                        msg.role === 'user' 
                          ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/20" 
                          : "bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700"
                      )}>
                        {msg.type === 'image' ? (
                          <div className="space-y-3">
                            <p className="mb-2">{msg.content}</p>
                            <img 
                              src={msg.imageUrl} 
                              alt="Generated" 
                              className="rounded-lg w-full shadow-lg"
                              referrerPolicy="no-referrer"
                            />
                            <a 
                              href={msg.imageUrl} 
                              download="aura-gen.png"
                              className="flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                            >
                              <Download size={12} /> Download Image
                            </a>
                          </div>
                        ) : (
                          <p>{msg.content}</p>
                        )}
                      </div>
                      {msg.role === 'assistant' && msg.type !== 'image' && (
                        <button 
                          onClick={() => handleSpeak(msg.content)}
                          className="mt-2 p-1.5 rounded-lg hover:bg-slate-800 transition-colors opacity-40 hover:opacity-100 text-slate-400"
                        >
                          <Volume2 size={14} className={isSpeaking ? "animate-pulse text-primary" : ""} />
                        </button>
                      )}
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex items-center gap-2 text-xs opacity-60 text-slate-400">
                      <Loader2 size={14} className="animate-spin" /> Aura is thinking...
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-slate-800">
                  {activeTab === 'image' && (
                    <div className="flex gap-2 mb-4">
                      {["1K", "2K", "4K"].map((size) => (
                        <button
                          key={size}
                          onClick={() => setImageSize(size)}
                          className={cn(
                            "px-3 py-1 rounded-full text-[10px] font-bold border transition-all",
                            imageSize === size 
                              ? "bg-primary/10 border-primary text-primary" 
                              : "border-slate-700 text-slate-400 opacity-60"
                          )}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="relative">
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (activeTab === 'chat' ? handleSendMessage() : handleGenerateImage())}
                      placeholder={activeTab === 'chat' ? "Ask me anything..." : "Describe the image..."}
                      className="w-full pl-6 pr-14 py-4 rounded-2xl bg-slate-800 outline-none focus:ring-2 ring-primary/50 transition-all text-sm font-outfit text-white placeholder:text-slate-500"
                    />
                    <button
                      onClick={activeTab === 'chat' ? handleSendMessage() : handleGenerateImage()}
                      disabled={isLoading || !input.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-primary text-white disabled:opacity-50 transition-all shadow-lg shadow-primary/20"
                    >
                      {activeTab === 'chat' ? <Send size={18} /> : <Sparkles size={18} />}
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingAI;

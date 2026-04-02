import React, { useState, useEffect } from 'react';
import { useJavaPoints } from '../Java/JavaPointsContext';
const TOPICS = ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Programming"];

const TOPIC_MOCK_QUESTIONS = {
  "Quantitative Aptitude": [
    { question: "If 20% of a number is 50, what is the number?", options: ["200", "250", "300", "150"], answer: "250" },
    { question: "A train 150m long runs at 60 km/hr. Time to cross a pole?", options: ["8s", "9s", "10s", "12s"], answer: "9s" },
    { question: "What is 15% of 80?", options: ["12", "15", "10", "14"], answer: "12" },
    { question: "Solve: 8 + 2 × (5 - 3)", options: ["20", "12", "18", "16"], answer: "12" },
    { question: "Simple interest on ₹1000 at 10% for 2 years?", options: ["₹100", "₹200", "₹300", "₹150"], answer: "₹200" },
    { question: "Find missing: 3, 9, 27, ?", options: ["81", "54", "63", "72"], answer: "81" },
    { question: "Speed = 72 km/hr in m/s?", options: ["18", "20", "25", "30"], answer: "20" },
    { question: "LCM of 12 and 18?", options: ["24", "36", "48", "72"], answer: "36" },
    { question: "If A:B = 2:3 and B:C = 4:5, then A:C?", options: ["8:15", "2:5", "4:9", "6:10"], answer: "8:15" },
    { question: "A shopkeeper marks 25% above cost and gives 10% discount. Profit %?", options: ["10.5%", "12.5%", "15%", "20%"], answer: "12.5%" }
  ],
  "Logical Reasoning": [
    { question: "If A is mother of B and B is sister of C, how is A related to C?", options: ["Grandmother", "Mother", "Aunt", "Sister"], answer: "Mother" },
    { question: "Find odd one out: Cat, Dog, Cow, Eagle", options: ["Cat", "Dog", "Cow", "Eagle"], answer: "Eagle" },
    { question: "Pointing to a man, a woman says 'His mother is the only daughter of my mother'. How is she related?", options: ["Grandmother", "Mother", "Sister", "Daughter"], answer: "Mother" },
    { question: "Next in series: Z, X, V, T, ?", options: ["R", "S", "P", "Q"], answer: "R" },
    { question: "All roses are flowers. Some flowers fade. Conclusion?", options: ["All roses fade", "Some roses may fade", "No rose fades", "None of these"], answer: "Some roses may fade" },
    { question: "XYZW : ABCD :: PQRS : ?", options: ["EFGH", "WXYZ", "CDEF", "MNOP"], answer: "EFGH" },
    { question: "5 persons in row: A is left of B, C is right of B, D is right of C. Who is leftmost?", options: ["A", "B", "C", "D"], answer: "A" },
    { question: "Complete: BDF, GIK, LNP, ?", options: ["QRS", "QSU", "RTV", "STU"], answer: "QSU" },
    { question: "If HORSE = 32, COW = 15, then DOG = ?", options: ["22", "18", "20", "24"], answer: "20" },
    { question: "Decode: XMAS = 24131119. CODE for TREE?", options: ["20181805", "20181705", "20181805", "21181905"], answer: "20181805" }
  ],
  "Verbal Ability": [
    { question: "Synonym of 'Abundant'", options: ["Scarce", "Plentiful", "Rare", "Limited"], answer: "Plentiful" },
    { question: "Antonym of 'Expand'", options: ["Grow", "Shrink", "Enlarge", "Develop"], answer: "Shrink" },
    { question: "Synonym of 'Diligent'", options: ["Lazy", "Hardworking", "Careless", "Quick"], answer: "Hardworking" },
    { question: "Choose correct spelling", options: ["Accomodate", "Accommodate", "Acommodate", "Accommodeate"], answer: "Accommodate" },
    { question: "'She ___ going to the market.' Fill in:", options: ["is", "are", "am", "were"], answer: "is" },
    { question: "Antonym of 'Benevolent'", options: ["Kind", "Generous", "Malevolent", "Charitable"], answer: "Malevolent" },
    { question: "One word for 'one who collects stamps'", options: ["Philatelist", "Numismatist", "Botanist", "Zoologist"], answer: "Philatelist" },
    { question: "Identify the figure of speech: 'The wind whispered through the trees.'", options: ["Simile", "Metaphor", "Personification", "Alliteration"], answer: "Personification" },
    { question: "Choose the correct sentence:", options: ["She don't like it.", "She doesn't likes it.", "She doesn't like it.", "She not like it."], answer: "She doesn't like it." },
    { question: "Synonym of 'Ephemeral'", options: ["Eternal", "Temporary", "Strong", "Lively"], answer: "Temporary" }
  ],
  "Programming": [
    { question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Tree", "Graph"], answer: "Stack" },
    { question: "Time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], answer: "O(log n)" },
    { question: "What does OOP stand for?", options: ["Object Oriented Programming", "Open Online Platform", "Optimal Output Process", "Ordered Output Print"], answer: "Object Oriented Programming" },
    { question: "Which is NOT a loop in Python?", options: ["for", "while", "do-while", "All are loops"], answer: "do-while" },
    { question: "Which symbol is used for single-line comment in Python?", options: ["//", "#", "/* */", "--"], answer: "#" },
    { question: "Output of: print(type(3.14)) in Python?", options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "error"], answer: "<class 'float'>" },
    { question: "Which sorting is fastest on average?", options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"], answer: "Quick Sort" },
    { question: "In Java, which keyword is used to inherit a class?", options: ["implements", "extends", "inherits", "super"], answer: "extends" },
    { question: "HTML stands for?", options: ["Hyperlinks and Text Markup Language", "HyperText Markup Language", "Home Tool Markup Language", "None"], answer: "HyperText Markup Language" },
    { question: "What is a primary key in a database?", options: ["A key that can be NULL", "A key that uniquely identifies each record", "A foreign key", "A composite key"], answer: "A key that uniquely identifies each record" }
  ]
};

const getTopicQuestions = (topic) => {
  const qs = TOPIC_MOCK_QUESTIONS[topic] || TOPIC_MOCK_QUESTIONS["Quantitative Aptitude"];
  // Shuffle to get different order each time
  return [...qs].sort(() => Math.random() - 0.5);
};

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyA9Y-Jc9kXA_FqiR6S_-qYMJuXT8PkiqEM";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const Battle = () => {
  const { addPoints, points } = useJavaPoints();
  const [coinsClaimed, setCoinsClaimed] = useState(false);
  const [gameState, setGameState] = useState('selection');
  const [gameMode, setGameMode] = useState(null);
  const [friendMode, setFriendMode] = useState(null);
  const [roomCode, setRoomCode] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [joinError, setJoinError] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [roomTimer, setRoomTimer] = useState(null);
  const [matchStartTimestamp, setMatchStartTimestamp] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [playerScore, setPlayerScore] = useState(100);
  const [opponentScore, setOpponentScore] = useState(100);
  const [battleQuestions, setBattleQuestions] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [playerJoined, setPlayerJoined] = useState(false);

  // BroadcastChannel for cross-tab communication
  const channelRef = React.useRef(null);

  useEffect(() => {
    channelRef.current = new BroadcastChannel('battle_room');

    channelRef.current.onmessage = (event) => {
      const msg = event.data;

      // HOST receives: player_joined
      if (msg.type === 'player_joined' && msg.roomCode === roomCode && friendMode === 'host') {
        setPlayerJoined(true);
      }

      if (msg.type === 'match_start' && msg.roomCode === roomCode && friendMode === 'join') {
        setSelectedTopic(msg.topic);
        setBattleQuestions(msg.questions);
        setMatchStartTimestamp(msg.startTimestamp);
        setGameState('room_setup');
      }
    };

    return () => {
      channelRef.current?.close();
    };
  }, [roomCode, friendMode]);

  const generateQuestions = async (topic) => {
    setIsGenerating(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ 
              text: "You are an Aptitude Question Generator. Your ONLY task is to generate 10 UNIQUE, NEVER-REPEATED multiple-choice questions STRICTLY about the specified topic. Every question must directly test knowledge of that specific topic only. Each time you are called, generate a COMPLETELY DIFFERENT set of questions using varied difficulty, wording, and scenarios. Return ONLY a valid JSON array of objects. Each object must have: 'question' (string), 'options' (array of exactly 4 strings), 'answer' (string exactly matching one of the options)." 
            }]
          },
          contents: [{ role: "user", parts: [{ text: `Topic: ${topic}. Seed: ${Date.now()}` }] }],
          generationConfig: {
            responseMimeType: "application/json"
          }
        })
      });
      
      if (!response.ok) throw new Error("API Error");
      
      const data = await response.json();
      let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "[]";
      
      const questions = JSON.parse(rawText);
      if (Array.isArray(questions) && questions.length > 0) {
        setBattleQuestions(questions);
        return questions;
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Failed to generate questions, falling back to topic mock:", error);
      const fallbackQs = getTopicQuestions(topic);
      setBattleQuestions(fallbackQs);
      return fallbackQs;
    } finally {
      setIsGenerating(false);
    }
  };

  // 1. Precise Room Countdown Sync
  useEffect(() => {
    if (gameState === 'room_setup' && matchStartTimestamp !== null) {
      const checkTimer = () => {
        const remaining = Math.max(0, Math.ceil((matchStartTimestamp - Date.now()) / 1000));
        setRoomTimer(remaining);
        if (remaining === 0) {
          setGameState('playing');
          setMatchStartTimestamp(null);
        }
      };
      
      checkTimer();
      const timer = setInterval(checkTimer, 100);
      return () => clearInterval(timer);
    }
  }, [gameState, matchStartTimestamp]);

  // 2. Play state timer
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      
      // Simulate opponent occasionally scoring and dealing damage to player
      if (Math.random() > 0.95) setPlayerScore(prev => Math.max(0, prev - 10));
      
      return () => clearInterval(timer);
    } else if ((timeLeft === 0 || playerScore === 0 || opponentScore === 0) && gameState === 'playing') {
      setGameState('finished');
    }
  }, [gameState, timeLeft, roomTimer, playerScore, opponentScore]);

  const handleAnswer = (option) => {
    if (option === battleQuestions[currentQuestion].answer) {
      setOpponentScore(prev => Math.max(0, prev - 10)); // Damage opponent
      // Correct effect
    }
    
    // Move to next question or loop
    if (currentQuestion < battleQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setGameState('finished'); // End battle when all questions answered
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white pt-20 flex flex-col items-center justify-center p-4 relative">
      <div className="fixed top-24 right-4 sm:right-8 z-50">
        <div className="bg-yellow-500/20 text-yellow-500 font-bold px-4 py-2 rounded-full border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)] flex items-center gap-2">
          <span>🪙</span> <span>{points} Coins</span>
        </div>
      </div>
      {gameState === 'selection' && (
        <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 pb-2">Select Game Mode</h2>
            <p className="text-gray-400 mt-4 text-lg">Choose who you want to challenge in this 1v1 battle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button 
              onClick={() => { 
                setGameMode('friends'); 
                setGameState('friend_choice');
              }}
              className="flex flex-col items-center justify-center p-8 bg-black/20 hover:bg-white/10 border border-white/10 hover:border-purple-500 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.3)] group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🫂</div>
              <h3 className="text-2xl font-bold text-white mb-2">Friends</h3>
              <p className="text-sm text-gray-400 font-medium">Host or Join a private room</p>
            </button>
            <button 
              onClick={() => { setGameMode('ai'); setGameState('room_setup'); }}
              className="flex flex-col items-center justify-center p-8 bg-black/20 hover:bg-white/10 border border-white/10 hover:border-blue-500 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-2">Play CPU</h3>
              <p className="text-sm text-gray-400 font-medium">Practice against AI</p>
            </button>
            <button 
              onClick={() => { setGameMode('random'); setGameState('room_setup'); }}
              className="flex flex-col items-center justify-center p-8 bg-black/20 hover:bg-white/10 border border-white/10 hover:border-pink-500 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(236,72,153,0.3)] group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-2">Random</h3>
              <p className="text-sm text-gray-400 font-medium">Find a ranked match</p>
            </button>
          </div>
        </div>
      )}

      {/* Host or Join Choice Screen */}
      {gameState === 'friend_choice' && (
        <div className="w-full max-w-lg bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 pb-2">Friends Battle</h2>
            <p className="text-gray-400 mt-3">Create a room or join your friend's room.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Host Button */}
            <button 
              onClick={() => { 
                setFriendMode('host');
                const code = Math.random().toString(36).substring(2, 8).toUpperCase();
                setRoomCode(code);
                // Register this room in localStorage so Join tab can validate
                const rooms = JSON.parse(localStorage.getItem('battle_active_rooms') || '{}');
                rooms[code] = { host: true, created: Date.now() };
                localStorage.setItem('battle_active_rooms', JSON.stringify(rooms));
                setGameState('room_setup'); 
              }}
              className="flex flex-col items-center justify-center p-8 bg-black/20 hover:bg-white/10 border border-white/10 hover:border-green-500 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,197,94,0.3)] group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🏠</div>
              <h3 className="text-2xl font-bold text-white mb-2">Host</h3>
              <p className="text-sm text-gray-400 font-medium">Create & share a room code</p>
            </button>
            {/* Join Button */}
            <button 
              onClick={() => {
                setFriendMode('join');
                setJoinCode('');
                setJoinError('');
                setGameState('join_room');
              }}
              className="flex flex-col items-center justify-center p-8 bg-black/20 hover:bg-white/10 border border-white/10 hover:border-cyan-500 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.3)] group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🔑</div>
              <h3 className="text-2xl font-bold text-white mb-2">Join</h3>
              <p className="text-sm text-gray-400 font-medium">Enter friend's room code</p>
            </button>
          </div>
        </div>
      )}

      {/* Join Room - Enter Code Screen */}
      {gameState === 'join_room' && (
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">Join Room</h2>
          <p className="text-gray-400 mb-8">Enter the 6-character room code shared by your friend.</p>
          <input 
            type="text" 
            value={joinCode} 
            onChange={(e) => {
              setJoinCode(e.target.value.toUpperCase().slice(0, 6));
              setJoinError('');
            }}
            placeholder="e.g. A3B7XK"
            maxLength={6}
            className="w-full text-center text-4xl font-mono font-bold tracking-[0.4em] bg-black/40 border-2 border-white/20 focus:border-cyan-500 rounded-xl p-4 text-white outline-none placeholder-gray-600 transition-all mb-4"
          />
          {joinError && <p className="text-red-400 text-sm mb-4 animate-pulse">{joinError}</p>}
          <button
            onClick={() => {
              if (joinCode.length !== 6) {
                setJoinError('Room code must be exactly 6 characters.');
                return;
              }
              // Validate against active rooms
              const rooms = JSON.parse(localStorage.getItem('battle_active_rooms') || '{}');
              if (!rooms[joinCode]) {
                setJoinError('Invalid room code! No active room found with this code.');
                return;
              }
              setRoomCode(joinCode);
              // Notify host that a player joined
              channelRef.current?.postMessage({ type: 'player_joined', roomCode: joinCode });
              setGameState('waiting_for_host');
            }}
            disabled={joinCode.length !== 6}
            className={`w-full py-4 mt-2 rounded-xl font-bold text-lg shadow-lg transition-all ${
              joinCode.length === 6 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-cyan-500/30' 
                : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
            }`}
          >
            Join Match →
          </button>
        </div>
      )}

      {/* Waiting for Host to select topic */}
      {gameState === 'waiting_for_host' && (
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md text-center">
          <div className="w-20 h-20 border-4 border-t-purple-500 border-r-blue-500 border-b-purple-500 border-l-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">Joined Room: {roomCode}</h2>
          <p className="text-gray-400 text-lg animate-pulse">Waiting for host to select topic and start the match...</p>
        </div>
      )}

      {gameState === 'room_setup' && (
        <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md text-center">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            {gameMode === 'friends' ? 'Create Private Match' : gameMode === 'ai' ? 'Play CPU Match' : 'Ranked Match'}
          </h2>
          
          {gameMode === 'friends' && friendMode === 'host' && (
            <div className="mb-6">
              <div className="bg-black/40 p-6 rounded-2xl mb-4 inline-block border border-white/5 shadow-inner">
                <p className="text-gray-400 mb-2 font-medium">Share this Room Code with your Friend</p>
                <p className="text-5xl font-mono font-bold tracking-[0.3em] text-white">{roomCode}</p>
              </div>
              <div className={`mt-2 inline-block px-4 py-2 rounded-full text-sm font-bold ${playerJoined ? 'bg-green-500/20 text-green-400 border border-green-500/40' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 animate-pulse'}`}>
                {playerJoined ? '✅ Player Joined! Select a topic to begin.' : '⏳ Waiting for friend to join...'}
              </div>
            </div>
          )}
          
          {!selectedTopic ? (
            <div className="mt-4">
              <h3 className="text-xl text-gray-300 mb-6 font-semibold">
                {friendMode === 'host' && !playerJoined ? 'Waiting for friend to join...' : 'Select Battle Topic to Start Match'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {TOPICS.map(topic => (
                  <button 
                    key={topic}
                    disabled={friendMode === 'host' && !playerJoined}
                    onClick={async () => {
                      setSelectedTopic(topic);
                      
                      // Wait for AI questions to generate before starting countdown
                      const generatedQs = await generateQuestions(topic);
                      
                      const startTimestamp = Date.now() + 5000;
                      setMatchStartTimestamp(startTimestamp);

                      // If host in friends mode, broadcast match start to joiner
                      if (friendMode === 'host') {
                        // Clean up room from active rooms 
                        const rooms = JSON.parse(localStorage.getItem('battle_active_rooms') || '{}');
                        delete rooms[roomCode];
                        localStorage.setItem('battle_active_rooms', JSON.stringify(rooms));
                        // Send topic + the exact AI questions + exact start timestamp to joiner
                        channelRef.current?.postMessage({
                          type: 'match_start',
                          roomCode,
                          topic,
                          questions: generatedQs,
                          startTimestamp
                        });
                      }
                    }}
                    className={`p-4 rounded-xl transition-all font-medium ${
                      friendMode === 'host' && !playerJoined
                        ? 'bg-black/20 border border-white/5 text-gray-500 cursor-not-allowed opacity-50'
                        : 'bg-white/5 hover:bg-white/20 border border-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]'
                    }`}
                  >
                    {isGenerating && selectedTopic === topic ? (
                      <div className="w-6 h-6 border-2 border-t-blue-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-spin mx-auto"></div>
                    ) : (
                      topic
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-8 border-t border-white/10 pt-8">
              <h3 className="text-2xl text-green-400 mb-6 font-bold">Topic Selected: {selectedTopic}</h3>
              {roomTimer !== null ? (
                <div className="text-center bg-black/30 p-8 rounded-2xl inline-block border border-white/5 shadow-2xl relative">
                  {(gameMode === 'ai' || gameMode === 'random') && <div className="animate-spin w-12 h-12 border-4 border-t-purple-500 border-r-blue-500 border-b-purple-500 border-l-blue-500 rounded-full mx-auto mb-4"></div>}
                  {isGenerating && (
                    <div className="absolute -top-4 -right-4 bg-purple-600 text-xs px-3 py-1 rounded-full animate-bounce shadow-lg">Generating Questions...</div>
                  )}
                  <p className="text-gray-400 text-lg mb-4">
                    {gameMode === 'friends' ? 'Match starting in...' : gameMode === 'ai' ? 'Preparing AI Opponent...' : 'Finding Opponent...'}
                  </p>
                  <p className="text-7xl font-bold text-yellow-500 animate-pulse">{roomTimer}</p>
                </div>
              ) : null}
            </div>
          )}
        </div>
      )}

      {gameState === 'playing' && (
        <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {/* Top VS Bar with Health */}
          <div className="flex flex-col bg-black/40 p-4 border-b border-white/5 gap-3">
            <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(59,130,246,0.5)]">You</div>
                <div className="text-2xl font-bold text-blue-400">{playerScore} HP</div>
              </div>
              
              <div className="text-center">
                <div className="text-xl font-mono text-yellow-400 font-bold">⏱️ {timeLeft}s</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-red-400">{opponentScore} HP</div>
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(239,68,68,0.5)]">Opp</div>
              </div>
            </div>

            {/* Health Bars */}
            <div className="flex justify-between items-center gap-4 px-2">
              <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden flex justify-end shadow-inner">
                <div className="h-full bg-gradient-to-l from-blue-400 to-blue-600 transition-all duration-500 ease-out" style={{ width: `${playerScore}%` }}></div>
              </div>
              <div className="text-gray-500 font-bold text-sm tracking-widest">VS</div>
              <div className="flex-1 h-3 bg-gray-800 rounded-full overflow-hidden flex justify-start shadow-inner">
                <div className="h-full bg-gradient-to-r from-red-400 to-red-600 transition-all duration-500 ease-out" style={{ width: `${opponentScore}%` }}></div>
              </div>
            </div>
          </div>


          {/* Question Area */}
          <div className="p-8 text-center min-h-[300px] flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-8">{battleQuestions[currentQuestion].question}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {battleQuestions[currentQuestion].options.map((option, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="bg-white/10 hover:bg-white/20 p-4 rounded-xl text-xl font-medium transition-colors border border-white/5 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {gameState === 'finished' && (
        <div className="relative text-center w-full max-w-lg bg-white/5 border border-white/10 p-8 rounded-2xl shadow-2xl">
          {/* Back Arrow Button */}
          <button 
            onClick={() => {
              setGameState('selection');
              setTimeLeft(30);
              setPlayerScore(100);
              setOpponentScore(100);
              setCurrentQuestion(0);
              setGameMode(null);
              setFriendMode(null);
              setRoomCode('');
              setJoinCode('');
              setJoinError('');
              setPlayerJoined(false);
              setSelectedTopic('');
              setRoomTimer(null);
              setMatchStartTimestamp(null);
              setBattleQuestions([]);
              setCoinsClaimed(false);
            }}
            className="absolute top-6 left-6 text-gray-500 hover:text-white transition-all hover:-translate-x-1"
            title="Return to Battle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>

          <h2 className="text-4xl font-bold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
            {playerScore > opponentScore ? "Victory! 🏆" : playerScore < opponentScore ? "Defeat 💔" : "Draw 🤝"}
          </h2>
          
          <div className="flex justify-between items-center my-8 bg-black/30 p-6 rounded-xl">
            <div className="text-center">
              <div className="text-blue-400 text-lg mb-1">Your HP</div>
              <div className="text-4xl font-bold">{playerScore}</div>
            </div>
            <div className="text-gray-500 text-2xl font-serif italic">VS</div>
            <div className="text-center">
              <div className="text-red-400 text-lg mb-1">Opponent HP</div>
              <div className="text-4xl font-bold">{opponentScore}</div>
            </div>
          </div>
          
          <p className="text-purple-200 mb-8">
            {playerScore > opponentScore ? "+50 XP and 20 Coins earned!" : "Better luck next time. Don't give up!"}
          </p>

          {playerScore > opponentScore && (
            <button 
              onClick={async () => {
                if (!coinsClaimed) {
                  setCoinsClaimed(true);
                  await addPoints(20);
                }
              }}
              disabled={coinsClaimed}
              className={`w-full py-4 mb-4 rounded-xl font-bold text-lg shadow-lg transition-all ${coinsClaimed ? 'bg-gray-800 border border-gray-600 text-gray-500 cursor-not-allowed pointer-events-none' : 'bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white shadow-yellow-500/30 border border-yellow-400'}`}
            >
              {coinsClaimed ? '✅ 20 Coins Added to Total!' : '💰 Claim 20 Coins'}
            </button>
          )}

          <button 
            onClick={() => {
              setGameState('selection');
              setTimeLeft(30);
              setPlayerScore(100);
              setOpponentScore(100);
              setCurrentQuestion(0);
              setGameMode(null);
              setFriendMode(null);
              setRoomCode('');
              setJoinCode('');
              setJoinError('');
              setPlayerJoined(false);
              setSelectedTopic('');
              setRoomTimer(null);
              setMatchStartTimestamp(null);
              setBattleQuestions([]);
              setCoinsClaimed(false); // Reset so coins are available next battle
            }}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 transition-all"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Battle;

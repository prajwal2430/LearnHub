import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useJavaPoints } from '../Java/JavaPointsContext';
import { useNavigate } from 'react-router-dom';

const STORE_ITEMS = [
  {
    id: 'premium_month',
    name: 'Premium Subscription (1 Month)',
    description: 'Unlock infinite AI generation, unlimited 1v1 battles, and a golden username on the Leaderboard.',
    price: 5000,
    icon: '👑',
    gradient: 'from-yellow-400 to-yellow-600',
    tag: 'BEST VALUE'
  },
  {
    id: 'badge_quizmaster',
    name: 'Quiz Master Badge',
    description: 'A permanent diamond badge displayed next to your name globally.',
    price: 1500,
    icon: '💎',
    gradient: 'from-cyan-400 to-blue-600',
    tag: 'COSMETIC'
  },
  {
    id: 'rank_shield',
    name: '1v1 Rank Shield',
    description: 'Protects your XP from dropping the next time you lose a Battle Arena match.',
    price: 500,
    icon: '🛡️',
    gradient: 'from-green-400 to-emerald-600',
    tag: 'UTILITY'
  },
  {
    id: 'hint_token',
    name: 'Advanced Hint Token',
    description: 'Provides a massive hint during a tough Aptitude Assessment question.',
    price: 150,
    icon: '💡',
    gradient: 'from-purple-400 to-pink-600',
    tag: 'BOOST'
  }
];

const Redeem = () => {
  const { currentUser } = useAuth();
  const { points, deductPoints } = useJavaPoints();
  const navigate = useNavigate();

  const [purchasing, setPurchasing] = useState(null);
  const [message, setMessage] = useState(null);


  const handlePurchase = async (item) => {
    if (points < item.price) return;
    
    setPurchasing(item.id);
    setMessage(null);
    
    // Simulate slight network delay for effect
    setTimeout(async () => {
      const success = await deductPoints(item.price);
      if (success) {
        setMessage({ type: 'success', text: `Successfully redeemed: ${item.name}!` });
      } else {
        setMessage({ type: 'error', text: 'Transaction failed. Not enough points or network error.' });
      }
      setPurchasing(null);
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white pt-24 px-4 sm:px-6 lg:px-8 pb-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white/5 p-8 rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(236,72,153,0.1)]">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 mb-4 inline-block">
              Rewards Store 🛍️
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Spend your hard-earned XP Points on premium features, cosmetic badges, and utility tokens.
            </p>
          </div>
          
          <div className="flex flex-col items-center bg-black/40 p-6 rounded-2xl border border-yellow-500/30 min-w-[200px]">
            <span className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Your Balance</span>
            <div className="flex items-center gap-3">
              <span className="text-4xl">🌟</span>
              <span className="text-4xl font-mono font-bold text-yellow-400">{points?.toLocaleString()}</span>
            </div>
          </div>
        </div>


        {/* Transaction Toast */}
        {message && (
          <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl font-bold shadow-2xl animate-fade-in flex items-center gap-3 ${
            message.type === 'success' ? 'bg-green-500/90 text-white shadow-green-500/50' : 'bg-red-500/90 text-white shadow-red-500/50'
          }`}>
            <span>{message.type === 'success' ? '🎉' : '❌'}</span>
            {message.text}
          </div>
        )}

        {/* Store Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {STORE_ITEMS.map(item => {
            const canAfford = points >= item.price;
            const isBuying = purchasing === item.id;
            
            return (
              <div 
                key={item.id} 
                className={`relative overflow-hidden bg-white/5 border rounded-2xl p-6 transition-all duration-300 ${
                  canAfford ? 'border-white/20 hover:border-pink-500/50 hover:bg-white/10 hover:shadow-2xl hover:shadow-pink-500/10' : 'border-red-500/20 opacity-80'
                }`}
              >
                {/* Decorative background glow */}
                <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full blur-[80px] opacity-20`} />
                
                {/* Tag */}
                {item.tag && (
                  <div className={`absolute top-0 right-0 px-4 py-1 rounded-bl-xl text-xs font-bold tracking-wider ${
                    item.id === 'premium_month' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black' : 'bg-white/10 text-gray-300'
                  }`}>
                    {item.tag}
                  </div>
                )}

                <div className="flex items-start gap-4 h-full flex-col sm:flex-row">
                  <div className={`text-5xl p-4 rounded-2xl bg-gradient-to-br ${item.gradient} bg-opacity-10 backdrop-blur-sm border border-white/10 flex-shrink-0`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex flex-col flex-grow justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className={`text-xl font-mono font-bold flex items-center gap-2 ${canAfford ? 'text-yellow-400' : 'text-red-400'}`}>
                        <span>🌟</span> {item.price.toLocaleString()}
                      </div>
                      
                      <button
                        onClick={() => handlePurchase(item)}
                        disabled={!canAfford || isBuying}
                        className={`px-6 py-2 rounded-xl font-bold transition-all flex items-center gap-2 ${
                          isBuying
                            ? 'bg-gray-500 text-white cursor-wait animate-pulse'
                            : canAfford
                              ? 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:-translate-y-0.5'
                              : 'bg-black/40 text-gray-500 border border-red-500/20 cursor-not-allowed'
                        }`}
                      >
                        {isBuying ? 'Processing...' : canAfford ? 'Redeem Now' : 'Not Enough Points'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Redeem;

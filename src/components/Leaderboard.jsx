import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useJavaPoints } from '../Java/JavaPointsContext';

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000/api";

const Leaderboard = () => {
  const { currentUser } = useAuth();
  const { points } = useJavaPoints();
  const [dbUsers, setDbUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastRefreshed, setLastRefreshed] = useState(Date.now());
  const [connectionStatus, setConnectionStatus] = useState('Checking...');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        console.log("Leaderboard - Fetching from:", `${API_URL}/user/leaderboard`);
        const response = await axios.get(`${API_URL}/user/leaderboard`);
        setDbUsers(response.data);
        setConnectionStatus('Live (Connected to Local DB)');
      } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
        setConnectionStatus(`Offline (Unreachable: ${error.message})`);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();

    // Set up auto-polling every 5 seconds for live dynamic updates
    const pollInterval = setInterval(fetchLeaderboard, 5000);
    
    return () => clearInterval(pollInterval); // Cleanup on unmount
  }, [currentUser, lastRefreshed]); // Refresh when user logs in/out or manual refresh

  const activeLeaderboard = useMemo(() => {
    // 1. Map all users from database to leaderboard objects
    let list = dbUsers.map(user => {
      // Robustly check for current user identity
      const isMe = currentUser && (
        user._id === currentUser._id || 
        user.id === currentUser.id || 
        user.username === currentUser.username ||
        user.email === currentUser.email
      );

      return {
        id: user._id || user.id,
        name: user.username || user.name || "Aspirant",
        score: user.points !== undefined ? user.points : 0,
        isCurrentUser: isMe
      };
    });
    
    // 2. If the current logged-in user is NOT in the database list yet (or the DB is empty), 
    // we still want the viewing user to see themself highlighted.
    const userInList = list.find(u => u.isCurrentUser);
    
    if (currentUser && !userInList) {
      list.push({
        id: currentUser._id || currentUser.id || 'currentUser',
        name: currentUser.username || currentUser.name || "You (Aspirant)",
        score: points || 0,
        isCurrentUser: true,
      });
    } else if (userInList) {
      // If user IS in the fetched list, make sure their score is dynamic from the points context
      // This ensures they see updates immediately without page refresh
      userInList.score = Math.max(userInList.score, points);
    }

    // 3. Sorting logic: Highest verified score first
    list.sort((a, b) => b.score - a.score);

    // 4. Rank assignment and badge logic
    return list.map((user, idx) => {
      let badge = '';
      if (idx === 0) badge = '👑';
      else if (idx === 1) badge = '🥈';
      else if (idx === 2) badge = '🥉';
      else if (idx < 5) badge = '⭐';

      return {
        ...user,
        rank: idx + 1,
        badge
      };
    });
  }, [dbUsers, currentUser, points]);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500 mb-4 inline-block">
            Global Leaderboard 🏆
          </h1>
          <p className="text-gray-400 text-lg">Top AptiQuest aspirants. Complete modules accurately and win battles to claim Rank 1!</p>
          <div className="mt-4 flex flex-col items-center gap-3">
            <div className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
              connectionStatus.includes('Live') ? 'text-green-400 border-green-400/30' : 'text-red-400 border-red-400/30'
            }`}>
              📡 Status: {connectionStatus}
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  setLoading(true);
                  setLastRefreshed(Date.now());
                }}
                className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2 px-3 py-1 bg-purple-500/10 rounded-full border border-purple-500/20"
              >
                <span className={loading ? "animate-spin inline-block" : ""}>🔄</span> Refresh Rankings
              </button>
              {!currentUser && (
                <p className="text-xs text-orange-400/80 italic self-center">Login to see yourself on the board!</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 p-6 bg-black/40 border-b border-white/5 text-gray-400 font-bold uppercase text-sm tracking-wider">
            <div className="col-span-2 text-center">Rank</div>
            <div className="col-span-6">Aspirant</div>
            <div className="col-span-4 text-right">Points</div>
          </div>

          {/* List */}
          <div className="divide-y divide-white/5 min-h-[400px]">
            {loading ? (
              <div className="flex flex-col items-center justify-center p-20 space-y-4">
                <div className="w-12 h-12 border-4 border-t-yellow-500 border-white/10 rounded-full animate-spin"></div>
                <p className="text-gray-400 font-medium">Fetching global rankings...</p>
              </div>
            ) : activeLeaderboard.length === 0 ? (
              <div className="p-20 text-center text-gray-500">No users found in the database.</div>
            ) : (
              activeLeaderboard.map((user) => (
              <div 
                key={user.id} 
                className={`grid grid-cols-12 gap-4 p-6 items-center transition-colors hover:bg-white/5 ${user.isCurrentUser ? "bg-white/10 border-l-4 border-l-yellow-500" : ""}`}
              >
                <div className="col-span-2 text-center">
                  <span className={`text-xl font-bold ${user.rank <= 3 ? 'text-yellow-400' : 'text-gray-400'}`}>
                    #{user.rank}
                  </span>
                </div>
                
                <div className="col-span-6 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                    user.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg shadow-yellow-500/30' : 
                    user.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-white' :
                    user.rank === 3 ? 'bg-gradient-to-br from-amber-700 to-amber-900 text-white' :
                    'bg-slate-800 text-gray-400'
                  }`}>
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white flex items-center gap-2">
                      {user.name} {user.badge}
                    </div>
                    {user.isCurrentUser && <div className="text-xs text-green-400 font-mono">You (Dynamic Score)</div>}
                  </div>
                </div>
                
                <div className="col-span-4 text-right">
                  <span className="text-xl font-mono text-purple-300 font-bold">
                    {user.score.toLocaleString()} Points
                  </span>
                </div>
              </div>
            ))
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

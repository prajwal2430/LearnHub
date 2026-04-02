import User from "../models/User.js";

// Get user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    console.error("Error getting user:", err);
    res.status(500).json({ message: "Server error" });
  }
};
export const updateUserPoints = async (req, res) => {
  try {
    const { userId, points } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.points = points;
    await user.save();
    res.status(200).json({ message: "Points updated successfully", points });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get leaderboard (Top 50 users by points)
export const getLeaderboard = async (req, res) => {
  console.log("Leaderboard - GET /api/user/leaderboard hit");
  try {
    const topUsers = await User.find({})
      .select('name username points')
      .sort({ points: -1 })
      .limit(50);
    
    console.log(`Leaderboard - Found ${topUsers.length} users`);
    res.status(200).json(topUsers);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ message: "Server error" });
  }
};

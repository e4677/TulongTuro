import supabase from '../config/supabaseClient.js';

export const sendMessage = async (req, res) => {
  const roomId = req.params.roomId;
  const content = req.body.content;
  const senderId = req.user.userId;

  if (!content || content.trim() === '') {
    return res.status(400).json({ error: 'Message content cannot be empty' });
  }

  try {
    const { data, error } = await supabase
      .from('messages')
      .insert([
        {
          room_id: roomId,
          sender_id: senderId,
          content: content.trim(),
        },
      ])
      .select();

    if (error) throw error;

    return res.status(201).json({ message: 'Message sent successfully', data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};


export const getMessages = async (req, res) => {
  const roomId = req.params.roomId;
  const lastTimestamp = req.query.timestamp;
  const date = new Date(parseInt(lastTimestamp) + 1);

  if (!roomId) {
    return res.status(400).json({ error: 'Missing room ID' });
  }

  try {
    const { data: messages, error } = await supabase
      .from('messages')
      .select('*, users(*)')
      .eq('room_id', roomId)
      .gt('created_at', date.toISOString())
      .order('created_at', { ascending: true });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
};

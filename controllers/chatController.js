import supabase from '../config/supabaseClient.js';

export const sendMessage = async (req, res) => {
  const { roomId, content } = req.body;
  const senderId = req.user.userId;

  const { data, error } = await supabase
    .from('messages')
    .insert([
      { 
        room_id: roomId,
        sender_id: senderId,
        content: content,
      },
    ])
    .select();

  console.log(data, error);
};

export const getMessages = async (req, res) => {
  const roomId = req.params.roomId;

  console.log(req.user)
};

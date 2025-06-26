

const CreateNotificationSocket = (patientId, onMessage, onError, onClose) => {
  console.log(patientId)
  const socket = new WebSocket(`wss://diabetes-care-center-api.onrender.com/notifications/ws?patient_id=${patientId}`);

//   postgresql://postgres:DBxoNrcjSiClzBpibeiHrlNhJstUYcyZ@mainline.proxy.rlwy.net:24662/railway
  // postgresql://postgres:DBxoNrcjSiClzBpibeiHrlNhJstUYcyZ@mainline.proxy.rlwy.net:24662/railway
  socket.onopen = () => {
    console.log('✅ WebSocket connected');
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      onMessage?.(data);
      console.log('Connections success : data :',data)
    } catch (err) {
      console.error('🛑 Failed to parse WebSocket message:', err);
    }
  };

  socket.onerror = (error) => {
    console.error('❌ WebSocket error:', error);
    onError?.(error);
  };

  socket.onclose = () => {
    console.log('🔌 WebSocket connection closed');
    onClose?.();
  };

  return socket;
};

export default CreateNotificationSocket;

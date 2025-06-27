

const CreateNotificationSocket = (patientId, onMessage, onError, onClose) => {
  console.log(`Connecting to SSE for patient ID: ${patientId}`)

  const eventSource = new EventSource(`https://diabetes-care-center-api.onrender.com/api/v1/sse/notifications?patient_id=${patientId}`)
  //   postgresql://postgres:DBxoNrcjSiClzBpibeiHrlNhJstUYcyZ@mainline.proxy.rlwy.net:24662/railway
  // postgresql://postgres:DBxoNrcjSiClzBpibeiHrlNhJstUYcyZ@mainline.proxy.rlwy.net:24662/railway
  eventSource.onopen = () => {
    console.log('✅ SSE connected');
  };

 eventSource.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      onMessage?.(data);
      console.log('SSE message received:', data);
    } catch (err) {
      console.error('🛑 Failed to parse SSE message:', err);
      onError?.(err);
    }
  };

  eventSource.addEventListener('error', (error) => {
    console.error('❌ SSE error:', error);
    onError?.(error);
    

    setTimeout(() => {
      console.log('Attempting to reconnect SSE...');
      CreateNotificationSocket(patientId, onMessage, onError, onClose);
    }, 5000);
  });


  const closeConnection = () => {
    console.log('🔌 Closing SSE connection');
    eventSource.close();
    onClose?.();
  };

  return {
    close: closeConnection
  };
};


export default CreateNotificationSocket;

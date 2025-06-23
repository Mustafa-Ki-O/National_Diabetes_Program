import axiosInstanceDS from "../axiosServiceDS";

const PostMsg = (userMessage) => {
  const msgData = {
    model: "openai/gpt-4o",  // تحقق من اسم النموذج الصحيح في وثائق API
    messages: [
      {
        role: "user", 
        content: userMessage  // السؤال الطبي من المريض
      }
    ],

  };

  return new Promise((resolve, reject) => {
     axiosInstanceDS.post('/chat/completions', msgData)
      .then(response => {
        resolve(response.data.choices[0].message.content);  // إرجاع نص الإجابة فقط
      })
      .catch(error => {
        reject(error.response?.data || error.message);
      });
  });
};

export default PostMsg;
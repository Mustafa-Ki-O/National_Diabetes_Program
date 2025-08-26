const GeneratePassword = (length = 8) => {
           
       const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
       const buf = new Uint8Array(length);
     
     
       crypto.getRandomValues(buf);
     
       let out = '';
       for (let i = 0; i < length; i++) {
         out += chars[buf[i] % chars.length];
       }
       return out;
     }
export default GeneratePassword
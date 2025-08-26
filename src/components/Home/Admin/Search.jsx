import { useState, useEffect } from 'react';
import { TextInput, Container, Center, Grid } from '@mantine/core';

const Search = ({ patients, setSearchedPatients }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (!patients) return; 
    
    const searchedPatients = patients.filter((patient) => {
     
      const fullname = patient.fullname?.toString() || '';
      const id_number = patient.id_number?.toString() || '';
      const sugarType = patient.sugarType?.toString() || '';

      return (
        fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        id_number.includes(searchTerm) ||
        sugarType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchedPatients(searchedPatients);
  }, [searchTerm, patients]);

  return (
      
      <TextInput
        // w={{base:'90%'}}
        disabled={patients.length ==0 }
        w={{base:'100%',sm:'100%'}}
        radius={10}
        size="md"
        dir='rtl'
        value={searchTerm}
        onChange={handleSearch}
        placeholder=" الاسم او الرقم الوطني"
        style={{
          input:{
            width:'95%',
            justifyContent:'flex-end'
          },
        }}
      />
  );
};

export default Search;
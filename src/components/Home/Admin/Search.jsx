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
        radius={10}
        size="md"
        dir='rtl'
        value={searchTerm}
        onChange={handleSearch}
        placeholder="ابحث عن مرضى (الرقم الوطني ,الاسم)"
      />
  );
};

export default Search;
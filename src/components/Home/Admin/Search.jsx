import { useState, useEffect } from 'react';
import { TextInput, Container, Center } from '@mantine/core';

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
    <Center>
      <TextInput
        w={{base:'90%',md:500}}
        radius={15}
        size="md"
        dir='rtl'
        value={searchTerm}
        onChange={handleSearch}
        placeholder="ابحث عن مرضى (الرقم الوطني ,الاسم)"
        style={{border:'2px solid #37a8ef',borderRadius:18}}
      />
    </Center>
  );
};

export default Search;
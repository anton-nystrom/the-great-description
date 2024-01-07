
'use client'
import Select from 'react-select'
import { useState, useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import description from '@/pages/api/description';
import AddCasino from '@/components/addCasino';
import AddOrganisation from '@/components/addOrganisation';

const Home = () => {

  const session = useSession();

  const [casinos, setCasinos] = useState([]);
  const [organisations, setOrganisations] = useState([]);
  
  const getCasinos = async () => {
    const response = await fetch('api/getCasinos');
    const data = await response.json();
    return data;
  }

  const getOrganisations = async () => {
    const response = await fetch('api/getOrganisations');
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    async function fetch() {
      const casinos = await getCasinos();
      setCasinos(casinos);
      const organisations = await getOrganisations();
      setOrganisations(organisations);
    }
    fetch();
  }, [])

  const [formData, setFormData] = useState({
    casino: '',
    url: '',
    slot: '',
    organisation: '',
  });

  const handleChange = (e: any) => {
    
    if(e.target && e.target.id && e.target.id === "slot") {
      e = {
        name: "slot",
        value: e.target.value
      }
    }
    const { name, value, url } = e;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      url: url ? url : prevData.url
    }));
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      const text = await description(formData.casino, formData.url, formData.slot, formData.organisation);
      await navigator.clipboard.writeText(text);
      alert(
        "Casino: " + formData.casino + 
        "\nCasino URL: " + formData.url + 
        "\nSlot: " + formData.slot +
        "\nOrganisation: " + formData.organisation
      );
    } catch (error) {
      alert("Error!");
    }
  };
  
  return (
    <div>
      <div className='flex flex-col items-center place-content-center h-[calc(100dvh)]'>
        <h1>The Great Description</h1>
        <div>
          <AddCasino/>
          <AddOrganisation/>
        </div>
        <form onSubmit={submitHandler} className='mt-10'>
          <div>
            <label htmlFor="casino">Casino:</label>
            <Select
              className='bg-transparent text-black'
              options={casinos}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div>
            <label htmlFor="organisation">Organisation:</label>
            <Select
              className='bg-transparent text-black'
              options={organisations}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div>
            <label className='block'>Slot:</label>
            <input
              className='bg-white text-black p-2 rounded'
              placeholder='Slot name...'
              type="text"
              id="slot"
              name="slot"
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col place-content-center mt-10'>
            <button type="submit" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Generate</button>
            <button onClick={() => signOut()} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">Logout</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

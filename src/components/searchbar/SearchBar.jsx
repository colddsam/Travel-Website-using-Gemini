import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SearchBar.css';
import { Input } from 'reactstrap';
import { microphone, scanner, search } from '../../assets/Images';
import data from '../../data/TravelDataset.json';
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const SearchBar = () => {
  const navigate = useNavigate();
  const [imgFile, setImgFile] = useState(null);
    const apiKeyLink = `AIzaSyBsQ3lO6HMEdRhSaKDQloA1vYZ07IV9u5E`;
    const genAI = new GoogleGenerativeAI(apiKeyLink);
    let model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
    const prompt = "name of the place : ";

    const [query, setQuery] = useState('');
    
  const generationConfig = {
    temperature: 0,
    topK: 30,
    topP: 1,
    maxOutputTokens: 2,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];
  const fileToGenerativePart = (file, mimeType) => {
    return {
      inlineData: {
        data: file,
        mimeType,
      },
    };
  };

 const handleUploadedImage = (e) => {
   const selectedFile = e.target.files[0];
   setImgFile(URL.createObjectURL(e.target.files[0]));
   console.log(imgFile);

    if (selectedFile) {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64Data = reader.result.split(',')[1];

        const imageParts = [fileToGenerativePart(base64Data, selectedFile.type)];

        try {
          const result = await model.generateContent(
            [prompt, ...imageParts],
            generationConfig,
            safetySettings
          );
          const response = await result.response;
          const text = await response.text(); 

          setQuery(text);
          navigate(`/details/${text}/${imgFile}`);
        } catch (error) {
          console.error(error);
        }
      };

      reader.readAsDataURL(selectedFile);
    }
  };

    const checkData = data.filter((item) => {
        let resultVar;
        if (query === '') {
            resultVar=null
        }
        else if (item.name.toLowerCase().includes(query.toLowerCase())) {
            resultVar = item;
        }
        else if (item.city.toLowerCase().includes(query.toLowerCase())) {
            resultVar = item;
        }
        else if (item.state.toLowerCase().includes(query.toLowerCase())) {
            resultVar = item;
        }
        
        else {
            resultVar=null
        }
        return resultVar;
    })

  return (
    <div className="search__container">
      <div
        className="search__box"
        style={{
          borderBottomLeftRadius: checkData.length === 0 ? '25px' : '0px',
          borderBottomRightRadius: checkData.length === 0 ? '25px' : '0px',
        }}
      >
        <button>
          <img src={search} alt="search" />
        </button>
        <Input
          className="input"
          placeholder="enter destination"
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
              />
        
        <button>
          <img src={microphone} alt="microphone" />
        </button>
        <Input
          type="file"
          onChange={handleUploadedImage}
          accept="image/png, image/jpeg, image/webp, image/heic, image/heif"
          name="image"
        id="inputButton"
        style={{display:'none'}}
              />
              <button onClick={() => {
                let inputID = document.getElementById('inputButton');
                inputID.click();
        }}>
          <img src={scanner} alt="scanner" />
        </button>
        <ul className="results">
          {data.length &&
            checkData.slice(0, 5).map((item, index) => (
              <Link to={`/details/${item.name}/${imgFile}`}  key={index} className="result">
                <span>{item.name}</span>
                <span style={{ color: '#B4B4B8', fontSize: '14px' }}>,{item.city}</span>
                <span style={{ color: '#B4B4B8', fontSize: '14px' }}>,{item.state}</span>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;

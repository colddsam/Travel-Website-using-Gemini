// node --version # Should be >= 18
// npm install @google/generative-ai

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyBsQ3lO6HMEdRhSaKDQloA1vYZ07IV9u5E";

const jsonHotel = async (city) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
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

const parts = [
    { text: "i will provide the city name you will generate n no of hotels list with the following description: \"city\",\"name\",\"price\",\"rating\"" },
    { text: "input: agra" },
    { text: "[\n { \"city\":\"agra\", \"name\":\"Radisson Hotel Agra\", \"price\": 9907, \"rating\":4 }, { \"city\":\"agra\", \"name\":\"Trident Agra\", \"price\":9025, \"rating\":5 }, { \"city\":\"agra\", \"name\":\"Hotel Alleviate\", \"price\":1992, \"rating\":3 }, { \"city\":\"agra\", \"name\":\"Taj Inn Hotel\", \"price\":1796, \"rating\":4 }, { \"city\":\"agra\", \"name\":\"Hotel Parador Agra\", \"price\":2552, \"rating\":5 }\n]" },
    { text: "input: jaipur" },
    { text: "[\n { \"city\":\"jaipur\", \"name\":\"Hayat Palace Jaipur Malviya Nagar\", \"price\":7499, \"rating\":4 }, { \"city\":\"jaipur\", \"name\":\"Hotel Metro Inn\", \"price\":1325, \"rating\":4 }, { \"city\":\"jaipur\", \"name\":\"Radisson Blu Jaipur\", \"price\":7499, \"rating\":4 }, { \"city\":\"jaipur\", \"name\":\"The Grand Hotels and Suites\", \"price\":1251, \"rating\":3 }, { \"city\":\"jaipur\", \"name\":\"Ginger Jaipur\", \"price\":1959, \"rating\":4 }\n]" },
    {text: `input: ${city}`},

];


  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response =  await result.response;
    const resTxt = await response.text();
    const resJes= await JSON.parse(resTxt)
  return resJes;

}

const placeDetails = async(name) => {
    const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
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

  const parts = [
    {text: "give description about the place like this"},
    {text: "input: Taj Mahal"},
    {text: "{\n      \"name\": \"Taj Mahal\",\n      \"city\": \"Agra\",\n      \"rating\": 4.8,\n      \"monthly_visit\": 500000,\n      \"history\": \"The Taj Mahal, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, is a UNESCO World Heritage Site and one of the Seven Wonders of the World. Construction began in 1632 and was completed in 1653.\",\n      \"importance\": \"Symbol of eternal love and architectural marvel\",\n      \"year_of_establish\": 1653\n    }"},
    {text: "input: Jaipur - The Pink City"},
    {text: "{\n      \"name\": \"Jaipur - The Pink City\",\n      \"city\": \"Jaipur\",\n      \"rating\": 4.5,\n      \"monthly_visit\": 300000,\n      \"history\": \"Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is known for its vibrant culture, historic forts, and palaces. The city was painted pink in 1876 to welcome the Prince of Wales.\",\n      \"importance\": \"Rich cultural heritage, magnificent architecture\",\n      \"year_of_establish\": 1727\n    },{\"description\": \"Delhi, India's capital, is a historical marvel. From the majestic India Gate to the ancient Qutub Minar, it harmoniously blends modern life with ancient history.\",\n      \"population\": 21867000,\n      \"area_km2\": 1484,\n      \"official_language\": \"Hindi\",\n      \"latitude\": 28.6139,\n      \"longitude\": 77.2090\n}"},
    {text: `input: ${name}`},
  ];


  const result = await model.generateContent({
    contents: [{ role: "user", parts }],
    generationConfig,
    safetySettings,
  });

  const response = await result.response;
    const resTxt =await response.text();
    const resJes=await JSON.parse(resTxt)
  return resJes;
    
}

export {placeDetails,jsonHotel};
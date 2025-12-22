const axios = require('axios');
require('dotenv').config();

const BIO_SYNC_API_URL = process.env.BIO_SYNC_API_URL || 'https://api.aetherabiosync.com';
const BIO_SYNC_API_KEY = process.env.BIO_SYNC_API_KEY || 'your-biosync-api-key';

// Function to send research data to Aethera BioSync for co-labs
async function sendResearchDataToBioSync(researchId, data) {
  try {
    const response = await axios.post(`${BIO_SYNC_API_URL}/research-data`, 
      { researchId, data }, 
      {
        headers: {
          'Authorization': `Bearer ${BIO_SYNC_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error sending research data to BioSync:', error.message);
    throw new Error('Failed to send research data to BioSync');
  }
}

// Function to retrieve co-lab results from BioSync
async function getCoLabResults(researchId) {
  try {
    const response = await axios.get(`${BIO_SYNC_API_URL}/colab-results/${researchId}`, {
      headers: {
        'Authorization': `Bearer ${BIO_SYNC_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching co-lab results from BioSync:', error.message);
    throw new Error('Failed to fetch co-lab results from BioSync');
  }
}

module.exports = {
  sendResearchDataToBioSync,
  getCoLabResults
};

const CryptoJS = require('crypto-js');
const config = require('../config/app');

class ResearchData {
  constructor(researchId, biomedData, agentId) {
    if (!researchId) throw new Error('Research ID required');
    this.researchId = researchId;
    this.biomedData = biomedData;
    this.agentId = agentId || null;
    this.encrypted = false;
    this.timestamp = new Date().toISOString();
    this.auditLog = [];
    this.reproducibilityReceipt = null;
  }

  addReproducibilityReceipt(receipt) {
    this.reproducibilityReceipt = receipt;
    this.auditLog.push({ action: 'receipt added', timestamp: new Date().toISOString() });
  }

  encrypt() {
    if (this.encrypted) throw new Error('Data already encrypted');
    const key = config.encryptionKey;
    this.encryptedData = CryptoJS.AES.encrypt(JSON.stringify(this), key).toString();
    this.encrypted = true;
    this.auditLog.push({ action: 'encrypted', timestamp: new Date().toISOString() });
  }

  toJSON() {
    if (this.encrypted) {
      return { encryptedData: this.encryptedData, auditLog: this.auditLog };
    }
    return {
      researchId: this.researchId,
      biomedData: this.biomedData,
      agentId: this.agentId,
      timestamp: this.timestamp,
      reproducibilityReceipt: this.reproducibilityReceipt,
      auditLog: this.auditLog,
    };
  }
}

module.exports = ResearchData;

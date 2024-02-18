export class HashMap {
    constructor(bucketSize = 20) {
      this.buckets = Array(bucketSize).fill(null).map(() => []);
      this.bucketSize = bucketSize;
    }
  
    hash(key) {
      let hashCode = 0;
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.bucketSize;
      }
      return hashCode;
    }
  
    set(key, value) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      const foundIndex = bucket.findIndex(([storedKey]) => storedKey === key);
  
      if (foundIndex === -1) {
        bucket.push([key, value]);
      } else {
        bucket[foundIndex][1] = value;
      }
    }
  
    get(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      const foundEntry = bucket.find(([storedKey]) => storedKey === key);
  
      return foundEntry ? foundEntry[1] : null;
    }
  
    has(key) {
      return this.get(key) !== null;
    }
  
    remove(key) {
      const index = this.hash(key);
      const bucket = this.buckets[index];
      const foundIndex = bucket.findIndex(([storedKey]) => storedKey === key);
  
      if (foundIndex !== -1) {
        bucket.splice(foundIndex, 1);
        return true;
      }
      return false;
    }
  
    length() {
      let count = 0;
      this.buckets.forEach(bucket => count += bucket.length);
      return count;
    }
  
    clear() {
      this.buckets.forEach(bucket => bucket.length = 0);
    }
  
    keys() {
      const allKeys = [];
      this.buckets.forEach(bucket => {
        bucket.forEach(([key]) => {
          allKeys.push(key);
        });
      });
      return allKeys;
    }
  
    values() {
      const allValues = [];
      this.buckets.forEach(bucket => {
        bucket.forEach(([, value]) => {
          allValues.push(value);
        });
      });
      return allValues;
    }
  
    entries() {
      const allEntries = [];
      this.buckets.forEach(bucket => {
        bucket.forEach(entry => {
          allEntries.push(entry);
        });
      });
      return allEntries;
    }
  }
  
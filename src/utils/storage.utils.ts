export class StorageUtil {
  // Function to save data to session storage
  public static storageSave<T>(key: string, value: T): void {
    // Set the item in session storage with the key and stringified value
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // Function to read data from session storage
  public static storageRead<T>(key: string): T | undefined {
    // Get the item stored in session storage with the given key
    const storedValue = sessionStorage.getItem(key);

    try {
      // If the stored value exists, return the parsed value as type T
      if (storedValue) {
        return JSON.parse(storedValue) as T;
      }
      // Return null if the stored value does not exist
      return undefined;
    } catch (error) {
      // If an error occurs while parsing the stored value, remove the item from session storage and return null
      sessionStorage.removeItem(key);
      return undefined;
    }
  }
}

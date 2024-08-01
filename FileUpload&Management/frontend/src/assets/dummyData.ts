// Define a type for file metadata
export interface FileMetadata {
    filename: string;
    created_at: Date;
    file_size: number;
}

// Generate a random string of a given length
const generateRandomString = (length: number): string => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

// Generate a random date in the past
const generateRandomDate = (): Date => {
    const start = new Date(2020, 0, 1); // Start date
    const end = new Date(); // End date
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Generate an array of fake file metadata
const generateFakeFiles = (numFiles: number): FileMetadata[] => {
    const files: FileMetadata[] = [];
    for (let i = 0; i < numFiles; i++) {
        const filename = generateRandomString(10) + '.txt'; // Example filename
        const created_at = generateRandomDate(); // Random date
        const file_size = Math.floor(Math.random() * 10000) + 1; // Random file size in bytes

        files.push({
            filename,
            created_at,
            file_size
        });
    }
    return files;
};

// Generate 5 fake files
export const fakeFiles = generateFakeFiles(5);

console.log(fakeFiles);
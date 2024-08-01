
export interface File {
    filename: string;
    created_at: Date;
    file_size: number | null;
}

export interface FileMetadata {
    filename: string;
    created_at: Date;
    file_size: number;
}

export type Files = FileMetadata[];
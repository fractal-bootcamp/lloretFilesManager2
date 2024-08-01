import React, { useState } from "react";
import ViewFile from "../compound/ViewFile";
import ViewMultipleFiles, { Files } from "../compound/ViewMultipleFiles";

export interface File {
  filename: string;
  created_at: Date;
  file_size: number;
}

// Define a type for file metadata
export interface FileMetadata {
  filename: string;
  created_at: Date;
  file_size: number;
}

// Define the prop type for ViewFolderMyFiles
interface ViewFolderMyFilesProps {
  files: Files; // This should be an array of File
  onViewSelection: (file: File) => void;
}

const ViewFolderMyFiles: React.FC<ViewFolderMyFilesProps> = ({
  files,
  onViewSelection,
}) => {
  return (
    <>
      <div>
        <h2>My Files</h2>
        <ViewMultipleFiles onViewSelection={onViewSelection} files={files} />
      </div>
    </>
  );
};

export default ViewFolderMyFiles;

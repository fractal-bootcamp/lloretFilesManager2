import React from "react";
import ViewFolderMyFiles from "./ViewFolder_MyFiles";
import ViewFolderSharedWithMe from "./ViewFolder_SharedWithMe";

export interface File {
  filename: string;
  created_at: Date;
  file_size: number;
}

export interface FileMetadata {
  filename: string;
  created_at: Date;
  file_size: number;
}

export type Files = FileMetadata[];

interface ViewFolderProps {
  files: Files;
  onViewSelection: (file: File) => void;
}

const ViewFolder: React.FC<ViewFolderProps> = ({ files, onViewSelection }) => {
  return (
    <>
      <div>
        <div>
          <h2>View Files</h2>
        </div>
        <div>
          <ViewFolderMyFiles onViewSelection={onViewSelection} files={files} />
          <ViewFolderSharedWithMe />
        </div>
      </div>
    </>
  );
};

export default ViewFolder;

import React from "react";

// Basic component that will be reused in MyFiles and SharedWithMe. If it is in My Files, option to share.

export interface File {
  filename: string;
  created_at: Date;
  file_size: number;
}

interface ViewFileProps {
  file: File;
}

//example of props with metadata:
// file.filename, file.created_at, file.file_size
const ViewFile: React.FC<ViewFileProps> = ({ file }) => {
  const { filename, created_at, file_size } = file;

  // We convert timestamp to Date for display
  const createdDate = new Date(created_at).toLocaleDateString();
  // We use toLocaleDateString() to convert Date to a renderable string format. Otherwise, this error: Type 'Date' is not assignable to type 'ReactNode'.ts(2322)

  return (
    <>
      <div className="flex-col p-2 bg-slate-400 text-blue-700 max-h-32 max-w-32">
        <div>
          <h3>Filename: {filename}</h3>
        </div>
        <div>
          <h3>Date of creation: {createdDate}</h3>
        </div>
        <div>
          <h3>Size: {file_size}</h3>
        </div>
      </div>
    </>
  );
};

export default ViewFile;

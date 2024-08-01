import React, { useState, useEffect } from "react";
import { fakeFiles } from "../../assets/dummyData";
import ViewFile from "./ViewFile";

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

interface ViewMultipleFilesProps {
  files: Files;
  onViewSelection: (file: File) => void;
}
// Component
const ViewMultipleFiles: React.FC<ViewMultipleFilesProps> = ({
  files,
  onViewSelection,
}) => {
  // State to manage hover for individual items
  const [hoveredFileIndex, setHoveredFileIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHoveredFileIndex(index);
  const handleMouseLeave = () => setHoveredFileIndex(null);

  const handleView = (file: File) => {
    onViewSelection(file);
  };
  return (
    <>
      <div>
        Files
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {files.map((file, index) => {
            const isHovered = hoveredFileIndex === index;

            // Log file info when hovered
            if (isHovered) {
              console.log(file);
            }

            return (
              <div
                key={index}
                className="flex flex-col items-center border p-4 bg-gray-100 rounded-lg shadow h-32 w-32"
              >
                <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    padding: "20px",
                    backgroundColor: isHovered ? "lightblue" : "lightgray",
                    borderRadius: "4px",
                    textAlign: "center",
                  }}
                  className="border-2 border-blue-800 p-4 text-sm"
                >
                  {isHovered ? (
                    <>
                      Hovering!{" "}
                      <button onClick={() => handleView(file)}>
                        <ViewFile file={file} />{" "}
                      </button>
                    </>
                  ) : (
                    "Hover over me"
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ViewMultipleFiles;

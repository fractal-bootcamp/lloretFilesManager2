import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import React, { useState, useEffect } from "react";
import ViewFolder from "./components/pages/ViewFolder";
import Uploader from "./components/pages/Uploader";
import ViewFile from "./components/compound/ViewFile";
import { fakeFiles } from "./assets/dummyData";
import { File, FileMetadata, Files } from "../shared/types";

const App: React.FC = () => {
  const [view, setView] = useState<string>("uploader");
  const [files, setFiles] = useState<Files>([]);
  const [viewFile, setViewFile] = useState<File>();

  //In real life situation, render the data from the database here, in the useEffect
  const data = fakeFiles;
  useEffect(() => {
    setFiles(data);
  }, []);

  const handleViewFile = (file: File) => {
    setViewFile(file);
  };

  const handleClick = (id: string) => {
    setView(id);
  };
  return (
    <>
      <header>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </header>
      <main>
        <div>
          <div>
            <h2 className="text-white font-extrabold">App</h2>
            <button id="uploader" onClick={() => handleClick("uploader")}>
              Uploader
            </button>
            <button id="viewFolder" onClick={() => handleClick("viewFolder")}>
              View Folder
            </button>
          </div>
        </div>
        <div className="flex flex-row space-x-32">
          <div className="py-8 max-w-screen-md">
            {view === "uploader" && <Uploader />}
            {view === "viewFolder" && (
              <ViewFolder onViewSelection={handleViewFile} files={files} />
            )}
          </div>
          <div className="bg-slate-300 w-80">
            <p>{JSON.stringify(viewFile)}</p>
          </div>
        </div>
      </main>
    </>
  );
};
export default App;

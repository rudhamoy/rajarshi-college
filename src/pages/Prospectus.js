import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Viewer } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import { Worker } from '@react-pdf-viewer/core';

// import pdfFile from "../data/prospectus.pdf";

const Prospectus = () => {
  // const [defaultPdfFile] = useState(pdfFile)
  const [embedURL] = useState(
    "https://drive.google.com/file/d/100-liT--Po4jq45V1HGTZ3yfioUsI2KA/preview"
  );

  //create new plugin instances
  // const defaultLayoutPluginInstance = defaultLayoutPlugin()
  return (
    <div className=" m-auto">
      <h1 className="text-2xl my-4">Prospectus 2021</h1>
      <button className="bg-blue-700 text-white my-3 py-2 px-4">
        <a href="https://drive.google.com/file/d/100-liT--Po4jq45V1HGTZ3yfioUsI2KA/view">
          View/Download
        </a>
      </button>
      <div className="flex justify-center">
        <iframe
          src={embedURL}
          width="92%"
          height="480"
          allow="autoplay"
        ></iframe>
        {/**
                {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultPdfFile}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
                 */}
      </div>
    </div>
  );
};

export default Prospectus;

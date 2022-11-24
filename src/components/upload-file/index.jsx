import React from "react";
import { useState } from "react";
import { fileUpload } from "../../services/class";
import _ from 'lodash';

import './styles.scss';

export default function UploadFile({ setFileId }) {
  const [file, setFile] = useState("suba la imagen de portada");
  const [error, setError] = useState(false);

  function handleChange(e) {
    const filename = _.get(e, "target.files[0].name", "select your file");
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setFile(filename);
    setError(false);
    fileUpload(formData)
      .then(({ id }) => {
        setFileId(id);
      })
      .catch(() => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      });
  }

  return (
    <>
      <div className="content-file">
        <input
          type="file"
          name="fileUp"
          id="file"
          className="inputfile"
          onChange={handleChange}
        />
        <label htmlFor="file">
          <span>{error ? "Error to upload file" : file}</span>
        </label>
      </div>
      <br />
      <h3 className="file-format-supported">
        Archivos soportados: PDF, JPG, JPEG, PNG, SVG (max 5mb)
      </h3>
    </>
  );
}

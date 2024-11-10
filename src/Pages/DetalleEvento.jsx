import React, { useState, useRef, useCallback } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeftOutlined, CloseOutlined, CameraOutlined, PictureOutlined, SoundOutlined } from "@ant-design/icons";
import { Switch, Button } from "antd";
import Webcam from "react-webcam";

const DetalleEvento = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const webcamRef = useRef(null);

  const handleCameraClick = () => {
    setIsCameraOpen(true);
  };

  const capturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImages((prevImages) => [...prevImages, imageSrc]);
    setIsCameraOpen(false); // Cerrar la cámara después de capturar la foto
  }, [webcamRef]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map(file => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...fileURLs]);
  };

  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleAnonymousToggle = (checked) => {
    setIsAnonymous(checked);
  };

  const handleReport = () => {
    console.log({
      description,
      images,
      isAnonymous,
      location: { lat, lng },
    });
    alert("Reporte enviado");
  };

  return (
    <div className="w-screen h-screen bg-white">
      {/* Cabecera */}
      <div className="text-xl text-black flex justify-between py-3 px-5 mb-4">
        <span><Link to={'/'} ><ArrowLeftOutlined /></Link></span>
        <p>Reportar</p>
        <span><Link to={'/'} ><CloseOutlined /></Link></span>
      </div>

      {/* Área de entrada para el reporte */}
      <div className="p-4 flex flex-col justify-between h-[calc(100vh-130px)]">
        <textarea
          className="w-full h-full rounded-md border border-gray-300 p-3 text-lg"
          placeholder="¿Qué está sucediendo en este sitio?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Íconos para cámara, galería y ubicación */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-gray-300">
          {/* Botón para abrir la cámara */}
          <CameraOutlined 
            style={{ fontSize: '24px' }} 
            onClick={handleCameraClick} 
          />

          {/* Botón para subir imágenes desde la galería */}
          <label>
            <PictureOutlined style={{ fontSize: '24px' }} />
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </label>

          {/* Ubicación */}
          <div className="text-sm text-gray-500">
            Departamento, {lat}, {lng}, País
          </div>
        </div>
        {/* Lista de fotos capturadas */}
        <div className="flex space-x-2 mt-4 overflow-x-auto">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`captured ${index}`}
                  className="w-16 h-16 rounded-md border"
                />
                <button
                  onClick={() => handleDeleteImage(index)}
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Opciones de reporte y botón de enviar */}
          <div className="flex justify-between items-center w-full px-5 py-3 mt-5 border-t border-gray-300">
            {/* Alternar reporte anónimo */}
            <div className="flex items-center">
              <Switch checked={isAnonymous} onChange={handleAnonymousToggle} />
              <span className="ml-2 text-sm text-gray-500">Reporte Anónimo</span>
            </div>

            {/* Botón de reporte */}
            <Button
              type="primary"
              icon={<SoundOutlined />}
              onClick={handleReport}
            >
              Reportar
            </Button>
          </div>
      </div>

      {/* Vista de la cámara y botón de captura */}
      {isCameraOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full h-auto max-w-[90%] rounded-lg"
          />
          <button
            onClick={capturePhoto}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Capturar
          </button>
          <button
            onClick={() => setIsCameraOpen(false)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Cerrar Cámara
          </button>

          
        </div>
      )}
    </div>
  );
};

export default DetalleEvento;
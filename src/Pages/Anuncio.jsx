import React, { useState } from "react";
import { LikeOutlined, CommentOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";

// Componente Noticia
const Noticia = ({ noticia, onCommentClick }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-3">
        <Avatar src={noticia.usuarioFoto} size={40} />
        <div className="ml-3">
          <p className="font-semibold">{noticia.usuarioNombre}</p>
          <p className="text-xs text-gray-500">{moment(noticia.fecha).fromNow()}</p>
        </div>
      </div>

      <p className="text-gray-700 mb-3">{noticia.descripcion}</p>

      {noticia.fotos && noticia.fotos.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mb-3">
          {noticia.fotos.map((foto, index) => (
            <img key={index} src={foto} alt="Noticia" className="w-full h-auto rounded-md" />
          ))}
        </div>
      )}

      <div className="flex justify-around pt-2 border-t border-gray-200">
        <Button icon={<LikeOutlined />} type="link">Like</Button>
        <Button icon={<CommentOutlined />} type="link" onClick={() => onCommentClick(noticia)}>
          Comment
        </Button>
        <Button icon={<ShareAltOutlined />} type="link">Share</Button>
      </div>
    </div>
  );
};

// Componente Anuncio
const Anuncio = () => {
  const [filtro, setFiltro] = useState("recientes");
  const navigate = useNavigate();

  const noticias = [
    {
      id: 1,
      usuarioNombre: "Juan Pérez",
      usuarioFoto: "https://randomuser.me/api/portraits/men/1.jpg",
      fecha: moment().subtract(5, 'minutes').toISOString(),
      descripcion: "Incendio en el centro de Arequipa. Los bomberos ya están en camino.",
      fotos: ["https://via.placeholder.com/300x200"],
      comentarios: [
        {
          usuarioNombre: "Carlos González",
          usuarioFoto: "https://randomuser.me/api/portraits/men/2.jpg",
          comentario: "Espero que todos estén bien, es terrible lo que está pasando.",
          likes: 15
        }
      ],
      ubicacion: {
        departamento: "Arequipa",
        distrito: "Cercado",
        latitud: -16.4090474,
        longitud: -71.537451,
        pais: "Perú"
      }
    },
    {
      id: 2,
      usuarioNombre: "Maria Lopez",
      usuarioFoto: "https://randomuser.me/api/portraits/women/3.jpg",
      fecha: moment().subtract(1, 'hour').toISOString(),
      descripcion: "Denuncian un caso de maltrato animal en Paucarpata.",
      fotos: ["https://via.placeholder.com/300x200"],
      comentarios: [
        {
          usuarioNombre: "Ana Mendoza",
          usuarioFoto: "https://randomuser.me/api/portraits/women/4.jpg",
          comentario: "Es horrible que aún haya personas que hagan esto. ¿Cómo podemos ayudar?",
          likes: 32
        }
      ],
      ubicacion: {
        departamento: "Arequipa",
        distrito: "Paucarpata",
        latitud: -16.4230556,
        longitud: -71.5197222,
        pais: "Perú"
      }
    },
    {
      id: 3,
      usuarioNombre: "Ricardo Sánchez",
      usuarioFoto: "https://randomuser.me/api/portraits/men/5.jpg",
      fecha: moment().subtract(2, 'hours').toISOString(),
      descripcion: "Se reportó un robo en Yanahuara. La policía está investigando.",
      fotos: ["https://via.placeholder.com/300x200"],
      comentarios: [
        {
          usuarioNombre: "Sofía García",
          usuarioFoto: "https://randomuser.me/api/portraits/women/6.jpg",
          comentario: "Espero que encuentren a los responsables, esta situación es alarmante.",
          likes: 22
        }
      ],
      ubicacion: {
        departamento: "Arequipa",
        distrito: "Yanahuara",
        latitud: -16.3946031,
        longitud: -71.548721,
        pais: "Perú"
      }
    },
    {
      id: 4,
      usuarioNombre: "Ana Morales",
      usuarioFoto: "https://randomuser.me/api/portraits/women/7.jpg",
      fecha: moment().subtract(3, 'hours').toISOString(),
      descripcion: "Emergencia en Cayma por desborde de un canal.",
      fotos: ["https://via.placeholder.com/300x200"],
      comentarios: [
        {
          usuarioNombre: "Luis Castro",
          usuarioFoto: "https://randomuser.me/api/portraits/men/8.jpg",
          comentario: "Espero que la ayuda llegue rápido. ¿Alguien sabe si hubo daños?",
          likes: 28
        }
      ],
      ubicacion: {
        departamento: "Arequipa",
        distrito: "Cayma",
        latitud: -16.3746188,
        longitud: -71.5369615,
        pais: "Perú"
      }
    },
    {
      id: 5,
      usuarioNombre: "Miguel Torres",
      usuarioFoto: "https://randomuser.me/api/portraits/men/9.jpg",
      fecha: moment().subtract(5, 'hours').toISOString(),
      descripcion: "Violencia en Alto Selva Alegre. Vecinos piden más seguridad.",
      fotos: ["https://via.placeholder.com/300x200"],
      comentarios: [
        {
          usuarioNombre: "Elena López",
          usuarioFoto: "https://randomuser.me/api/portraits/women/10.jpg",
          comentario: "Cada vez es más peligroso salir de noche, necesitamos más patrullas.",
          likes: 33
        }
      ],
      ubicacion: {
        departamento: "Arequipa",
        distrito: "Alto Selva Alegre",
        latitud: -16.391009,
        longitud: -71.514411,
        pais: "Perú"
      }
    },
    {
      id: 6,
      usuarioNombre: "Patricia Fuentes",
      usuarioFoto: "https://randomuser.me/api/portraits/women/11.jpg",
      fecha: moment().subtract(1, 'day').toISOString(),
      descripcion: "Incendio en Sachaca. Los vecinos han comenzado a evacuar la zona.",
      fotos: ["https://via.placeholder.com/300x200"],
      comentarios: [
        {
          usuarioNombre: "Roberto Díaz",
          usuarioFoto: "https://randomuser.me/api/portraits/men/12.jpg",
          comentario: "Ojalá todos estén a salvo, es una tragedia lo que está pasando.",
          likes: 50
        }
      ],
      ubicacion: {
        departamento: "Arequipa",
        distrito: "Sachaca",
        latitud: -16.4158353,
        longitud: -71.5650591,
        pais: "Perú"
      }
    }
];


  const menu = (
    <Menu onClick={(e) => setFiltro(e.key)}>
      <Menu.Item key="recientes">Recientes</Menu.Item>
      <Menu.Item key="cercanas">Cercanas</Menu.Item>
      <Menu.Item key="populares">Populares</Menu.Item>
    </Menu>
  );

  const noticiasFiltradas = noticias.sort((a, b) => {
    switch (filtro) {
      case "recientes":
        return new Date(b.fecha) - new Date(a.fecha);
      case "cercanas":
        return 0;
      case "populares":
        return 0;
      default:
        return 0;
    }
  });

  const handleCommentClick = (noticia) => {
    navigate("/detalleComentarEvento", { state: { noticia } });
  };

  return (
    <div className="w-screen h-screen p-4 bg-gray-100 overflow-y-auto">
      <div className="flex justify-end mb-4">
        <Dropdown overlay={menu} placement="bottomRight">
          <Button>Filtrar: {filtro}</Button>
        </Dropdown>
      </div>
      {noticiasFiltradas.map((noticia) => (
        <Noticia key={noticia.id} noticia={noticia} onCommentClick={handleCommentClick} />
      ))}
    </div>
  );
};

export default Anuncio;
